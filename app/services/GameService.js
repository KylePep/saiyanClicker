import { AppState } from "../AppState.js"
import { CharacterController } from "../controllers/CharacterController.js"
import { characterService } from "./CharactersService.js"

class GameService {

  constructor() {
    //this.delayReset = this.debounce(this.reset)
    let boss = AppState.boss.find(b => b.active == true)
    setInterval(this.damageCharacters, boss.bossDmgRate)
    setInterval(this.updateBossTimer, 500)
    window.addEventListener("mousemove", this.screenView);
  }

  screenView(e) {
    AppState.mouseX = e.clientX;
    AppState.mouseY = e.clientY;
    console.log(AppState.mouseX, AppState.mouseY)
  }

  damageCharacters(damageCharacters) {
    let boss = AppState.boss.find(b => b.active == true)

    const charDmg = AppState.characters.forEach(c => {
      if (c.state != 'block') {
        c.hp -= boss.bossDmg
        boss.powerLevel += 10
        AppState.emit('characters')
      }
    })
    characterService.takeDamage()
  }

  updateBossTimer() {
    let boss = AppState.boss.find(b => b.active == true)
    if (boss.bossTillDmg < boss.bossDmgRate) {
      boss.bossTillDmg += 500;
    } else {
      boss.bossTillDmg = 500;
    }
    AppState.emit('bossStats')
    // console.log(boss.bossTillDmg)
  }

  attack(bossId) {
    // SECTION Damage effect

    // document.body.style.setProperty('--mouseX', AppState.mouseX.toString())
    // document.body.style.setProperty('--mouseY', AppState.mouseY.toString())

    AppState.effects++
    if (AppState.effects >= 2) {
      AppState.effects = 0
    }
    console.log(AppState.effects)


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
        if (c.active == true && c.state != 'block') {
          damage += c.dmg
          c.powerLevel += c.powerLevelMod
          AppState.emit('bossStats')
        }
      })
      // @ts-ignore
      findBoss.health -= damage;
    } else {
      // @ts-ignore
      findBoss.powerLevel = Math.round(findBoss.powerLevel * findBoss.powerMod)
      // @ts-ignore
      findBoss.health = findBoss.healthMax
    }
    AppState.emit('bossStats')
  }
  stopDamage() {
    let bossBar = document.getElementById('bossHp')
    //let bossElem = document.getElementById('boss')
    // @ts-ignore
    bossBar.classList.remove('shake')
    // @ts-ignore
    //bossElem.classList.remove('flash')
  }

  // debounce(func, timeout = 1900) {
  //   let timer
  //   return (...args) => {
  //     clearTimeout(timer)
  //     timer = setTimeout(() => { func.apply(this, args) }, timeout)
  //   }
  // }

}
export const gameService = new GameService()