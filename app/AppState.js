import { Character } from "./models/Character.js"
import { Game } from "./models/Game.js"
import { ShopItem } from "./models/ShopItem.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  page = ''
  gamePage = false
  gameState = 'null'


  saveInit = false

  // SAVE DATA



  zennie = 0
  shopItems = [
    new ShopItem({
      id: 0,
      name: 'Extra Wish',
      cost: 100,
      description: 'Allows you to revive one team member if they fall in battle',
      count: 0,
      icon: "assets/img/Other/revive.png"
    }),
    new ShopItem({
      id: 1,
      name: 'Weighted Training',
      cost: 500,
      description: `Use to Train a fighter, raising their power level by 10%`,
      count: 0,
      icon: "assets/img/Other/weightedClothing.png"
    }),
    new ShopItem({
      id: 2,
      name: 'Health Capsule',
      cost: 200,
      description: `Use to increase a fighters total health by 10%`,
      count: 0,
      icon: "assets/img/Other/healthUp.png"
    }),
    new ShopItem({
      id: 3,
      name: 'Strength Capsule',
      cost: 200,
      description: `Use to increase a fighters total attack by 10%`,
      count: 0,
      icon: "assets/img/Other/attackUp.png"
    }),
    new ShopItem({
      id: 4,
      name: 'Scouter',
      cost: 10000,
      description: "Use the Saiyan's Scouter to find a powerful new enemy to fight",
      count: 0,
      icon: "assets/img/Other/scouter.png"
    })
  ]
  locks = [
    {
      element: 'raditzSelect',
      name: 'Raditz',
      bossUnlocked: true,
      Unlocked: false
    },
    {
      element: 'nappaSelect',
      name: 'Nappa',
      bossUnlocked: false,
      Unlocked: false
    },
    {
      element: 'vegetaSelect',
      name: 'Vegeta',
      bossUnlocked: false,
      Unlocked: false
    },
    {
      element: 'bardockSelect',
      name: 'Bardock',
      bossUnlocked: false,
      Unlocked: false
    },
  ]
  /** @type {import('./models/Character.js').Character[]} */
  characters = [
    new Character({
      name: "Goku",
      state: 'neutral',
      elementId: 'character1',
      icon: "assets/img/Goku/gokuIcon.png",
      lineUp: "assets/img/Goku/gokuLineUp.png",
      idle: 'assets/img/Goku/gokuIdle.gif',
      attack: 'assets/img/Goku/gokuAttack.gif',
      block: 'assets/img/Goku/gokuBlockOne.png',
      down: 'assets/img/Goku/gokuDown.png',
      // health: {
      hp: 120,
      hpMax: 12,
      hpMod: 2,
      hpRegen: 0,
      powerLevel: 350,
      powerLevelMod: 1,
      kiColor: '#0882ed',
      // damage: {
      dmg: 1200,
      dmgMod: 1,
      dmgCost: 1,
    }),
    new Character({
      name: "Piccolo",
      state: 'neutral',
      elementId: 'character2',
      icon: "assets/img/Piccolo/piccoloIcon.png",
      lineUp: "assets/img/Piccolo/piccoloLineUp.png",
      idle: 'assets/img/Piccolo/piccoloIdle.gif',
      attack: 'assets/img/Piccolo/PiccoloAttack.gif',
      block: 'assets/img/Piccolo/piccoloBlock.png',
      down: 'assets/img/Piccolo/piccoloDown.png',
      // health: {
      hp: 160,
      hpMax: 160,
      hpMod: 2,
      hpRegen: 0,
      powerLevel: 300,
      powerLevelMod: 1,
      kiColor: '#ffff5e',
      // damage: {
      dmg: 8,
      dmgMod: 1,
      dmgCost: 1,
    }),
    new Character({
      name: "Vegeta",
      state: 'neutral',
      elementId: null,
      icon: "assets/img/Vegeta/vegetaIcon.png",
      lineUp: "assets/img/Vegeta/vegetaLineUp.png",
      idle: "assets/img/Vegeta/vegetaIdle.gif",
      attack: 'assets/img/Vegeta/vegetaAttack.gif',
      block: 'assets/img/Vegeta/vegetaBlock.png',
      down: 'assets/img/Vegeta/vegetaDown.png',
      // health: {
      hp: 80,
      hpMax: 80,
      hpMod: 2,
      hpRegen: 0,
      powerLevel: 18000,
      powerLevelMod: 2,
      kiColor: '#ac022f',
      // damage: {
      dmg: 30,
      dmgMod: 1,
      dmgCost: 1,
    }),
    new Character({
      name: "Raditz",
      state: 'neutral',
      elementId: null,
      icon: "assets/img/Raditz/RaditzIcon.png",
      lineUp: "assets/img/Raditz/raditzLineUp.png",
      idle: "assets/img/Raditz/RaditzIdle.gif",
      attack: 'assets/img/Raditz/raditzAttack.gif',
      block: 'assets/img/Raditz/raditzBlock.png',
      down: 'assets/img/Raditz/raditzDown.png',
      // health: {
      hp: 100,
      hpMax: 100,
      hpMod: 2,
      hpRegen: 0,
      powerLevel: 1600,
      powerLevelMod: 1,
      kiColor: '#b668e1',
      // damage: {
      dmg: 10,
      dmgMod: 1,
      dmgCost: 1,
    }),
    new Character({
      name: "Nappa",
      state: 'neutral',
      elementId: null,
      icon: "assets/img/Nappa/nappaIcon.png",
      lineUp: "assets/img/Nappa/nappaLineUp.png",
      idle: "assets/img/Nappa/nappaIdle.gif",
      attack: 'assets/img/Nappa/nappaAttack.gif',
      block: 'assets/img/Nappa/nappaBlock.png',
      down: 'assets/img/Nappa/nappaDown.png',
      // health: {
      hp: 200,
      hpMax: 200,
      hpMod: 2,
      hpRegen: 0,
      powerLevel: 4000,
      powerLevelMod: 1,
      kiColor: '#ffad2c',
      // damage: {
      dmg: 20,
      dmgMod: 1,
      dmgCost: 1,
    }),
    new Character({
      name: "Bardock",
      state: 'neutral',
      elementId: null,
      icon: "assets/img/Bardock/bardockIcon.png",
      lineUp: "assets/img/Bardock/bardockLineUp.png",
      idle: "assets/img/Bardock/bardockIdle.gif",
      attack: 'assets/img/Bardock/bardockAttack.gif',
      block: 'assets/img/Bardock/bardockBlock.png',
      down: 'assets/img/Bardock/bardockDown.png',
      // health: {
      hp: 300,
      hpMax: 300,
      hpMod: 2,
      hpRegen: 0,
      powerLevel: 50000,
      powerLevelMod: 2,
      kiColor: '#0e5abe',
      // damage: {
      dmg: 50,
      dmgMod: 1,
      dmgCost: 1,
    })
  ]

  /** @type {import('./models/Game.js').Game[]} */
  boss = [
    new Game({
      active: true,
      boss: 'Raditz',
      bossIdle: 'assets/img/Raditz/RaditzIdle.gif',
      bossAttack: 'assets/img/Raditz/raditzAttack.gif',
      health: 15000,
      healthMax: 15000,
      bossDmg: 10,
      bossDmgRate: 15000,
      kiColor: '#b668e1',
      powerLevel: 1000,
      powerMod: 1.075,
      zennieDrop: 200,
      icon: 'assets/img/Raditz/RaditzIcon.png',
      lineUp: "assets/img/Raditz/raditzLineUp.png",
      background: "assets/img/Other/forestBackground.png",
      foreground: ""
    }),
    new Game({
      active: false,
      boss: 'Nappa',
      bossIdle: 'assets/img/Nappa/nappaIdle.gif',
      bossAttack: 'assets/img/Nappa/nappaAttack.gif',
      health: 30000,
      healthMax: 30000,
      bossDmg: 30,
      bossDmgRate: 15000,
      kiColor: '#ffad2c',
      powerLevel: 4000,
      powerMod: 1.075,
      zennieDrop: 600,
      icon: 'assets/img/Raditz/RaditzIcon.png',
      lineUp: "assets/img/Nappa/nappaLineUp.png",
      background: "assets/img/Other/desertBackground.png",
      foreground: "assets/img/Other/desertForeground.png"
    }),
    new Game({
      active: false,
      boss: 'Vegeta',
      bossIdle: 'assets/img/Vegeta/vegetaIdle.gif',
      bossAttack: 'assets/img/Vegeta/vegetaAttack.gif',
      health: 100000,
      healthMax: 100000,
      bossDmg: 60,
      bossDmgRate: 12000,
      kiColor: '#ac022f',
      powerLevel: 18000,
      powerMod: 1.05,
      zennieDrop: 1000,
      icon: 'assets/img/Vegeta/vegetaIcon.png',
      lineUp: "assets/img/Vegeta/vegetaLineUp.png",
      background: "assets/img/Other/TitleBackground.png",
      foreground: "assets/img/Other/WastelandForeground-large-crop.png"
    })
    ,
    new Game({
      active: false,
      boss: 'Bardock',
      bossIdle: 'assets/img/Bardock/bardockIdle.gif',
      bossAttack: 'assets/img/Bardock/bardockAttack.gif',
      health: 1000000,
      healthMax: 1000000,
      bossDmg: 100,
      bossDmgRate: 10000,
      kiColor: '#0e5abe',
      powerLevel: 50000,
      powerMod: 1.05,
      zennieDrop: 100000,
      icon: 'assets/img/Bardock/bardockIcon.png',
      lineUp: "assets/img/Bardock/bardockLineUp.png",
      background: "assets/img/Other/iceBackground.png",
      foreground: "assets/img/Other/iceForeground.png"
    })
  ]
  // SAVE DATA

  activeItem

  /** @type {import('./models/Character.js').Character} */
  infoCharacter = this.characters[0]

  activeBoss = this.boss[0]

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
