import { Character } from "./models/Character.js"
import { Game } from "./models/Game.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Character.js').Character[]} */
  characters = [
    new Character({
      name: "Goku",
      active: true,
      alive: true,
      state: 'neutral',
      elementId: 'character1',
      icon: "assets/img/gokuIcon.png",
      idle: 'assets/img/gokuIdle.gif',
      attack: 'assets/img/gokuAttack.gif',
      block: 'assets/img/gokuBlockOne.png',
      // health: {
      hp: 100,
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
      name: "Picollo",
      active: true,
      alive: true,
      state: 'neutral',
      elementId: 'character2',
      icon: "assets/img/piccoloIcon.png",
      idle: 'assets/img/piccoloIdle.gif',
      attack: 'assets/img/PiccoloAttack.gif',
      block: 'assets/img/gokuBlockOne.png',
      // health: {
      hp: 100,
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
    })
  ]


  /** @type {import('./models/Game.js').Game[]} */
  boss = [
    new Game({
      active: true,
      boss: 'Raditz',
      bossImg: 'assets/img/RaditzIdle.gif',
      health: 15000,
      healthMax: 15000,
      bossDmg: 10,
      bossDmgRate: 5000,
      kiColor: '#b668e1',
      powerLevel: 1000,
      powerMod: 1.1,
      icon: 'assets/img/RaditzIcon.png'
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
