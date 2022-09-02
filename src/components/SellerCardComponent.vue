<template>
  <div class="seller-card">
    <!-- <img :src="require(`@/assets/product_7.jpg`)"> -->
    <img :src="require(`@/assets/seller-profile-img.jpeg`)" alt="Image" />
    <p style="font-size: small">
      {{sellerprop.name}} <br /><span class="seller-ref-id">Ref ID</span
      ><span class="seller-id">{{sellerprop.userId | sellerIdFilter}}</span>
    </p>

    <button style="font-size:15px;" class="view-inventory-btn" @click="openInventory(sellerprop.userId)">
       View Inventory
    </button>
    <button class="seller-status-btn" :class="[(sellerprop.status)? 'enabled' : 'disabled']" @click="disbaleSeller(sellerprop.userId)">{{sellerprop.status? "Disable" : "Enable"}} Seller</button>
  </div>
</template>

<script src="./scripts/SellerCardComponent.js"></script>

<style scoped>
.disabled{
  background-color: red !important;
}
.enabled {
  background-color: #01c5a1 !important;
}
.seller-ref-id {
  font-size: small;
  color: gray;
  text-decoration: underline;
  margin: 0.5em;
}
.seller-id{
  font-weight: bold;
  color: #1b2850;
}
.seller-id:hover {
  text-decoration: underline;
  cursor: pointer;
}

.seller-card img {
  max-width: 10vw;
  border-radius: 10em;
  border: 2px solid #bababa;
  margin-bottom: 0.4em;
}
.view-inventory-btn {
  color: white;
  background: #0000FF;
}
.seller-status-btn{
  background-color: #029d80;
  color: white;
  font-size: x-small;
  max-width: 30%;
}
.diabled {
  background-color: red !important;
}
.enabled{
  background-color: green !important;
}
@media screen and (min-width: 950px) {
  img {
    max-width: 100%;
  }
}

.grid-container {
  border-radius: 3%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1em;
  padding: 5vh 5vh;
  scroll-behavior: smooth;
}

.seller-card {
  background-color: rgb(255, 255, 255);
  border-radius: 2%;
  border: 0.02em solid rgba(0, 0, 0, 0.091);
  padding: 0.5em;
  font-size: 2em;
  text-align: center;
  transition: width 0.1s, height 0.2s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
}
button {
  padding: 0.5em;
  margin-top: 3vh;
  background-color: #1b2850 !important;
  height: 3em !important;
  border: none;
  border-radius: 0.7em !important;
  transition: box-shadow 0.1s;
  width: 17vw;
}
button :hover {
  color: #1b2850  !important;
  background-color: white !important;
}

.seller-card:hover {
  background-color: rgb(255, 255, 255);
  box-shadow: 3px 3px 20px rgb(107, 106, 106);
}

@media screen and (max-width: 950px) {
  img {
    width: 100%;
  }
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 700px) {
  div.container {
    padding: 0.5em;
  }
}
@media screen and (max-width: 700px) {
  .grid-container {
    grid-template-columns: 2fr;
  }
  img {
    width: 18vw;
  }
  .seller-card {
    height: max-content;
  }
  .seller-card button {
    font-size: small;
    width: 35vw;
    height: 6vh !important;
  }
  .sidebar {
    font-size: 5px !important;
  }
}

@media screen and (max-width: 450px) {
  .seller-card img {
    width: 100%;
  }
  .seller-card button {
    font-size: small;
    width: 40vw;
    height: 5vh !important;
  }
}
</style>