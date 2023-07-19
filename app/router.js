import { AboutController } from "./controllers/AboutController.js";
import { CharacterController } from "./controllers/CharacterController.js";
import { GameController } from "./controllers/GameController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { SaiyanClickerView } from "./views/SaiyanClickerView.js";


export const router = [
  {
    path: '',
    controller: [CharacterController, GameController],
    view: ''
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]