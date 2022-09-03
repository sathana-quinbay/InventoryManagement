<template>
<div>
  <h3 style="padding:20px;">Products</h3>
  <div class="tabv">
    <div class="searchbar">Search By: 
     <select style="border:0.5px solid #1b2850; border-radius:7px;padding:5px; background:white;" v-model="category" name="category">
        <option style="color:grey;" value="" disabled selected>--Select category--</option>
        <option value="name">name</option>
        <option value="address">address</option>
        <option value="contact">contact</option>
        <option value="userid">userid</option>
        </select>
        <!-- <b-dropdown v-model="category" id="dropdown-1" text="Category" class="m-md-2">
    <b-dropdown-item>Name</b-dropdown-item>
    <b-dropdown-item>Address</b-dropdown-item>
    <b-dropdown-item>Contact No</b-dropdown-item>
     <b-dropdown-item>User Id</b-dropdown-item> -->
    <!-- <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
  <!-- </b-dropdown> -->
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input style="border:0.5px solid #1b2850; border-radius:10px;width:25vw;padding:7px; background:white;" type="text" placeholder="search products" v-model="searchkey">
        <button style="background:white; color:#1b2850; font-size:20px; border-radius:10px; padding:5px;" @click="processSearch()"><ion-icon name="search-sharp"></ion-icon></button> 
        <div style="float:right; margin-right:10vw;"> Sort By: <select style="border:0.5px solid #1b2850; border-radius:7px;padding:5px; background:white;" v-model="sortby">
          <option style="color:grey;" value="" disabled selected>-select-</option>
        <option value="name">name</option>
        <option value="userid">userid</option>
        </select> </div></div>
   <b-table :items="products" :fields="fields" responsive='sd'> 
      <!--:items="getProducts.data"-->
      <template #cell(imageUrl)='item'>
            <img :src="item">
      </template>
    </b-table>
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
'productName','imageUrl',
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

<style>
.tabv{
    background: white;
    width:90%;
    margin-left:7%;
    border-radius:8px;
    border:0.5px solid green;
    padding:5px;
    height:82vh;
}
.searchbar{
    margin-bottom:20px;
}
</style>