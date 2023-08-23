// console.log('[Start View, this might not be seen]')
export const StartView = /*html*/`
<marquee class="clouds"><img src="assets/img/Other/clouds.png"></marquee>

<div class="container-fluid  position-relative">
  <div class="row py-3">

  <div>
    <p class="fs-1 text-light sml-font shadow-md-font ">Zennie: <span id="zennie">100</span></p>
    <a href="#/shop">
      <button class=" text-light fs-2 sml-font shadow-md-font pauseButton">SHOP</button>
    </a>
  </div>

    <div class="col-lg-12 d-flex  flex-column align-items-center">
    <a href="#/game" class="nav-link d-flex flex-column align-items-center  ">
      <img src="/assets/img/Other/DragonBallZ.png" alt="" class="Start-Button">
      <div class="lrg-font start-font fs-2 text-center ">
      Press to Start
      </div>
    </a>
    </div>
  </div>
  <div class="sml-font shadow-md-font text-light mb-3">

        <div class="fs-3 d-flex justify-content-center pe-3">
          <p class="text-center fs-3 ms-3">
            <span id="c2" class="ms-0">
                <img  src="assets/img/Piccolo/piccoloLineUp.png" >
            </span> 
          </p>
          <p class="text-center fs-3 ms-3">
            <span id="c1">
              <img  src="assets/img/Goku/gokuLineUp.png" >
            </span>
          </p>
          <p class="fs-2 px-3">VS</p>
          <p class="text-center fs-3 ms-3">
            <span id="b1">
              <img class="boss-LineUp"  src="assets/img/Raditz/raditzLineUp.png" >
            </span>
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
