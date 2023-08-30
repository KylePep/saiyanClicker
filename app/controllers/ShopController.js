import { AppState } from "../AppState.js"
import { shopService } from "../services/ShopService.js"
import { setHTML } from "../utils/Writer.js"


function _setBackground() {
  // @ts-ignore
  document.getElementById('router-view').style.backgroundImage = `url(assets/img/Other/shopBackground.png)`
}

function _refreshShopItem() {
  if (AppState.page == '#/shop') {
    let item = AppState.activeItem
    setHTML('iName', item.name)
    setHTML('iDescription', item.description)
    setHTML('iCost', item.cost)
    setHTML('iCount', item.count)
    setHTML('iIcon', `<img  src="${item.icon}" >`)
  }
}

function _drawInventory() {
  if (AppState.page == '#/shop') {
    setHTML('zennie', AppState.zennie)
    setHTML('iSJ', ` - ${AppState.shopItems[0].count}`)
    setHTML('iWC', ` - ${AppState.shopItems[1].count}`)
    setHTML('iHU', ` - ${AppState.shopItems[2].count}`)
    setHTML('iAU', ` - ${AppState.shopItems[3].count}`)
    setHTML('iSC', ` - ${AppState.shopItems[4].count}`)
  }
}
export class ShopController {
  constructor() {
    _setBackground()
    _drawInventory()
    AppState.on('shopItems', _refreshShopItem)
    AppState.on('shopItems', _drawInventory)
  }

  setShopItem(itemId) {
    if (AppState.page == '#/shop') {
      let item = AppState.shopItems.find(i => i.id == itemId)
      setHTML('iName', item.name)
      setHTML('iDescription', item.description)
      setHTML('iCost', item.cost)
      setHTML('iCount', item.count)
      setHTML('iIcon', `<img  src="${item.icon}" >`)
      shopService.setShopItem(itemId)
    }
  }
  leaveShop() {
    shopService.leaveShop()
  }

  purchaseItem() {
    shopService.purchaseItem()
  }

}
