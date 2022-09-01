<template>
  <div>
     
 

    <div class="container">

      <div class="left">
         
        <img
          :src="require(`@/assets/brand-logo.png`)"
        /><br />
        <div class="info" v-if="sellerobj">
          NAME: {{ sellerobj.name }}<br />
          EMAIL: {{ sellerobj.emailId }}<br />
          ADDRESS: {{ sellerobj.address }}<br />
          <!-- ID: {{ sellerobj.userId.substring(10,20) }}<br /> -->
          CONTACT: {{ sellerobj.contact }}<br />
        </div>
        <!-- <div class="info">
          NAME: : Sample Seller<br/>
          ADDRESS: Sample Address<br/>
          ID:   QB65231<br/>
          CONTACT: 9988776655<br/>
        </div> -->
        <div>
          <input class="view-button" type="button" value="VIEW PRODUCTS"  @click="viewProducts()"/>
        </div>
      </div>
      <div class="right">
        <br />
        <br />
        <div class="add">ADD PRODUCT</div>
        <br />
        <form name="addproduct">
          <table>
            <tr>
              <td>Name:</td>
              <td>
                <input type="text" v-model="obj.productName" placeholder="Product Name"/>
              </td>
            </tr>
            <tr>
              <td>IMAGE(URL):</td>
              <td>
                <input type="text" v-model="obj.imageUrl" placeholder="Product Image URL"/>
              </td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>
                <textarea
                  rows="4"
                  cols="16"
                  v-model="obj.discription"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>Selling price:</td>
              <td>
                <input type="number" v-model="obj.sellingPrice" placeholder="Product Selling Price"/>
              </td>
            </tr>
            <tr>
              <td>Product price:</td>
              <td>
                <input type="number" v-model="obj.productPrice" placeholder="Product Cost Price"/>
              </td>
            </tr>

            <tr>
              <td>Set quantity:</td>
              <td>
                <input type="number" v-model="obj.quantity" placeholder="Quantity"/>
              </td>
            </tr>
            <tr>
              <td>Promo:</td>
              <td>
                <input type="text" v-model="obj.promo" placeholder="Select Promo"/>
              </td>
            </tr>
          </table>
        </form>
        <div class="button-class">
          <input class="add-button" v-if="sellerobj.status" type="button" value="ADD" @click="addproduct()">
          <input class="add-button disabled" v-else type="button" value="Disabled">
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./scripts/SellerInventoryComponent.js">

</script>

<style scoped>
.disabled {
  background-color: gray !important;
}

.container {
  /* padding:50px; */
  display: flex;
  margin-top: 200px;
  margin-left: 100px;
  height: 55vh;
  margin-right: 100px;
  background-color: white;
  font-size: 17px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 20px;
  box-shadow: 2px 2px 10px grey;
  color: grey;
  /* width:80%; */
}

.right {
  font-size: 13px;
  margin-left: 150px;
  padding-right: 30px;
}
img {
  width: 150px;
  height: 150px;
}

.left {
  border-right-style: solid;
  border-right-color: lightgray;
  padding: 30px;
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

.info {
  margin-top: 30px;
  text-align: left;
}

.add-button {
  border-radius: 5px;
  border: none;
  background-color: #01c5a1;
  color: white;
  padding: 7px;
  width: 100px;
}

.view-button {
  border-radius: 5px;
  border: none;
  margin-top: 40px;
  background-color: #01c5a1;
  color: white;
  padding: 7px;
  width: 200px;
}

.button-class {
  margin-top: 30px;
  margin-left: 130px;
}

.add {
  font-size: 20px;
}

@media screen and (max-width: 1100px) {
  .right {
    margin-left: 20px;
  }

  .info {
    display: none;
  }
}

@media screen and (max-width: 650px) {
  .right {
    display: none;
  }
}

@media screen and (max-width: 710px) {
  .right {
    display: none;
  }

  .left {
    border-right-color: white;
  }

  img {
    width: 90%;
    height: 90%;
  }
}
</style>