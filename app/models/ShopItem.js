import { AppState } from "../AppState.js"
import { generateId } from "../utils/generateId.js"

export class ShopItem {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.cost = data.cost
    this.description = data.description
    this.count = data.count
  }
}

