<template>
<div class="container-fluid">
  <div class="container">
    <b-button v-if="!addDialog" @click="addDialog=true" class="addButton" variant="info">Add Product</b-button>
     <div v-if="addDialog">
       <b-button @click="addDialog=false" class="addButton" variant="info">close</b-button>
 
     
      <AddProductComponent />
    </div>
  </div>
 
      <b-container class="container-bgColor">
         <select v-model="sortBy">
        <option disabled value="">Please select one</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <button @click="sortData()">Submit</button>
    
        <b-row>
         
           <SellerProductsComponent v-for="(data,index) in sellerproductlist" :key="index" :product="data"/> 
         
        </b-row>
      </b-container>
   
 
</div>
</template>

<script>
import SellerProductsComponent from  './SellerProductComponent.vue'
import AddProductComponent from  './AddProductComponent.vue'
import { mapGetters } from 'vuex';
import {sortProduct} from '@/service/SellerProductService'
export default {
   name: 'ProductContainerComponent',
   components:
   {
    AddProductComponent,
       SellerProductsComponent,
   },
  data()
  {
   return {
    addDialog:false,
    sortBy:[],
   }
  },
  computed:
  {
      ...mapGetters({
        sellerproductlist:'getSellerproducts'
      })
  },

  created()
  {
    const userId = localStorage.getItem('userId');
    console.log(userId)
    //  this.$store.dispatch('getsellerproductsfromservice', userId);
  },
  methods:{
    sortData()
    {
    console.log(this.sortBy)
    const sellerid = localStorage.getItem('userId');
    var sortBy=this.sortBy
    sortProduct({
      sellerid,
      sortBy,
      success: ({ data }) => {
          console.log("success")
          console.log(data)
         
      },
      error: (e) => {
         
          console.warn(e);
      }

  })

    },
  }

}
</script>

<style scoped>
.container{
  margin-top:5%;
  display: block;
}
.container-bgColor{
 padding:40px;
  overflow-y:scroll;
  height: 500px;
    background-color:#f9f9f9;
    border-radius:20px;
}
/* .containers
{  
   
    height:600px;
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
   
 
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
} */
.container-table{
  margin-top:3%;
}
.addButton{
  margin-top:0%;
  display: block;
  width:max-content;
  border: none;
  background:  #A760FF;
  color: white;
  /* position: sticky;
  top:100px;
  left:100px; */
  margin-right: 2%;
}
.addButton:hover{
  color: white;
}

</style>