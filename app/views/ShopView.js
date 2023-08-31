export const ShopView = /*html*/`
<div class="container-fluid ">
  <div class="row py-3 text-light sml-font shadow-md-font">
  <div class="col-12">
  <div class="fs-1 text-light sml-font shadow-md-font mb-5 shop-Reserve">Zennie: <p id="zennie">100</p>  
  <p><img src="assets/img/Other/revive.png"><span id="iSJ"> - 0 </span></p>
  <p><img src="assets/img/Other/weightedClothing.png"><span  id="iWC"> - 0 </span></p>
  <p><img src="assets/img/Other/healthUp.png"><span  id="iHU"> - 0 </span></p>
  <p><img src="assets/img/Other/attackUp.png"><span  id="iAU"> - 0 </span></p>
  <p><img src="assets/img/Other/scouter.png"><span  id="iSC"> - 0 </span></p>
  </div>
  </div>
    <div class="col-12">
  
      <p class="fs-3 align-items-center text-center">
        Welcome to the shop, Did you want to buy sometin?
      </p>
      <div class="d-flex justify-content-center">
      <div>
        <img onclick="app.ShopController.setShopItem(0)" data-bs-toggle="modal" data-bs-target="#shopModal" class="shop-Item me-3" src="assets/img/Other/revive.png">
        <p></p>
      </div>

      <div>
        <img onclick="app.ShopController.setShopItem(1)" data-bs-toggle="modal" data-bs-target="#shopModal" class="shop-Item me-3" src="assets/img/Other/weightedClothing.png">
      </div>
      
      <div>
        <img onclick="app.ShopController.setShopItem(2)" data-bs-toggle="modal" data-bs-target="#shopModal" class="shop-Item me-3" src="assets/img/Other/healthUp.png">
      </div>

      <div>
        <img onclick="app.ShopController.setShopItem(3)" data-bs-toggle="modal" data-bs-target="#shopModal" class="shop-Item me-3" src="assets/img/Other/attackUp.png">
      </div>

      <div>
        <img onclick="app.ShopController.setShopItem(4)" data-bs-toggle="modal" data-bs-target="#shopModal" class="shop-Item" src="assets/img/Other/scouter.png">
      </div>

      </div>
      <button onclick="app.ShopController.leaveShop()" class=" fs-4 mt-2 text-light shadow-md-font pauseButton">
          Leave Shop
      </button>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal" id="shopModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content fs-3 text-light sml-font shadow-md-font shop-Modal">
      <div class="modal-body p-0">
        <p class="shop-Modal-Header"> Item Name: <span class="fs-5 " id="iName"></span> </p>
          <p id="iIcon" class=" shop-Modal-Item "></p>
          <div class="shop-Modal-Body">
          <p class="px-1"> Description: <span class="fs-5 p-0 m-0" id="iDescription"></span>  </p>
          <p class="px-1"> Cost: <span class="fs-5" id="iCost"></span>  </p>
          <p class="px-1"> Own: <span class="fs-5" id="iCount"></span>  </p>
          <div  class="d-flex justify-content-between shop-Modal-Body">
          <button onclick="app.ShopController.purchaseItem()" type="button" class="shop-Modal-button shadow-md-font text-light">Purchase</button>
          <button type="button" class="shop-Modal-button shadow-md-font text-light" data-bs-dismiss="modal">Cancel</button>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>
`