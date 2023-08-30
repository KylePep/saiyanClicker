import { AppState } from "../AppState.js"
import { Character } from "../models/Character.js";
import { Game } from "../models/Game.js";
import { GameLock } from "../models/GameLock.js";
import { ShopItem } from "../models/ShopItem.js";
import { loadState, saveState } from "../utils/Store.js"
import { characterService } from "./CharactersService.js"

class GameService {
  constructor() {
    this.loadData()
    this.saveData()
    let boss = AppState.activeBoss
    setInterval(this.updateBossTimer, boss?.bossDmgRate / 50)
    window.addEventListener("mousemove", this.screenView);

    AppState.on('page', this.checkPage)
  }

  saveData() {
    AppState.saveInit = true;
    saveState('saveInit', AppState.saveInit)
    saveState('zennie', AppState.zennie)
    saveState('shopItems', AppState.shopItems)
    saveState('locks', AppState.locks)
    saveState('characters', AppState.characters)
    saveState('boss', AppState.boss)
    console.log('Saved Data', AppState.saveInit)
  }
  loadData() {
    console.log('Is there something to load?')
    AppState.saveInit = loadState('saveInit', [Boolean])
    if (AppState.saveInit == false) {
      console.log('Nothing to load')
      console.log(AppState.saveInit)
      return
    } else {
      console.log('Loaded something')
      AppState.saveInit = loadState('saveInit', [Boolean])
      AppState.zennie = loadState('zennie', [Number])
      AppState.shopItems = loadState('shopItems', [ShopItem])
      AppState.locks = loadState('locks', [GameLock])
      AppState.characters = loadState('characters', [Character])
      AppState.boss = loadState('boss', [Game])
    }
  }

  screenView(e) {
    AppState.mouseX = e.clientX;
    AppState.mouseY = e.clientY;
  }

  initBossStats() {
    let boss = AppState.boss.find(b => b.active == true)
    AppState.activeBoss = boss
    // console.log(AppState.activeBoss)
  }

  checkPage() {
    if (AppState.page == '#/game') {
      console.log('[Page]', AppState.page)
      AppState.gamePage = true
      // gameService.initBossStats()
    } else {
      AppState.gamePage = false
    }
  }

  pauseGame() {
    if (AppState.gameState != 'pause') {
      AppState.gameState = 'pause'
      return
    }
    else {
      AppState.gameState = 'null'
    }

  }

  quitGame() {
    this.bossStatsReset();
    characterService.resetStats();
    AppState.gameState = 'null';
    document.location.href = '#'
  }


  damageCharacters() {
    if (AppState.page == '#/game') {
      let boss = AppState.activeBoss
      // @ts-ignore
      const charDmg = AppState.characters.forEach(c => {
        if (c.elementId != null) {
          if (c.state != 'block') {
            // @ts-ignore
            if (AppState.powerLevelTotal < boss.powerLevel) {
              // @ts-ignore
              c.hp -= (boss.bossDmg) * 1.5
            }
            // @ts-ignore
            c.hp -= boss.bossDmg
            // @ts-ignore
            boss.powerLevel = (boss?.powerLevel * boss?.powerMod).toFixed(0)
            // @ts-ignore
            boss.bossTillDmg = 0
            AppState.emit('characters')
            // console.log('[Attack]')
          }
        }
      })
      characterService.takeDamage()
      return
    }
  }

