import { AppState } from "../AppState.js";
import { saveState } from "../utils/Store.js";


class ShopService {
  setShopItem(itemId) {
    const activeItem = AppState.shopItems.find(i => i.id == itemId)
    AppState.activeItem = activeItem
  }
  purchaseItem() {
    let activeItem = AppState.activeItem
    if (activeItem.cost <= AppState.zennie) {
      if (activeItem.id == 4) {
        let bardockUnlock = AppState.locks.find(l => l.name == 'Bardock')
        bardockUnlock.bossUnlocked = true
      }
      AppState.zennie -= activeItem.cost
      AppState.shopItems[activeItem.id].count += 1;
      AppState.shopItems[activeItem.id].cost = Math.floor(AppState.shopItems[activeItem.id].cost * 1.05)
      // console.log(AppState.shopItems[activeItem.id])
      AppState.emit('zennie')
      AppState.emit('shopItems')
    }
  }
  leaveShop() {
    document.location.href = '#'
  }
}

export const shopService = new ShopService();

