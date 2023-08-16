import { AppState } from "../AppState.js"

class CharacterService {
  constructor() {
    this.debounceResetChar1 = this.debounce(this.resetChar1);
    this.delayResetChar1 = this.timeout(this.resetChar1, 1900);

    this.debounceResetChar2 = this.debounce(this.resetChar2);
    this.delayResetChar2 = this.timeout(this.resetChar2, 1900);
  }

  timeout(func, timeout = 1900) {
    console.log('[TIMER SET]')
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

    blockCharacter.state = 'block'

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
    const characters = AppState.characters
    const charDmg = characters.forEach(c => {
      if (c.state != 'block') {
        if (c.elementId != null) {
          const char = document.getElementById(`${c.elementId}bar`)
          // @ts-ignore
          char.classList.add('shake')
          if (c.hp <= 0) {
            c.imgsrc = c.alive
            c.state = 'down'
          }
        }
      }
    })
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
}
export const characterService = new CharacterService()