import { AboutController } from "./controllers/AboutController.js";
import { CharacterController } from "./controllers/CharacterController.js";
import { GameController } from "./controllers/GameController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ShopController } from "./controllers/ShopController.js";
import { GameView } from "./views/GameView.js";
import { StartView } from "./views/StartView.js";
import { ShopView } from "./views/ShopView.js";


export const router = [
  {
    path: '',
    controller: [HomeController],
    view: StartView,
  },
  {
    path: '#/game',
    controller: [CharacterController, GameController],
    view: GameView,
  },
  {
    path: '#/shop',
    controller: [ShopController],
    view: ShopView,
  }
]