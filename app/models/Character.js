import { generateId } from "../utils/GenerateId.js";

export class Character {
  constructor(data) {
    //Character information
    this.id = data.id ? data.id : generateId();
    this.name = data.name;
    // this.active = data.active;
    // this.alive = data.alive;
    this.state = data.state;

    // display information
    // TODO can this be constructed into a library?
    // An array of objects for each image with directly related timeouts?
    this.icon = data.icon;
    this.lineUp = data.lineUp;
    this.idle = data.idle;
    this.attack = data.attack;
    this.block = data.block;
    this.down = data.down;
    this.win = data.win;
    this.elementId = data.elementId;
    this.imgsrc = this.idle;
    this.description = data.description;
    // Damage
    this.damage = [
      this.dmg = data.dmg,
      // this.dmgMod = data.dmgMod,
      // this.dmgCost = data.dmgCost,
    ]
    // Health
    this.health = [
      this.hp = data.hp,
      this.hpMax = data.hpMax,
      // this.hpMod = data.hpMod,
      this.hpRegen = data.hpRegen,
    ]
    // PowerLevel
    this.powerLevel = data.powerLevel;
    this.powerLevelInit = data.powerLevel;
    this.powerLevelMod = data.powerLevelMod;
    this.kiColor = data.kiColor
  }



  get characterTemplate() {
    return `
    <div onclick="app.CharacterController.animateBlock('${this.id}')">
      <img class="${this.elementId}" src="${this.imgsrc}" alt="" draggable = false>
    </div>
    `
  }

  get characterStatsTemplate() {
    return `
    <div class="d-flex justify-content-between">
          <div class="mt-2 d-flex align-items-start pb-3">
            <div>
              <img class="border border-4 border-light" src="${this.icon}" height="100" alt="">
            </div>
          </div>

          <div class="ms-2 flex-fill">
            <div class="fs-3 lrg-font shadow-md-font text-light mt-1"> ${this.name}</div>

            <div id="${this.elementId}bar" class="progress bg-dark bossElemBorder bossHp">
              <div  class="progress-bar ${this.computedStatsColor}" role="progressbar" style="width: ${(this.hp / this.hpMax) * 100}%;" aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div id="" class="fs-6 sml-font shadow-sm-font text-center text-light ms-3">Power Level:
              ${this.powerLevel}</div>
          </div>
        </div>
    `
  }

  get computedStatsColor() {
    if (this.elementId == 'character1') {
      return `
      char1-bar
      `
    }
    if (this.elementId == 'character2') {
      return `
      char2-bar
      `
    }
    return ''
  }

}
