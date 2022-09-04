<template>
<div class="container-fluid">
  <div class="container">
    <!-- <input type="text" v-model="search">
     <button @click="findData()">
      search
     </button>
     <br> -->
     <!-- <select v-model="sortBy">
        <option disabled value="">Please select one</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select> 
      <button @click="sortData()">Submit</button>
      <br>
      <p>Price Range</p>
<div class="range-slider">
  <span class="rangeValues">{{minRange}} - {{maxRange}}</span>
  <input value="1000" v-model="minRange" min="1000" max="50000" step="500" type="range">
  <input value="50000" v-model="maxRange" min="1000" max="50000" step="500" type="range">
  <button @click="findPrice">Find</button>
</div>
<button @click="viewType='list'">List</button>
          <button @click="viewType='table'">Table</button> 
 -->   
       
    <b-button v-if="!addDialog" @click="addDialog=true" class="addButton" variant="info">Add</b-button>
     <div v-if="addDialog">
       <b-button @click="addDialog=false" class="addButton" variant="info">close</b-button>
 
     
      <!-- <AddProductComponent /> -->
    </div>
  </div>
 
      <b-container class="container-bgColor">
        
        <b-row>
       
         
               
                 <SellerProductsComponent v-for="(data,index) in sellerproductlist" :key="index" :product="data"/> 
         
         
              
          
        </b-row>
      </b-container>
   
 
</div>
</template>

<script>
import SellerProductsComponent from  './SellerProductComponent.vue'
// import AddProductComponent from  './AddProductComponent.vue'
import { mapGetters } from 'vuex';

export default {
   name: 'ProductContainerComponent',
   components:
   {
   
       SellerProductsComponent,
   },
  data()
  {
   return {
    addDialog:false,
    sortBy:[],
    viewType:'list',
    search:"",
    minRange:1000,
    maxRange:30000,
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
    console.log("inside created")
    console.log(userId)
      this.$store.dispatch('getsellerproductsfromservice', userId);
  },
  methods:{
    findPrice()
    {
      var payload={
        minRange:this.minRange,
        maxRange:this.maxRange
      }

      this.$store.dispatch('searchProductByPric',payload);
    },
    sortData()
    {
    console.log(this.sortBy)
    const sellerid = localStorage.getItem('userId');
    var sortBy=this.sortBy
    console.log("contaier",sortBy)
    this.$store.dispatch('sortSellerProducts',{sellerid,sortBy});
    },
    findData()
    {
      console.log("doind")
      var payload={
        sellerId:localStorage.getItem('userId'),
        searchValue:this.search
      }
      this.$store.dispatch('searchProductServiceCall',payload)
      
    }
  }

}
</script>

<style scoped>

.range-slider {
  width: 300px;
  text-align: center;
  position: relative;
  
}
.rangeValues {
    display: block;
  }
input[type=range] {
  -webkit-appearance: none;
  border: 1px solid white;
  width: 300px;
  position: absolute;
  left: 0;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 300px;
  height: 5px;
  background: #ddd;
  border: none;
  border-radius: 3px;

}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #21c1ff;
  margin-top: -4px;
    cursor: pointer;
      position: relative;
    z-index: 1;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #ccc;
}

input[type=range]::-moz-range-track {
  width: 300px;
  height: 5px;
  background: #ddd;
  border: none;
  border-radius: 3px;
}

input[type=range]::-moz-range-thumb {
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #21c1ff;
  
}


/*hide the outline behind the border*/

input[type=range]:-moz-focusring {
  outline: 1px solid white;
  outline-offset: -1px;
}

input[type=range]::-ms-track {
  width: 300px;
  height: 5px;
  /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
  background: transparent;
  /*leave room for the larger thumb to overflow with a transparent border */
  border-color: transparent;
  border-width: 6px 0;
  /*remove default tick marks*/
  color: transparent;
    z-index: -4;

}

input[type=range]::-ms-fill-lower {
  background: #777;
  border-radius: 10px;
}

input[type=range]::-ms-fill-upper {
  background: #ddd;
  border-radius: 10px;
}

input[type=range]::-ms-thumb {
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #21c1ff;
}

input[type=range]:focus::-ms-fill-lower {
  background: #888;
}

input[type=range]:focus::-ms-fill-upper {
  background: #ccc;
}

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