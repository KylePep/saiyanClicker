import { AppState } from "../AppState.js"
import { shopService } from "../services/ShopService.js"
import { setHTML } from "../utils/Writer.js"


function _setBackground() {
  // @ts-ignore
  document.getElementById('router-view').style.backgroundImage = `url(assets/img/Other/shopBackground.png)`
}
export class ShopController {
  constructor() {
    _setBackground()
  }

  setShopItem(itemId) {
    console.log(itemId)
    let item = AppState.shopItems.find(i => i.id == itemId)
    console.log(item)
    setHTML('iName', item.name)
    setHTML('iDescription', item.description)
    setHTML('iCost', item.cost)
    setHTML('iCount', item.count)
  }
  leaveShop() {
    shopService.leaveShop()
  }

}
