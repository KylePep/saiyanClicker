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
  <p><img src="assets/img/Other/revive.png"><span id="iSJ"> - 0 </span></p>
  <p><img src="assets/img/Other/weightedClothing.png"><span  id="iWC"> - 0 </span></p>
  <p><img src="assets/img/Other/healthUp.png"><span  id="iHU"> - 0 </span></p>
  <p><img src="assets/img/Other/attackUp.png"><span  id="iAU"> - 0 </span></p>
  <p><img src="assets/img/Other/scouter.png"><span  id="iSC"> - 0 </span></p>
  <p data-bs-toggle="modal" data-bs-target="#howToPlayModal"  class="lrg-font info-button ms-2">How to Play</p>
  <p onclick="app.HomeController.resetGame()" class="lrg-font info-button ms-2">Reset</p>

  <p id="Raditz" onclick="app.HomeController.selectBoss('Raditz')"><img class="Raditz" src="assets/img/Raditz/raditzLineUp.png"></p>
  <p id="Nappa" onclick="app.HomeController.selectBoss('Nappa')"><img class="Nappa" src="assets/img/Nappa/nappaLineUp.png"></p>
  <p id="Vegeta" onclick="app.HomeController.selectBoss('Vegeta')"><img class="Vegeta" src="assets/img/Vegeta/vegetaLineUp.png"></p>
  <p id="Bardock" onclick="app.HomeController.selectBoss('Bardock')"><img class="Bardock" src="assets/img/Bardock/bardockLineUp.png"></p>
  </div>

    <div class="col-4 d-flex flex-column align-items-center justify-content-end">
    <a href="#/game" class="nav-link d-flex flex-column align-items-center">
      <img src="assets/img/Other/dragonBallZ.png" alt="" class="Start-Button">
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
      <div class="col-3 mx-auto text-light sml-font">
        <div class="row m-0">
          <div class="col-6 char-select p-0" >
            <img  src="assets/img/Goku/gokuSelect.png" alt="" class=" img-fluid " onclick="app.HomeController.selectCharacter('Goku')">
            <button onclick="app.HomeController.infoCharacter('Goku')" data-bs-toggle="modal" data-bs-target="#characterModal" class="bg-dark border-none text-light w-100">Stats</button>
          </div>
        
          <div class="col-6 char-select p-0 " >
            <img src="assets/img/Piccolo/piccoloSelect.png" alt="" class=" img-fluid " onclick="app.HomeController.selectCharacter('Piccolo')">
            <button onclick="app.HomeController.infoCharacter('Piccolo')" data-bs-toggle="modal" data-bs-target="#characterModal" class="bg-dark border-none text-light w-100">Stats</button>
          </div>

          <div id="raditzSelect" class="col-6 char-select p-0">
            <img src="assets/img/Raditz/raditzSelect.png" alt="" class=" img-fluid "  onclick="app.HomeController.selectCharacter('Raditz')">
            <button onclick="app.HomeController.infoCharacter('Raditz')" data-bs-toggle="modal" data-bs-target="#characterModal" class="bg-dark border-none text-light w-100">Stats</button>
          </div>

          <div id="nappaSelect" class="col-6 char-select p-0" >
            <img src="assets/img/Nappa/nappaSelect.png" alt="" class=" img-fluid "onclick="app.HomeController.selectCharacter('Nappa')">
            <button onclick="app.HomeController.infoCharacter('Nappa')" data-bs-toggle="modal" data-bs-target="#characterModal" class="bg-dark border-none text-light w-100">Stats</button>
          </div>

          <div id="vegetaSelect" class="col-6 char-select p-0">
            <img src="assets/img/Vegeta/vegetaSelect.png" alt="" class=" img-fluid "  onclick="app.HomeController.selectCharacter('Vegeta')">
            <button onclick="app.HomeController.infoCharacter('Vegeta')" data-bs-toggle="modal" data-bs-target="#characterModal" class="bg-dark border-none text-light w-100">Stats</button>
          </div>

          <div id="bardockSelect" class="col-6 char-select p-0" >
            <img src="assets/img/Bardock/bardockSelect.png" alt="" class=" img-fluid " onclick="app.HomeController.selectCharacter('Bardock')">
            <button onclick="app.HomeController.infoCharacter('Bardock')" data-bs-toggle="modal" data-bs-target="#characterModal" class="bg-dark border-none text-light w-100">Stats</button>
          </div>
        </div>
  </div>
  </div>
</div>

<!-- Modal -->
<div class="modal" id="characterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content fs-3 text-light sml-font shadow-md-font character-Modal">
      <div class="modal-body p-0">
        <p class="character-Modal-Header ps-3 text-center fs-1" id="cName"></p>
          <p id="cIcon" class=" character-Modal-Item "></p>
          <div id="cDescript" class="d-flex justify-content-around character-Modal-Body">
            <<'Description'>>
          </div>
          <div class="character-Modal-Body ">
          <div class="d-flex justify-content-between"> <p class="px-1"> Power Level: <span class="fs-2" id="cPower"></span>  </p><div><img onclick="app.HomeController.applyItem(1)" class="info-button pe-2" src="assets/img/Other/weightedClothing.png"><span id="iWCC" class="pe-2">x</span></div></div>
          <div class="d-flex justify-content-between"><p class="px-1"> Health: <span class="fs-2" id="cHealth"></span>  </p><div><img onclick="app.HomeController.applyItem(2)" class="info-button"  src="assets/img/Other/healthUp.png"><span id="iHUC" class="pe-2">x</span></div></div>
          <div class="d-flex justify-content-between"><p class="px-1"> Damage: <span class="fs-2" id="cDamage"></span>  </p> <div><img onclick="app.HomeController.applyItem(3)" class="info-button"  src="assets/img/Other/attackUp.png"><span id="iAUC" class="pe-2">x</span></div></div>

          <div class="d-flex justify-content-end character-Modal-Body">
          <button type="button" class="character-Modal-button shadow-md-font text-light" data-bs-dismiss="modal">Close</button>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal" id="howToPlayModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content fs-3 text-light sml-font shadow-md-font character-Modal">
      <div class="modal-body  p-0">
        <p class=" ps-3"> How to play</p>
          <div class="character-Modal-Body fs-">
          <p class="p-2">The Saiyan invasion has begun, Goku and Piccolo must defeat each of the Saiyans to protect the people of earth!</p>
          
          <div class="character-Modal-Body fs-5 p-2">
          <p><span class="fs-3">Character Selection:</span><br/> Bring your favorite characters into the fight against the saiyans, by clicking on their icon.</p>
          <p><span class="fs-3">Shop:</span><br/> Click on 'Shop' and select items to see their information and purchase them if you have enough zennie</p>
          <p><span class="fs-3">Items:</span><br/> Purhcased items can be applied to your characters through their stats menu, then clicking on the item you want to use.</p>
          <p><span class="fs-3">Battle:</span><br/> Click on the boss you have selected from the map to do damage, you can click on your fighters to begin a block. <br/>
          When either Characters or the boss do damage they gain power level.<br/>
          When your power level is above your opponents you will do more damage and recieve less.<br/>
          Winning rewards you with Zennie and you keep the power level you gained in battle.
          </p>
          </div>
          <div class="d-flex justify-content-end character-Modal-Body">
          <button type="button" class="character-Modal-button shadow-md-font text-light" data-bs-dismiss="modal">Close</button>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>
`
