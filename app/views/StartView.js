// console.log('[Start View, this might not be seen]')
export const StartView = /*html*/`
<div class="container-fluid  ">
  <div class="row py-3">
    <div class="col-lg-12 d-flex  flex-column align-items-center">
    <a href="#/game" class="nav-link d-flex flex-column align-items-center  ">
      <img src="/assets/img/Other/DragonBallZ.png" alt="" class="Start-Button">
      <div class="lrg-font start-font fs-2 text-center ">
      Press to Start
      </div>
    </a>
    </div>
  </div>
  <div class="sml-font shadow-md-font text-light  ">

        <div class="fs-3 d-flex justify-content-center pe-3"> Team:
          <p class="text-center fs-3 ms-3">1:
            <span id="c1" class="ms-0">Character1</span> 
          </p>
          <p class="text-center fs-3 ms-3">2:
            <span id="c2" >Character2</span>
          </p>
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
