import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

// Public

function _isVegetaUnlocked() {
  if (AppState.vegetaUnlocked == false) {
    document.getElementById('vegetaSelect')?.classList.add('visually-hidden')
  } else {
    document.getElementById('vegetaSelect')?.classList.remove('visually-hidden')
  }
}

function _checkSelection() {
  if (AppState.gamePage == false) {
    let characters = AppState.characters
    characters.forEach(c => {
      if (c.elementId == 'character1') {
        setHTML('c1', `<img class="char-LineUp" src="${c.lineUp}" alt="">`)
      } else if (c.elementId == 'character2') {
        setHTML('c2', `<img class="char-LineUp" src="${c.lineUp}" alt="">`)
      }
    })
  }
}

function _setBackground() {
  document.getElementById('router-view').style.backgroundImage = `url(assets/img/Other/newBackground.png)`
}

export class HomeController {
  constructor() {
    console.log('[HomeController]')
    _isVegetaUnlocked()
    _checkSelection()
    _setBackground()
    AppState.on('vegetaUnlocked', _isVegetaUnlocked)
    AppState.on('characters', _checkSelection)
  }

  selectCharacter(name) {
    // When you press on the characters Icon it should switch in and out the first character postion, making the one that was first second, the one that was second null if not first.

    // FIXME this needs to go down to the service
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

}


