import { AppState } from "../AppState.js"
// @ts-ignore
import { GameController } from "../controllers/GameController.js";
import { characterService } from "./CharactersService.js"

class GameService {

  constructor() {
    let boss = AppState.boss.find(b => b.active == true)
    // setInterval(this.damageCharacters, boss?.bossDmgRate)
    setInterval(this.updateBossTimer, boss?.bossDmgRate / 50)
    window.addEventListener("mousemove", this.screenView);

    AppState.on('page', this.checkPage)
  }

  screenView(e) {
    AppState.mouseX = e.clientX;
    AppState.mouseY = e.clientY;
  }

  checkPage() {
    if (AppState.page == '#/game') {
      console.log('[Page]', AppState.page)
      AppState.gamePage = true
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
    document.location.href = '#'
  }

  damageCharacters() {
    if (AppState.page == '#/game') {
      // console.log('[DamagCharacters]')
      let boss = AppState.boss.find(b => b.active == true)

      // @ts-ignore
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

      if (AppState.gamePage == false) {
        // @ts-ignore
        boss.bossTillDmg = 0
        return
      } else {
        // @ts-ignore
        if (boss.bossTillDmg < boss.bossDmgRate) {
          if (AppState.gameState != 'pause') {
            // console.log('not paused')
            // @ts-ignore
            boss.bossTillDmg += boss.bossDmgRate / 50;
          }
          // @ts-ignore
          if (boss.bossTillDmg >= (boss.bossDmgRate / 50) * 49) {
            // @ts-ignore
            boss.imgsrc = boss?.bossAttack
            AppState.emit('boss')
          }
        } else {
          // @ts-ignore
          boss.bossTillDmg = 0;
          // @ts-ignore
          boss.imgsrc = boss?.bossIdle
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
        AppState.emit('boss')
      }
    }
  }

  attack(bossId) {
    // SECTION Damage effect

    AppState.characters.find(c => {
      if (c.elementId != null && c.state != 'down') {
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

    let boss = AppState.boss
    let findBoss = boss.find(b => b.id == bossId)
    // @ts-ignore
    if (findBoss.health > 0) {
      // @ts-ignore
      let damage = 0
      let characters = AppState.characters
      characters.forEach(c => {
        if (c.elementId != null && c.state != 'block' && c.state != 'down') {
          damage += c.dmg
          c.powerLevel += c.powerLevelMod
          AppState.emit('boss')
        }
      })
      // @ts-ignore
      if (AppState.powerLevelTotal > findBoss.powerLevel) {
        // @ts-ignore
        findBoss.health -= (damage * 1.5);
        // @ts-ignore
      } findBoss.health -= damage;
    } else {
      // @ts-ignore
      findBoss.powerLevel = Math.round(findBoss.powerLevel * findBoss.powerMod)
      // @ts-ignore
      findBoss.powerLevelInit = findBoss.powerLevel
      // @ts-ignore
      findBoss.health = findBoss.healthMax
      // @ts-ignore
      findBoss.bossTillDmg = 0
      AppState.vegetaUnlocked = true;
      characterService.successStats()
      document.location.href = '#'
    }
    AppState.emit('boss')
  }

  stopDamage() {
    if (AppState.page == '#/game') {
      let bossBar = document.getElementById('bossHp')
      // @ts-ignore
      bossBar.classList.remove('shake')
    }
  }


  bossStatsReset() {
    let findBoss = AppState.boss.find(b => b.active == true)
    // @ts-ignore
    findBoss.health = findBoss.healthMax
    // @ts-ignore
    findBoss.powerLevel = findBoss?.powerLevelInit
  }

}
export const gameService = new GameService()