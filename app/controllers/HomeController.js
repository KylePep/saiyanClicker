import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

// Public

function _isUnlocked() {
  AppState.locks.forEach(l => {
    if (l.Unlocked == false) {
      document.getElementById(`${l.element}`)?.classList.add('visually-hidden')
    } else {
      document.getElementById(`${l.element}`)?.classList.remove('visually-hidden')
    }
  })

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

function _checkBoss() {
  let boss = AppState.activeBoss
  setHTML('b1', `<img class="boss-LineUp" src="${boss.lineUp}" alt="">`)
}

function _setBackground() {
  document.getElementById('router-view').style.backgroundImage = `url(assets/img/Other/newBackground.png)`
}

function _drawInventory() {
  setHTML('zennie', AppState.zennie)
  setHTML('iSJ', ` - ${AppState.shopItems[0].count}`)
  setHTML('iWC', ` - ${AppState.shopItems[1].count}`)
  setHTML('iSC', ` - ${AppState.shopItems[2].count}`)
}

export class HomeController {
  constructor() {
    console.log('[HomeController]')
    console.log(AppState.activeBoss)
    _isUnlocked()
    _checkSelection()
    _checkBoss()
    _setBackground()
    _drawInventory()
    AppState.on('characters', _checkSelection)
    AppState.on('boss', _checkBoss)
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

  selectBoss(bossName) {
    let boss = AppState.boss.find(b => b.boss == bossName)
    AppState.boss.forEach(b => b.active = false)
    boss.active = true
    let selectBoss = AppState.boss.find(b => b.active == true)
    AppState.activeBoss = selectBoss
    AppState.emit('boss')
  }

}


