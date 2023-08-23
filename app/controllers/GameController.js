import { AppState } from "../AppState.js";
import { characterService } from "../services/CharactersService.js";
import { gameService } from "../services/GameService.js";
import { setHTML, setText } from "../utils/Writer.js";

function _initBossStats() {
  gameService.initBossStats()
}

function _drawBoss() {
  if (AppState.page == '#/game') {
    let boss = AppState.boss.find(b => b.active == true)
    // @ts-ignore
    setHTML('boss', boss.bossTemplate)
    // @ts-ignore
    document.body.style.setProperty('--bossKiColor', boss.kiColor)
    // @ts-ignore
    setHTML('bossIcon', boss.bossIcon)
  }
}

function _drawBossStats() {
  if (AppState.page == '#/game') {
    let boss = AppState.activeBoss
    // @ts-ignore
    setText('bossPowerLevel', `Power Level: ${boss.powerLevel}`)
    // @ts-ignore
    setHTML('bossTillDmg', boss.bossAttackBar)
  }
}

function _drawHealthBar() {
  if (AppState.page == '#/game') {
    let boss = AppState.activeBoss
    // @ts-ignore
    setHTML('bossHp', boss.bossHealthBar)
  }
}

function _drawEffects() {
  if (AppState.page == '#/game') {
    let boss = AppState.boss.find(b => b.active == true)
    let effects = AppState.effects
    let effectIndex = AppState.effectIndex
    let template = ''
    template = boss.bossDamageEffect
    setHTML(effectIndex[effects], boss.bossDamageEffect)
  }
}

function _setBackground() {
  document.getElementById('router-view').style.backgroundImage = `url(assets/img/Other/TitleBackground.png)`
}

export class GameController {
  constructor() {
    console.log('[Game Controller]')

    _initBossStats()
    _drawBossStats()
    _drawHealthBar()
    _drawBoss()
    _setBackground()
    AppState.on('activeBoss', _drawHealthBar)
    AppState.on('activeBoss', _drawBossStats)
    AppState.on('boss', _drawBoss)
    AppState.on('effects', _drawEffects)
  }



  pauseGame() {
    gameService.pauseGame()
  }
  quitGame() {
    gameService.quitGame()
  }

  attack(bossId) {
    gameService.attack(bossId)
    characterService.animateAttack()
  }
  static damageCharacters() {
    gameService.damageCharacters()
  }
}
