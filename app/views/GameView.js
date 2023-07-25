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



<div id="foreground">
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


<footer class="bg-dark text-light">
<div class="text-center no-select">
  <p class="mb-0"><small>🐉</small></p>
</div>
</footer> 
`