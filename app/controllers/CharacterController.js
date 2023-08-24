import { AppState } from "../AppState.js"
import { characterService } from "../services/CharactersService.js"
import { setHTML, setText } from "../utils/Writer.js"

function _setCharacterKiColor() {
  if (AppState.page == '#/game') {
    let characters = AppState.characters
    let char1 = characters.find(c => c.elementId == 'character1')
    // @ts-ignore
    document.body.style.setProperty('--char1KiColor', char1.kiColor)
    let char2 = characters.find(c => c.elementId == 'character2')
    // @ts-ignore
    document.body.style.setProperty('--char2KiColor', char2.kiColor)
  }
}

function _drawCharacters() {
  if (AppState.page == '#/game') {
    let characters = AppState.characters
    characters.forEach(c => {
      if (c.elementId != null) {
        setHTML(`${c.elementId}`, c.characterTemplate)
      }
    })
  }
}

function _drawCharStats() {
  if (AppState.page == '#/game') {
    let template = ''
    let characters = AppState.characters
    let boss = AppState.boss.find(b => b.active == true)
    let powerTotal = 0
    characters.forEach(c => {
      if (c.elementId != null) {
        template += c.characterStatsTemplate
        powerTotal += c.powerLevel
      }
    })
    if (powerTotal > boss.powerLevel) {
      document.body.style.setProperty('--powerTotalColor', '#0fe10f')
    } else if (powerTotal < boss.powerLevel) {
      document.body.style.setProperty('--powerTotalColor', '#e91a1a')
    }
    setHTML(`characterStats`, template)
    setText('totals', `${powerTotal}`)
  }
}
export class CharacterController {
  constructor() {
    console.log('[Character Controller]')
    _setCharacterKiColor()
    _drawCharacters()
    _drawCharStats()
    AppState.on('characters', _drawCharacters)
    AppState.on('characters', _drawCharStats)
  }

  animateBlock(characterId) {
    characterService.animateBlock(characterId)
  }

  takeDamage() {
    characterService.takeDamage()
  }

  revive(elementId) {
    characterService.revive(elementId)
  }

}