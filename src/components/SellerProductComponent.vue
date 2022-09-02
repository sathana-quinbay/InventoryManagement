<template >
  <b-col cols="12" lg="4" sm="12" md="6">
   
      <select v-model="sortBy">
        <option disabled value="">Please select one</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <button @click="sortData()">Submit</button>
    
    <div v-if="modalShow">
      <OpenProductComponent
        :productItem="product"
        @hideModal="modalShow = false"
        :timeStamp="new Date().getTime()"
        :modalShowProp="(modalShow = true)"
      />
    </div>

    <b-container-fluid class="cards">
      <b-row>
        <b-col cols="12" lg="6" sm="12" md="12">
          <img class="productImage" :src="require(`@/assets/brand-logo.png`)" />
        </b-col>
        <b-col class="card-content" cols="12" lg="6" sm="12" md="12">
          <div class="name">{{ product.productName }}</div>
          <div class="price">₹{{ product.price }}</div>

          <div class="quantity">Quantity:{{ product.quantity }}</div>
          <div class="card-butttons">
            <button id="show-btn" @click="modalShow = true">
              <b-icon-eye></b-icon-eye> View
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container-fluid>
  </b-col>
</template>

<script src="./scripts/SellerProductComponent.js">
</script>

<style scoped>
.card-butttons {
  width: 100%;
}
.card-content {
  text-align: left;
}
#show-btn {
  width: 50%;
  background: none;

  margin-top: 5%;
  border-radius: 10px;
  padding: 2% 4%;
  /* color:white; */
  background-color: #a760ff;
  color: white;

  top: 0;
  text-transform: ue;
  text-align: center;
  border: none;
}
.price {
  color: saddlebrown;
}
.name {
  color: slategray;
  font-weight: 500;
  font-size: 3vh;
}
input[type="text"] {
  border-radius: 5px;
  border-style: solid;
  border-color: #01c5a1;
}

input[type="number"] {
  border-radius: 5px;
  border-style: solid;
  border-color: #01c5a1;
}

textarea {
  border-radius: 5px;
  border-style: solid;
  border-color: #01c5a1;
}

.edit-product {
  display: flex;
  justify-content: center;
}
.edit-product {
  background-color: #01c5a1;

  border: none;

  border-radius: 5px;

  width: 35px;

  color: black;

  margin: 0.5em 5em;

  width: 80px;

  height: 30px;

  font-size: 20px;

  transition-duration: 0.3s;
}
.productImage {
  margin-top: 2%;
  width: 100%;
  height: 100%;
}
.input[type="button"] {
  background-color: #01c5a1;

  border: none;

  border-radius: 5px;

  width: 35px;

  color: black;

  margin: 5px;

  width: 80px;

  height: 30px;

  font-size: 20px;

  transition-duration: 0.3s;
}
.discriptiontag {
  margin-top: 3px;

  font-size: 11px;

  border-bottom: 1px grey;
}

.discriptiontag:hover {
  text-decoration: underline;
  cursor: pointer;
}
.discriptiontext {
  visibility: hidden;
  background-color: #f9f9f9;

  color: black;

  width: 150px;

  border-radius: 6px;

  padding: 5px 0;

  position: absolute;

  z-index: 1;
}

.discriptiontag:hover .discriptiontext {
  visibility: visible;
}
.cards {
  width: 100%;
  margin-left: 2%;
  display: flex;
  justify-content: center;
  /* border: none; */
  background-color: white;
  /* flex-wrap: nowrap; */

  align-content: center;
  align-items: center;
  border-style: solid;
  border-color: #f9f9f9;
  border-radius: 5px;
  margin: 3%;
  padding: 4%;
  transition: all 0.35s;
  /* font-size:8px; */
}

/* img {
  height: 200px;
  width: 200px;
} */
.cards:hover {
  /* height:400px;
    width:25%;
    margin:10px;
    justify-content: center;
    border:none;  */
  box-shadow: 2px 2px 10px grey;
}
.display-button {
  background-color: #01c5a1;
  border: none;
  border-radius: 5px;
  width: 35px;
  color: black;
  margin: 5px;
  width: 80px;
  height: 30px;
  font-size: 20px;
  transition-duration: 0.3s;
}
.display-button:hover {
  background-color: #029d80;
  border: none;
  border-radius: 5px;
  width: 35px;
  color: white;
  margin: 5px;
  width: 85px;
  height: 35px;
  font-size: 20px;
}
.info {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: grey;

  /* font-size:20px; */
}
.link {
  /* text-align: center; */
  padding: 10;
}
@media screen and (max-width: 1000px) {
  .card-content {
    text-align: center;
  }
  .productImage {
    height: 100px;
    width: 100px;
  }
}
</style>