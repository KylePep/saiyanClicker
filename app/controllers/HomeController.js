import { AppState } from "../AppState.js"
import { characterService } from "../services/CharactersService.js"
import { gameService } from "../services/GameService.js"
import { Pop } from "../utils/Pop.js"
import { loadState, saveState } from "../utils/Store.js"
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

function _isUnlockedBoss() {
  AppState.locks.forEach(l => {
    if (l.bossUnlocked == false) {
      document.getElementById(`${l.name}`)?.classList.add('visually-hidden')
    } else {
      document.getElementById(`${l.name}`)?.classList.remove('visually-hidden')
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
  if (AppState.page != '#/game') {
    let boss = AppState.activeBoss
    setHTML('b1', `<img class="boss-LineUp" src="${boss.lineUp}" alt="">`)
  }
}

function _setBackground() {
  document.getElementById('router-view').style.backgroundImage = `url(assets/img/Other/newBackground.png)`
}

function _drawInventory() {
  if (AppState.page == '') {
    setHTML('zennie', AppState.zennie)
    setHTML('iSJ', ` - ${AppState.shopItems[0].count}`)
    setHTML('iWC', ` - ${AppState.shopItems[1].count}`)
    setHTML('iHU', ` - ${AppState.shopItems[2].count}`)
    setHTML('iAU', ` - ${AppState.shopItems[3].count}`)
    setHTML('iSC', ` - ${AppState.shopItems[4].count}`)
    setHTML('iWCC', AppState.shopItems[1].count)
    setHTML('iHUC', AppState.shopItems[2].count)
    setHTML('iAUC', AppState.shopItems[3].count)
  }
}
function _drawInfo() {
  if (AppState.page == '') {
    let character = AppState.characters.find(c => c.name == AppState.infoCharacter.name)
    setHTML('cName', character.name)
    setHTML('cPower', character.powerLevel)
    setHTML('cHealth', character.hp)
    setHTML('cDamage', character.dmg)
    setHTML('cDescript', character.description)
    setHTML('cIcon', `<img  src="${character.idle}" >`)
  }
}

export class HomeController {
  constructor() {
    // console.log('[HomeController]')
    // console.log(AppState.activeBoss)
    _isUnlocked()
    _isUnlockedBoss()
    _checkSelection()
    _checkBoss()
    _setBackground()
    _drawInventory()
    this.saveData()
    // console.log('Game is saved')
    AppState.on('characters', _checkSelection)
    AppState.on('shopItems', _drawInventory)
    AppState.on('shopItems', _drawInfo)
    AppState.on('boss', _checkBoss)
  }

  selectCharacter(name) {
    characterService.selectCharacter(name)
  }

  selectBoss(bossName) {
    gameService.selectBoss(bossName)
  }

  infoCharacter(name) {
    characterService.setInfoCharacter(name)
    _drawInfo()
  }
  applyItem(itemId) {
    characterService.applyItem(itemId)
  }

  loadData() {
    gameService.loadData()
  }
  saveData() {
    gameService.saveData()
  }

  async resetGame() {
    let confirmReset = await Pop.confirm('Reset Game Save? All progress will be lost.')
    if (!confirmReset) {
      return
    }
    gameService.resetGame()
  }

}


