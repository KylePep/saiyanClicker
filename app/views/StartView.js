// console.log('[Start View, this might not be seen]')
export const StartView = /*html*/`
<marquee class="clouds"><img src="assets/img/Other/clouds.png"></marquee>

<div class="container-fluid  position-relative">
  <div class="row pb-3">



  <div class="col-4 text-light sml-font shadow-md-font">
    <div class=" mb-3">
      <p class="fs-1 text-light sml-font shadow-md-font ">Zennie: <span id="zennie">100</span></p>
      <a href="#/shop">
        <button class=" text-light fs-2 sml-font shadow-md-font pauseButton">SHOP</button>
      </a>
    </div>
  <p><img src="assets/img/Other/senzuJuice.png"><span id="iSJ"> - 0 </span></p>
  <p><img src="assets/img/Other/weightedClothing.png"><span  id="iWC"> - 0 </span></p>
  <p><img src="assets/img/Other/scouter.png"><span  id="iSC"> - 0 </span></p>
  </div>

    <div class="col-4 d-flex flex-column align-items-center justify-content-end">
    <a href="#/game" class="nav-link d-flex flex-column align-items-center">
      <img src="/assets/img/Other/DragonBallZ.png" alt="" class="Start-Button">
      <div class="lrg-font start-font fs-2 text-center ">
      Press to Start
      </div>
      </a>
      <div class="text-light sml-font shadow-md-font d-flex justify-content-center align-items-center">
        <div class="sml-font shadow-md-font text-light flex-grow-1">
        <div class="fs-3 d-flex justify-content-center pe-3 my-3">
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
      <img class="map" src="assets/img/Other/Map.png">
      </div>
      </div>
      </div>
      <div class="col-3 mx-auto text-light sml-font shadow-md-font ">
        <div class="row ">

        <div class="col-6 char-select" onclick="app.HomeController.selectCharacter('Goku')">
          <img  src="assets/img/Goku/gokuSelect.png" alt="" class=" img-fluid ">
        </div>
      
        <div class="col-6 char-select" onclick="app.HomeController.selectCharacter('Piccolo')">
          <img src="assets/img/Piccolo/piccoloSelect.png" alt="" class=" img-fluid ">
        </div>

        <div id="vegetaSelect" class="col-6 char-select" onclick="app.HomeController.selectCharacter('Raditz')">
          <img src="assets/img/Raditz/raditzSelect.png" alt="" class=" img-fluid ">
        </div>

        <div id="vegetaSelect" class="col-6 char-select" onclick="app.HomeController.selectCharacter('Nappa')">
          <img src="assets/img/Nappa/nappaSelect.png" alt="" class=" img-fluid ">
        </div>

        <div id="vegetaSelect" class="col-6 char-select" onclick="app.HomeController.selectCharacter('Vegeta')">
          <img src="assets/img/Vegeta/vegetaSelect.png" alt="" class=" img-fluid ">
        </div>

        <div id="vegetaSelect" class="col-6 char-select" onclick="app.HomeController.selectCharacter('Vegeta')">
          <img src="assets/img/Vegeta/vegetaSelect.png" alt="" class=" img-fluid ">
        </div>
      
      
        </div>
  </div>
  </div>
</div>
`
