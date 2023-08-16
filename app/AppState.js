import { Character } from "./models/Character.js"
import { Game } from "./models/Game.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''
  gamePage = false

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Character.js').Character[]} */
  characters = [
    new Character({
      name: "Goku",
      state: 'neutral',
      elementId: 'character1',
      icon: "assets/img/Goku/gokuIcon.png",
      idle: 'assets/img/Goku/gokuIdle.gif',
      attack: 'assets/img/Goku/gokuAttack.gif',
      block: 'assets/img/Goku/gokuBlockOne.png',
      down: 'assets/img/Goku/gokuDown.png',
      // health: {
      hp: 10,
      hpMax: 100,
      hpMod: 2,
      hpRegen: 1,
      // },
      powerLevel: 350,
      powerLevelMod: 1,
      kiColor: '#0882ed',
      // damage: {
      dmg: 10,
      dmgMod: 1,
      dmgCost: 1,
      // },
      // ki: {
      kiCurrent: 10,
      kiMax: 10,
      kiMod: 1,
      kiRegen: 1,
      // }
    }),
    new Character({
      name: "Piccolo",
      state: 'neutral',
      elementId: 'character2',
      icon: "assets/img/Piccolo/piccoloIcon.png",
      idle: 'assets/img/Piccolo/piccoloIdle.gif',
      attack: 'assets/img/Piccolo/PiccoloAttack.gif',
      block: 'assets/img/Piccolo/piccoloBlock.png',
      down: 'assets/img/Piccolo/piccoloDown.png',
      // health: {
      hp: 10,
      hpMax: 100,
      hpMod: 2,
      hpRegen: 1,
      powerLevel: 300,
      powerLevelMod: 1,
      kiColor: '#ffff5e',
      // },
      // damage: {
      dmg: 10,
      dmgMod: 1,
      dmgCost: 1,
      // },
      // ki: {
      kiCurrent: 10,
      kiMax: 10,
      kiMod: 1,
      kiRegen: 1,
      // }
    }),
    new Character({
      name: "Vegeta",
      state: 'neutral',
      elementId: null,
      icon: "assets/img/Vegeta/vegetaIcon.png",
      idle: "assets/img/Vegeta/vegetaIdle.gif",
      attack: 'assets/img/Vegeta/vegetaAttack.gif',
      block: 'assets/img/Vegeta/vegetaBlock.png',
      down: 'assets/img/Vegeta/vegetaDown.png',
      // health: {
      hp: 200,
      hpMax: 200,
      hpMod: 2,
      hpRegen: 1,
      powerLevel: 2000,
      powerLevelMod: 1,
      kiColor: '#d9c0e9',
      // },
      // damage: {
      dmg: 20,
      dmgMod: 1,
      dmgCost: 1,
      // },
      // ki: {
      kiCurrent: 10,
      kiMax: 10,
      kiMod: 1,
      kiRegen: 1,
      // }
    })
  ]

  vegetaUnlocked = false

  /** @type {import('./models/Game.js').Game[]} */
  boss = [
    new Game({
      active: true,
      boss: 'Raditz',
      bossImg: 'assets/img/Raditz/RaditzIdle.gif',
      health: 15000,
      healthMax: 15000,
      bossDmg: 10,
      bossDmgRate: 15000,
      kiColor: '#b668e1',
      powerLevel: 1000,
      powerMod: 1.1,
      icon: 'assets/img/Raditz/RaditzIcon.png'
    })
  ]

  bossStats = {
    health: 400, healthMax: 500, kiColor: '#b668e1', powerLevel: 1000, powerMod: 1.1
  }

  activeBoss = null

  fighting = false

  powerLevelTotal = 0

  effects = 0
  effectIndex = ['effect1', 'effect2', 'effect3']
  mouseX = 0
  mouseY = 0

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
