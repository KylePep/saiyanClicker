import { GenerateId } from "../utils/GenerateId.js"

export class Value {
  constructor(data) {
    this.id = GenerateId()
    this.title = data.title
  }

  get CardTemplate() {
    return /*html*/`
      <div class="card m-2 shadow">
        <div class="card-body">
          <h4 class="text-uppercase text-center no-select">
            ${this.title}
          </h4>
        </div>
        <button class="btn btn-danger square-top" onclick="app.ValuesController.removeValue('${this.id}')">Remove</button>
      </div>
    `
  }
}
