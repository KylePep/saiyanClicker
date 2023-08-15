// console.log('[Start View, this might not be seen]')
export const StartView = /*html*/`
<div class="container-fluid">
  <div class="row py-3">
    <div class="col-lg-12 d-flex flex-column align-items-center">
    <div class="">
    <a href="#/game" class="nav-link d-flex flex-column align-items-center  ">
      <img src="/assets/img/Other/DragonBallZ.png" alt="" class="Start-Button">
      <div class="lrg-font start-font fs-1 text-center ">
      Press to Start
      </div>
    </a>
    </div>
    </div>
  </div>
  <div class="sml-font shadow-sm-font text-light d-flex flex-column align-items-center justify-content-center ">
    <div class="fs-4" >
      Team: 
    </div>
        <div class="">
        <p id="c1" class="text-center">Character1</p> <p id="c2" class="text-center">Character2</p>
        </div>
  </div>
  <div class="row d-flex justify-content-around">

  <div class="col-2 char-select" onclick="app.HomeController.selectCharacter('Goku')">
    <img  src="assets/img/Goku/gokuSelect.png" alt="" class=" img-fluid ">
  </div>

  <div id="vegetaSelect" class="col-2 char-select" onclick="app.HomeController.selectCharacter('Vegeta')">
    <img src="assets/img/Vegeta/vegetaSelect.png" alt="" class=" img-fluid ">
  </div>

  <div class="col-2 char-select" onclick="app.HomeController.selectCharacter('Piccolo')">
    <img src="assets/img/Piccolo/piccoloSelect.png" alt="" class=" img-fluid ">
  </div>

  </div>
</div>
`
