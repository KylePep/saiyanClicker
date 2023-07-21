import { AboutController } from "./controllers/AboutController.js";
import { CharacterController } from "./controllers/CharacterController.js";
import { GameController } from "./controllers/GameController.js";
import { HomeController } from "./controllers/HomeController.js";
import { GameView } from "./views/GameView.js";
import { StartView } from "./views/StartView.js";


export const router = [
  {
    path: '',
    controller: HomeController,
    view: StartView,
  },
  {
    path: '#/game',
    controller: [CharacterController, GameController],
    view: GameView,
  }
]