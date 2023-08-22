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
</header>


<main class="container-fluid d-flex flex-column justify-content-end" class=" main ">


<!-- Button trigger modal -->
<div class="gameMenu d-flex flex-column">
    <button onclick="app.GameController.pauseGame()" type="button" class="btn btn-primary pauseButton mb-2" data-bs-toggle="modal" data-bs-target="#pauseMenu" >
      Pause
    </button>
      <button onclick="app.GameController.quitGame()" class="btn btn-primary quitButton">
      Quit
  </button>
</div>

    <!-- Modal -->
    <div class="modal fade" id="pauseMenu" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Pause Menu</h1>
          </div>
          <div class="modal-body">
            The Game is Paused
          </div>
          <div class="modal-footer">
            <button onclick="app.GameController.pauseGame()" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Unpause</button>
          </div>
        </div>
      </div>
    </div>
    <!--  -->

<div id="">
  <img class="foreground" src="assets/img/Other/WastelandForeground-large-crop.png" alt="">
</div>

<section class="row d-flex flex-row justify-content-around">

  <div id="character2" class="col-3 fs-1">
  </div>

  <div id="character1" class="col-3 fs-1">
  </div>

  <div id="boss" class="col-3 fs-1 d-flex flex-column justify-content-end">


</section>

</main>


<footer class="footer-reserve text-light">
<div class="text-center no-select">
  
</div>
</footer> 
`