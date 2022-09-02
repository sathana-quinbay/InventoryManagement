<template>
<div>
  <h1>Products</h1>
  <div class="tabv">
    <select style="border:0.2px solid black; border-radius:7px;padding:5px; background:whitesmoke;" v-model="category">
        <option :v-for="s" value="">s</option>
    </select>
   <b-table :fields="fields" responsive='sd'>   <!--:items="getProducts.data"-->
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
        fields: ['Name','Quantity'],

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
    border:0.5px solid #01c5a1;
    padding:5px;
    height:82vh;
}
</style>