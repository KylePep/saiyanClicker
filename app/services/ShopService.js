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
      AppState.zennie -= activeItem.cost
      AppState.shopItems[activeItem.id].count += 1;
      AppState.emit('zennie')
      AppState.emit('shopItems')
    }
  }
  leaveShop() {
    document.location.href = '#'
  }
}

export const shopService = new ShopService();

