import { AppState } from "../AppState.js"
import { shopService } from "../services/ShopService.js"
import { setHTML } from "../utils/Writer.js"


function _setBackground() {
  // @ts-ignore
  document.getElementById('router-view').style.backgroundImage = `url(assets/img/Other/shopBackground.png)`
}

function _drawZennie() {
  setHTML('zennie', AppState.zennie)
}
function _refreshShopItem() {
  let item = AppState.activeItem
  setHTML('iName', item.name)
  setHTML('iDescription', item.description)
  setHTML('iCost', item.cost)
  setHTML('iCount', item.count)
  setHTML('iIcon', `<img  src="${item.icon}" >`)
}
export class ShopController {
  constructor() {
    _setBackground()
    _drawZennie()
    AppState.on('zennie', _drawZennie)
    AppState.on('shopItems', _refreshShopItem)
  }

  setShopItem(itemId) {
    let item = AppState.shopItems.find(i => i.id == itemId)
    setHTML('iName', item.name)
    setHTML('iDescription', item.description)
    setHTML('iCost', item.cost)
    setHTML('iCount', item.count)
    setHTML('iIcon', `<img  src="${item.icon}" >`)
    shopService.setShopItem(itemId)
  }
  leaveShop() {
    shopService.leaveShop()
  }

  purchaseItem() {
    shopService.purchaseItem()
  }

}
