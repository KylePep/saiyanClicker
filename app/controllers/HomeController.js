import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"

// Public

function _isVegetaUnlocked() {
  if (AppState.vegetaUnlocked == false) {
    document.getElementById('vegetaSelect')?.classList.add('visually-hidden')
  } else {
    document.getElementById('vegetaSelect')?.classList.remove('visually-hidden')
  }
}

export class HomeController {
  constructor() {
    console.log('[HomeController]')
    _isVegetaUnlocked()
    AppState.on('vegetaUnlocked', _isVegetaUnlocked)
  }


}