  updateBossTimer(_this) {
    if (AppState.page == '#/game') {
      let boss = AppState.boss.find(b => b.active == true)
      let bossStats = AppState.activeBoss

      if (AppState.gamePage == false) {
        // @ts-ignore
        bossStats.bossTillDmg = 0
        return
      } else {
        // @ts-ignore
        if (bossStats.bossTillDmg < bossStats.bossDmgRate) {
          if (AppState.gameState != 'pause') {
            // @ts-ignore
            bossStats.bossTillDmg += bossStats.bossDmgRate / 50;
            AppState.emit('activeBoss')
          }
          // @ts-ignore
          if (bossStats.bossTillDmg >= (bossStats.bossDmgRate / 50) * 49) {
            // @ts-ignore
            boss.imgsrc = boss.bossAttack
            AppState.emit('boss')
          }
        } else {
          // @ts-ignore
          bossStats.bossTillDmg = 0;
          // @ts-ignore
          boss.imgsrc = boss.bossIdle
          AppState.emit('boss')
          gameService.damageCharacters()
        }
        let temp = 0
        AppState.characters.forEach(c => {
          if (c.elementId != null) {
            temp += c.powerLevel;
          }
        })
        AppState.powerLevelTotal = temp;
        AppState.emit('activeBoss')
      }
    }
  }

  attack() {
    // SECTION Damage effect

    AppState.characters.find(c => {
      if (c.elementId != null && c.state != 'down' && c.state != 'block') {
        AppState.effects++
        if (AppState.effects >= 2) {
          AppState.effects = 0
        }
      }
    })

    // SECTION damage boss
    let bossBar = document.getElementById('bossHp')

    AppState.characters.find(c => {
      if (c.elementId != null && c.state != 'down') {
        // @ts-ignore
        bossBar.classList.add('shake')
      }
    })

    setTimeout(this.stopDamage, 50)

    let activeBoss = AppState.activeBoss
    let boss = AppState.boss.find(b => b.active == true)
    // @ts-ignore
    if (activeBoss.health > 0) {
      // @ts-ignore
      let damage = 0
      let characters = AppState.characters
      characters.forEach(c => {
        if (c.elementId != null && c.state != 'block' && c.state != 'down') {
          damage += c.dmg
          c.powerLevel += c.powerLevelMod
          AppState.emit('activeBoss')
        }
      })
      // @ts-ignore
      if (AppState.powerLevelTotal > activeBoss.powerLevel) {
        // @ts-ignore
        activeBoss.health -= (damage * 1.5);
        // @ts-ignore
      } activeBoss.health -= damage;
    } else {
      this.unlockProgression()
      // @ts-ignore
      activeBoss.powerLevel = Math.round(activeBoss.powerLevel * activeBoss.powerMod)
      // @ts-ignore
      activeBoss.powerLevelInit = activeBoss.powerLevel
      // @ts-ignore
      activeBoss.health = activeBoss.healthMax
      // @ts-ignore
      activeBoss.activeBossTillDmg = 0
      // @ts-ignore
      AppState.zennie += Math.round(activeBoss.zennieDrop * (activeBoss.powerLevelInit) / 1000)
      boss = activeBoss
      characterService.successStats()
      this.bossStatsReset()
      document.location.href = '#'
    }
    AppState.emit('activeBoss')
  }

  stopDamage() {
    if (AppState.page == '#/game') {
      let bossBar = document.getElementById('bossHp')
      // @ts-ignore
      bossBar.classList.remove('shake')
    }
  }

  unlockProgression() {
    let activeBoss = AppState.activeBoss
    let lockIndex = AppState.locks.findIndex(l => l.name == activeBoss.boss)
    AppState.locks.find(l => {
      // @ts-ignore
      if (l.name == activeBoss.boss)
        l.Unlocked = true;
      if (lockIndex < (AppState.locks.length - 2)) {
        AppState.locks[lockIndex + 1].bossUnlocked = true
      }
    })
    // console.log('ACTIVE BOSS', activeBoss, 'LOCK INDEX', lockIndex, 'APPSTATE LOCKS', AppState.locks)
  }

  bossStatsReset() {
    let findBoss = AppState.activeBoss
    // @ts-ignore
    findBoss.health = findBoss.healthMax
    // @ts-ignore
    findBoss.powerLevel = findBoss.powerLevelInit
    // @ts-ignore
    findBoss.bossTillDmg = 0

  }

}
export const gameService = new GameService()