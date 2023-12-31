export const GameView = /*html*/`


<div id="damageEffect">
<div id="effect1" class="damage-effect">
  <img src="assets/img/Other/damageEffectGrayscale.gif" alt="">
</div>
<div id="effect2" class="damage-effect">
  <img src="assets/img/Other/damageEffectGrayscale.gif" alt="">
</div>
<div id="effect3" class="damage-effect">
  <img src="assets/img/Other/damageEffectGrayscale.gif" alt="">
</div>
</div>

<!-- SECTION -->
<header class="container-fluid">
<section class="row">
  <div class="col-5" id="characterStats">
  </div>
  
  <div class="col-2 d-flex flex-column fs-1 text-light lrg-font shadow-md-font text-center justify-content-center">
    <div class="mb-3">VS</div>
    <div id="totals" class="fs-4 powerTotal">Char|Boss</div>
  </div>
  <div class="col-5 ">
    <div class=" text-light no-select">
      <div id="bossIcon">
        <div>
          <div class="fs-1 text-light ms-3 mt-1"> Boss Name</div>
          <div id="bossPowerLevel" class="fs-1 bg-dark text-center text-light ms-3 mt-1">Power Level: 0000</div>
        </div>
      </div>
    </div>
    <div id="bossHp" class=" p-3">
    </div>
    <div id="bossTillDmg" class="d-flex justify-content-center">

    </div>
  </div>
</section>
<p><img src="assets/img/Other/revive.png"><span id="iSJ" class="text-light sml-font shadow-md-font"> - 0 </span></p>
</header>


<main class="container-fluid d-flex flex-column justify-content-end position-relative" class=" main ">


<!-- Button trigger modal -->
<div class="gameMenu d-flex flex-column">
    <button onclick="app.GameController.pauseGame()" type="button" class="text-light fs-2 ps-0 sml-font shadow-md-font pauseButton mb-2 user-select-none" data-bs-toggle="modal" data-bs-target="#pauseMenu" >
      Pause
    </button>
</div>

<div id="foreground">
  <img class="foreground" src="assets/img/Other/WastelandForeground-large-crop.png" alt="">
</div>

<section class="row d-flex flex-row justify-content-around align-items-end">
  <div class="col-8 d-flex justify-content-around">  
    <div class="col-8 d-flex  justify-content-center align-items-end">
      <div class="d-flex flex-column  justify-content-center ">
        <img id="character2Heal" onclick="app.CharacterController.revive('character2')" class="heal visually-hidden" src="assets/img/Other/revive.png">
        <div id="character2">
        </div>
      </div>

    </div>

    <div  class="col-4 d-flex justigy-conten-center align-items-end">
    <div class="d-flex flex-column  justify-content-center ">
    <img id="character1Heal" onclick="app.CharacterController.revive('character1')" class="heal visually-hidden" src="assets/img/Other/revive.png">
    <div id="character1">
    </div>
  </div>
    </div>
  </div>

  <div class="col-4">
    <div id="boss" class="col-3 fs-1 d-flex flex-column justify-content-end">
  </div>
</section>

<div id="endState" class="endState visually-hidden fs-1 lrg-font text-center flex-grow-1">
Success/Failure
</div>

</main>


<footer class="footer-reserve text-light">
<div class="text-center no-select">
  
</div>
</footer> 
    <!-- Modal -->
    <div class="modal" id="pauseMenu" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content pause-menu">
          <div class="modal-body d-flex flex-column justify-content-center align-items-center">
          <button onclick="app.GameController.pauseGame()" type="button" class="mb-5 text-light fs-2 ps-0 sml-font shadow-md-font pauseButton mb-2" data-bs-dismiss="modal" data-bs-target="#pauseMenu" >
          Resume
        </button>
          <div onclick="app.GameController.quitGame()" class="text-light fs-2 sml-font shadow-md-font quitButton">
            Quit
        </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
`