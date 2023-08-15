import { AppState } from "../AppState.js"
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

  damageCharacters() {
    if (AppState.page == '#/game') {
      console.log('[DamagCharacters]')
      let boss = AppState.boss.find(b => b.active == true)

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
            boss.bossTillDmg = 0
            AppState.emit('characters')
            console.log('[Attack]')
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
        boss.bossTillDmg = 0
        // console.log('[Stalling timer]', boss.bossTillDmg = 0)
        return
      } else {

        // @ts-ignore
        if (boss.bossTillDmg < boss.bossDmgRate) {

          // @ts-ignore
          boss.bossTillDmg += boss.bossDmgRate / 50;
        } else {
          // @ts-ignore
          boss.bossTillDmg = 0;
          console.log('[Damage Characters]')
          // NOTE Just changed this might break
          gameService.damageCharacters()

        }
        AppState.emit('bossStats')
      }
    }
  }

  attack(bossId) {
    // SECTION Damage effect

    AppState.effects++
    if (AppState.effects >= 2) {
      AppState.effects = 0
    }


    // SECTION damage boss
    let bossBar = document.getElementById('bossHp')
    // @ts-ignore
    bossBar.classList.add('shake')

    setTimeout(this.stopDamage, 50)

    let boss = AppState.boss
    let findBoss = boss.find(b => b.id == bossId)
    // @ts-ignore
    if (findBoss.health > 0) {
      // @ts-ignore
      let damage = 0
      let characters = AppState.characters
      characters.forEach(c => {
        if (c.elementId != null && c.state != 'block') {
          damage += c.dmg
          c.powerLevel += c.powerLevelMod
          AppState.emit('bossStats')
        }
      })
      // @ts-ignore
      if (AppState.powerLevelTotal > findBoss.powerLevel) {
        // @ts-ignore
        findBoss.health -= damage * 1.5;
        // @ts-ignore
      } findBoss.health -= damage;
    } else {

      // @ts-ignore
      findBoss.powerLevel = Math.round(findBoss.powerLevel * findBoss.powerMod)
      // @ts-ignore
      findBoss.health = findBoss.healthMax
      AppState.vegetaUnlocked = true;
      console.log('Vegeta Unlocked', AppState.vegetaUnlocked)
      document.location.href = '#'
    }
    AppState.emit('bossStats')
  }

  stopDamage() {
    if (AppState.page == '#/game') {
      let bossBar = document.getElementById('bossHp')
      // @ts-ignore
      bossBar.classList.remove('shake')
    }
  }

}
export const gameService = new GameService()