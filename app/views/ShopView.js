export const ShopView = /*html*/`
<div class="container-fluid ">
  <div class="row py-3 text-light sml-font shadow-md-font">
  <div class="col-12">
  <p class="fs-1 text-light sml-font shadow-md-font mb-5 shop-Reserve">Zennie: <span id="zennie">100</span></p>
  </div>
    <div class="col-12">
  
      <p class="fs-3 align-items-center text-center">
        Welcome to the shop, Did you want to buy sometin?
      </p>
      <div class="d-flex justify-content-center">
      <div>
        <img onclick="app.ShopController.setShopItem(0)" data-bs-toggle="modal" data-bs-target="#shopModal" class="shop-Item me-3" src="assets/img/Other/senzuJuice.png">
        <p></p>
      </div>
      <div>
        <img onclick="app.ShopController.setShopItem(1)" data-bs-toggle="modal" data-bs-target="#shopModal" class="shop-Item me-3" src="assets/img/Other/weightedClothing.png">
      
      </div>
      <div>
        <img onclick="app.ShopController.setShopItem(2)" data-bs-toggle="modal" data-bs-target="#shopModal" class="shop-Item" src="assets/img/Other/scouter.png">
      
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
      <div class="modal-body">
        <p> Item Name: <span class="fs-5" id="iName"></span> </p>
        <p> Description: <span class="fs-5" id="iDescription"></span>  </p>
        <p> Cost: <span class="fs-5" id="iCost"></span>  </p>
        <p> Count: <span class="fs-5" id="iCount"></span>  </p>
      </div>
      <button type="button" class="shadow-md-font">Purchase</button>
        <button type="button" class="shadow-md-font" data-bs-dismiss="modal">Cancel</button>
    </div>
  </div>
</div>
`