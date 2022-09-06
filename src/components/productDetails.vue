<template>
<div style="width:80vw;margin-left:100px;">
  <h2 style="font-family:sans serif;">products</h2>
  <div class="tabv">
   <b-table style="font-size:12px;" :items="products" :fields="fields" responsive> 
        <template #cell(imageUrl)='item'>
         <img :src="item.imageUrl" alt="image">
      </template>
    </b-table>
    </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data()
    {
        return{
            fields:['imageUrl','productName','category',
'price',
'productId',
'productName',
'quantity',
]
        }
    },
       created(){
          this.$store.dispatch('UNIQUE_PRODUCT_LIST',this.$store.state.specificSellerStore.uniqueId);
       },
       computed:{
     ...mapGetters({
        products:'getProducts'
     })  
       }
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
    height:100;
}
</style>