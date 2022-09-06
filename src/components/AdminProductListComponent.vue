<template>
<div>
  <div class="cont"><div class="bag"><h5 style="padding:3px; margin-left:55px; display:flex;"><ion-icon style="font-size:30px;" name="cube-outline"></ion-icon>Products</h5></div></div>
    <!-- <div class="searchbar">Search By: 
     <select style="border:0.5px solid #1b2850; border-radius:7px;padding:5px; background:white;" v-model="category" name="category">
        <option style="color:grey;" value="" disabled selected>--Select category--</option>
        <option value="name">Name</option>
        <option value="address">userId</option>
        <option value="contact">Product</option>
        </select>
         <b-dropdown v-model="category" id="dropdown-1" text="Category" class="m-md-2">
    <b-dropdown-item>Name</b-dropdown-item>
    <b-dropdown-item>Address</b-dropdown-item>
    <b-dropdown-item>Contact No</b-dropdown-item>
     <b-dropdown-item>User Id</b-dropdown-item> -->
    <!-- <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
  <!-- </b-dropdown> -->
  <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input style="border:0.5px solid #1b2850; border-radius:10px;width:25vw;padding:7px; background:white;" type="text" placeholder="search products" v-model="searchkey">
        <button style="background:white; color:#1b2850; font-size:20px; border-radius:10px; padding:5px;" @click="processSearch()"><ion-icon name="search-sharp"></ion-icon></button> 
       </div> --> 
       <div class="grid-container">
      <div class="seller-card" v-for="value in products" :key="value">
       <img :src="value.imageUrl" alt="Image" height=70px width=70px />
  <ul class="ulList">
       <li><b>Name : {{value.productName}}</b></li>
       <li><b>Category : {{value.category}}</b></li>
       <li><b>Quantity : {{value.quantity}}</b></li>
       <li><b>Price : {{value.price}}</b></li>
       </ul></div>
         <!-- <div class="tabv"> -->
   <!-- <b-table style="font-size:12px;" :items="products" :fields="fields" responsive> 
       :items="getProducts.data" -->
      <!-- <template #cell(imageUrl)='item'>
         <img :src="item.imageUrl" alt="image">
      </template>
           
    </b-table>  -->
  <!-- </div> -->
</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'AdminProductListComponent',
 data()
 {
    return{
        i:1,
        modalShow:false,
        Description:'Sun Microsystems,we sell computer and accessories related to them',
        fields: [
'productId',
'productName',
'category','quantity','price','description']
    }
 },
 computed:
 {
    ...mapGetters({
        products:'getProducts'
    })
 },
 created()
 {
    this.$store.dispatch('PRODUCT_LIST');
 },
    
}
</script>

<style scoped>
.ulList{
  list-style-type:none;
  font-size: small;
   text-align:left;
}
.cont{
   display: flex;
   width:100% ;
   justify-content:center;
   margin-top:10px;
}
.bag{
   border:0.2px solid #1b2850;
   padding:0px;
   width:250px;
   display:flex;
   justify-content: baseline;
   border-radius:10px;
   background:whitesmoke;
  text-align: center;
}
.tabv{
    background: white;
    width:90%;
    margin-left:7%;
    border-radius:8px;
    border:0.5px solid green;
    padding:5px;
    height:100;
}
.searchbar{
    margin-bottom:20px;
}
.seller-card {
  background-color: whitesmoke;
  border-radius: 2%;
  border: 2px solid #1b2850 ;
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
.grid-container {
  border-radius: 3%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1em;
  padding: 5vh 5vh;
  scroll-behavior: smooth;
  margin-left: 20px;
}
button {
  padding: 0.5em;
  margin-top: 3vh;
  background-color:white !important;
  height: 3em !important;
  border: 2px solid #1b2850;
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