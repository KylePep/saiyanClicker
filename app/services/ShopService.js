import { AppState } from "../AppState.js";
import { saveState } from "../utils/Store.js";


class ShopService {
  leaveShop() {
    document.location.href = '#'
  }
}

export const shopService = new ShopService();

