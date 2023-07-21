import { Pop } from "../utils/Pop.js"

// Public
export class HomeController {
  constructor() {
    console.log('[HomeController]')
  }

  testButton() {
    Pop.success('The button Works 😎')
  }
}