import { AppState } from "../AppState.js"
import { gameService } from "./GameService.js";

class CharacterService {



  constructor() {
    this.debounceResetChar1 = this.debounce(this.resetChar1);
    this.delayResetChar1 = this.timeout(this.resetChar1, 1900);

    this.debounceResetChar2 = this.debounce(this.resetChar2);
    this.delayResetChar2 = this.timeout(this.resetChar2, 1900);
  }

  selectCharacter(name) {
    let character = AppState.characters.find(c => c.name == name)
    let characters = AppState.characters
    if (character?.elementId != 'character1') {
      character.elementId = 'character1'

      characters.forEach(c => {
        if (c.name != name) {
          if (c.elementId == 'character2')
            c.elementId = null
          if (c.elementId == 'character1')
            c.elementId = 'character2'
        }
      })
    }
    AppState.emit('characters')
  }

  timeout(func, timeout = 1900) {
    // console.log('[TIMER SET]')
    let timer
    return (...args) => {
      clearTimeout(timer)
      setTimeout(func, timeout)
    }
  }

  debounce(func, timeout = 1900) {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
  }

  resetChar1() {
    let characters = AppState.characters
    let char1 = characters.find(c => c.elementId == 'character1')
    if (char1.state != 'down') {
      char1.state = 'neutral'
      char1.imgsrc = char1.idle
    }
    AppState.emit('characters')
  }
  resetChar2() {
    let characters = AppState.characters
    let char2 = characters.find(c => c.elementId == 'character2')
    if (char2.state != 'down') {
      char2.state = 'neutral'
      char2.imgsrc = char2.idle
    }
    AppState.emit('characters')
  }
  animateBlock(characterId) {
    let characters = AppState.characters
    let blockCharacter = characters.find(c => c.id == characterId)

    if (blockCharacter?.state != 'down') {
      blockCharacter.state = 'block'
    }

    characters.forEach(c => {
      if (c.state == 'block') {
        c.imgsrc = c.block
      }
    })
    if (blockCharacter?.elementId == 'character1') {
      this.debounceResetChar1()
    } else this.debounceResetChar2()
    AppState.emit('characters')
  }

  animateAttack() {
    let characters = AppState.characters
    characters.forEach(c => {
      if (c.state == 'neutral') {
        if (characters.find(c => c.elementId == 'character1')) {
          this.debounceResetChar1()
        }
        if (characters.find(c => c.elementId == 'character2')) {
          this.debounceResetChar2()

        }
        c.imgsrc = c.attack
        c.state = 'attack'
        // console.log('[character state]', c.state)
      }
    })
    AppState.emit('characters')
  }
  takeDamage() {
    if (AppState.gameState == 'fail') {
      this.resetStats()
      gameService.bossStatsReset()
      AppState.gameState = 'null'
      document.location.href = '#'
    }
    const characters = AppState.characters
    const charDmg = characters.forEach(c => {
      if (c.state != 'block') {
        if (c.elementId != null) {
          const char = document.getElementById(`${c.elementId}bar`)
          // @ts-ignore
          char.classList.add('shake')
          if (c.hp <= 0) {
            c.imgsrc = c.down
            c.state = 'down'
            if (AppState.shopItems[0].count >= 1) {
              document.getElementById(`${c.elementId}Heal`)?.classList.remove('visually-hidden')
            }
            AppState.emit('characters')
          } else {
            document.getElementById(`${c.elementId}Heal`)?.classList.add('visually-hidden')
          }
        }
      }
    })
    if (AppState.gameState == 'null') {
      let upChar = characters.find(c => {
        if (c.elementId != null && c.state != 'down') {
          return true
        } else return false
      })
      if (!upChar) {
        AppState.gameState = 'fail'
      }
      console.log('[GameState]', AppState.gameState)
    }
    setTimeout(this.stopDamage, 50)
  }
  stopDamage() {
    const characters = AppState.characters
    const charStopDmg = characters.forEach(c => {
      const char = document.getElementById(`${c.elementId}bar`)
      if (char?.classList.contains('shake')) {
        char.classList.remove('shake')
      }
    })
  }



  revive(elementId) {
    AppState.shopItems[0].count -= 1

    AppState.characters.forEach(c => {
      if (AppState.shopItems[0].count <= 0) {
        document.getElementById(`${c.elementId}Heal`)?.classList.add('visually-hidden')
      }
      if (c.elementId == elementId) {
        c.hp = c.hpMax
        c.state = 'neutral'
        c.imgsrc = c.idle
        document.getElementById(`${c.elementId}Heal`)?.classList.add('visually-hidden')
        AppState.gameState = 'null'
      }
    })
    AppState.emit('characters')
    AppState.emit('shopItems')
  }

  resetStats() {
    AppState.characters.forEach(c => {
      c.hp = c.hpMax
      c.state = 'neutral'
      c.imgsrc = c.idle
      c.powerLevel = c.powerLevelInit
    })
  }
  successStats() {
    AppState.characters.forEach(c => {
      c.hp = c.hpMax
      c.state = 'neutral'
      c.imgsrc = c.idle
      c.powerLevelInit = c.powerLevel
    })
  }
  setInfoCharacter(name) {
    let character = AppState.characters.find(c => c.name == name)
    AppState.infoCharacter = character
  }
  applyItem(itemId) {
    let item = AppState.shopItems.find(i => i.id == itemId)
    let character = AppState.characters.find(c => c.name == AppState.infoCharacter.name)
    if (item.count > 0) {
      switch (itemId) {
        case 1:
          character.powerLevel = Math.ceil(character.powerLevel * 1.1)
          character.powerLevelInit = character.powerLevel
          break;
        case 2:
          character.hp = Math.ceil(character.hp * 1.1)
          character.hpMax = character.hp
          break;
        case 3:
          character.dmg = Math.ceil(character.dmg * 1.1)
          break;
        default:
          break;
      }
      item.count--
      gameService.saveData()
      AppState.emit('shopItems')
    }
  }
}
export const characterService = new CharacterService()