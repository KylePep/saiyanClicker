import { AppState } from "../AppState.js"
import { characterService } from "../services/CharactersService.js"
import { setHTML, setText } from "../utils/Writer.js"

function _setCharacterKiColor() {
  let characters = AppState.characters
  let char1 = characters.find(c => c.elementId == 'character1')
  // @ts-ignore
  document.body.style.setProperty('--char1KiColor', char1.kiColor)
  let char2 = characters.find(c => c.elementId == 'character2')
  // @ts-ignore
  document.body.style.setProperty('--char2KiColor', char2.kiColor)
}

function _drawCharacters() {
  let characters = AppState.characters
  characters.forEach(c => {
    setHTML(`${c.elementId}`, c.characterTemplate)
  })
}

function _drawCharStats() {
  let template = ''
  let characters = AppState.characters
  let powerTotal = 0
  characters.forEach(c => {
    template += c.characterStatsTemplate
    powerTotal += c.powerLevel
  })
  setHTML(`characterStats`, template)
  setText('totals', `${powerTotal}`)

}
export class CharacterController {
  constructor() {
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

}