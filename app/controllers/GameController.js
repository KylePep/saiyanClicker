import { AppState } from "../AppState.js";
import { characterService } from "../services/CharactersService.js";
import { gameService } from "../services/GameService.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawBoss() {
  let boss = AppState.boss.find(b => b.active == true)
  // @ts-ignore
  setHTML('boss', boss.bossTemplate)
  // @ts-ignore
  document.body.style.setProperty('--bossKiColor', boss.kiColor)
}
function _drawBossStats() {
  let boss = AppState.boss.find(b => b.active == true)
  // @ts-ignore
  setText('bossPowerLevel', `Power Level: ${boss.powerLevel}`)
  // @ts-ignore
  setHTML('bossIcon', boss.bossIcon)
  // @ts-ignore
  setHTML('bossTillDmg', boss.bossAttackBar)
}
function _drawHealthBar() {
  let boss = AppState.boss.find(b => b.active == true)
  // @ts-ignore
  setHTML('bossHp', boss.bossHealthBar)
}

function _drawEffects() {
  let boss = AppState.boss.find(b => b.active == true)
  let effects = AppState.effects
  let effectIndex = AppState.effectIndex
  let template = ''
  template = boss.bossDamageEffect
  // console.log(template)
  // console.log(document.getElementById(effectIndex[effects]))
  setHTML(effectIndex[effects], boss.bossDamageEffect)
}

export class GameController {
  constructor() {
    console.log('[Game Controller]')
    _drawBoss()
    _drawBossStats()
    _drawHealthBar()
    AppState.on('bossStats', _drawHealthBar)
    AppState.on('bossStats', _drawBossStats)
    AppState.on('boss', _drawBoss)
    AppState.on('effects', _drawEffects)
  }

  attack(bossId) {
    gameService.attack(bossId)
    characterService.animateAttack()
  }
  static damageCharacters() {
    gameService.damageCharacters()
  }
}
