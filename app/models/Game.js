import { AppState } from "../AppState.js"
import { generateId } from "../utils/generateId.js"

export class Game {
  constructor(data) {
    this.id = generateId()
    this.active = data.active
    this.boss = data.boss
    this.bossImg = data.bossImg
    this.health = data.health
    this.healthMax = data.healthMax
    this.bossTillDmg = 1000
    this.bossDmg = data.bossDmg
    this.bossDmgRate = data.bossDmgRate
    this.kiColor = data.kiColor
    this.powerLevel = data.powerLevel
    this.powerMod = data.powerMod
    this.icon = data.icon
  }
  get bossTemplate() {
    return `
      <div onclick="app.GameController.attack('${this.id}')">
      <img id="bossImg" class="boss" src="${this.bossImg}" alt="">
    </div>
      </div>
  `
  }

  get bossAttackBar() {
    return `
    <div class="progress bg-dark" role="progressbar" style="width: 50%">
    <div class="progress-bar bg-primary" style="width: ${(this.bossTillDmg / this.bossDmgRate) * 100}% "></div>
    `
  }

  get bossIcon() {
    return `
    <div class="d-flex justify-content-end">

    <div class="d-flex align-items-end">
      <div class="fs-1 lrg-font shadow-font text-light ms-3 mt-1"> ${this.boss}</div>

    <div>
      <img class="mx-3 mt-3 border border-4 border-light" src="${this.icon}"
        height="100" alt="" >
    </div>

    </div>
  `
  }

  get bossHealthBar() {
    return `
    <div class="progress bg-dark bossElemBorder bossHp justify-content-end">
      <div class="progress-bar boss-bar" role="progressbar" style="width: ${(this.health / this.healthMax) * 100}%;"     
      aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div id="bossPowerLevel" class="fs-4 sml-font shadow-font text-center text-light ms-3">Power Level: ${this.powerLevel}</div>
    </div>
    `
  }

  get bossDamageEffect() {
    return `
    
    <img onclick="app.GameController.attack('${this.id}')" class="damage-effect"  src="assets/img/Other/damageEffectGrayscale.gif" alt="" style="top: ${AppState.mouseY - 64}px; left: ${AppState.mouseX - 64}px; transform: rotate(${this.computedDegree}deg)" >
    `
  }

  get computedDegree() {
    let deg = 0
    deg = Math.random() * 360
    return deg
  }

}

