<template>
<div>
     
      
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
<!--        
    <b-button v-if="!addDialog" @click="addDialog=true" class="addButton" variant="info">Add</b-button>
     <div v-if="addDialog">
       <b-button @click="addDialog=false" class="addButton" variant="info">close</b-button>
 
     
      
    </div> -->
    
 
  
 <div class="main-body-container">
    <b-container-fluid>
  <b-row>
    <b-col class="searchDiv" cols="12" lg="8" md="12" sm="12">
      <div class="dropdown">
  <b-icon-filter-circle-fill class="filtericon"></b-icon-filter-circle-fill>
  <div class="dropdown-content">
    <li><button @click="sortBy='name'">Name</button></li>
    <li><button @click="sortBy='price'">Price</button></li>
  </div>
</div>
    
       <input class="searchButton" type="text" v-model="search">
     <button class="searchIcon"  @click="findData()">
      <b-icon icon="search"></b-icon>
     </button>
    </b-col>
      <!-- <b-col cols="12" lg="4" md="12" sm="12">
       <div class="viewButtons">
         <button class="viewByButton">table</button> 
          <button class="viewByButtonNot">|</button> 
        <button  class="viewByButton tableActive">card</button>
       </div>
      </b-col> -->
  </b-row>
</b-container-fluid>
      <b-container-fluid class="container-bgColor">
        
        <b-row>
         <div class="notFound" v-if="getCount==0"> <img  src="../assets/notfound.png" alt="image"/></div>
         
               
                 <SellerProductsComponent v-else v-for="(data,index) in sellerproductlist" :key="index" :product="data"/> 
         
         
              
          
        </b-row>
      </b-container-fluid>
 </div>
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
      }),
      getCount()
      {
        return this.sellerproductlist.length
      }
      
  },

  created()
  {
    const userId = localStorage.getItem('userId');
    console.log("inside created")
    console.log(userId)
      this.$store.dispatch('getsellerproductsfromservice', userId);
  },

  watch:{
    search()
    {
      this.findData()
    },
    sortBy()
    {
        this.sortData()
        
    }
  },
  methods:{
     findData()
    {
      console.log("doind")
      var payload={
        sellerId:localStorage.getItem('userId'),
        searchValue:this.search
      }

      this.$store.dispatch('searchProductServiceCall',payload)
      
    },
    sortData()
    {
    console.log(this.sortBy)
    const sellerid = localStorage.getItem('userId');
    var sortBy=this.sortBy
    this.search=""
    console.log("contaier",sortBy)
    this.$store.dispatch('sortSellerProducts',{sellerid,sortBy});
    },
    findPrice()
    {
      var payload={
        minRange:this.minRange,
        maxRange:this.maxRange
      }

      this.$store.dispatch('searchProductByPric',payload);
    },
   
    
  }

}
</script>

<style scoped>
.searchDiv
{
  text-align: left;
}
.viewButtons
{
  display: flex;
  justify-content: space-around;
}
.viewByButton{
  margin: none;
  padding:1%;
  width: 50%;
  background: none;
  color: white;
  border: none;
  color: black;
  
}
.viewByButtonNot
{
  background: none;
 font-size:30px;
 border: none;
}
.main-body-container
{
  margin: 0 0 25px;
  margin-top:2%;
 
  border: 1px solid #e8ebed;
  border-radius: 6px;
  background: white;
  padding: 20px;
}
.searchButton
{
      background: 0 0;
    height: 40px;
    border: 1px solid rgba(145,158,171,.32);
    width: 200px;
    border-radius: 5px;
    padding: 0 15px 0 30px;
}
.searchIcon
{
  background: none;
  border: none;
  font-size: 20px;
  margin-left: 10px;
}
.main-body {
  padding: 1% 2%;
  background: #fafbfe;
  padding: 1%;
  text-align: left;
   height: 100vh;
  font-family: sans-serif;
}
.submitButton
{
    min-width: 120px;
    float: right;
  background: #ff9f43;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  padding: 14px 10px;
 

}
@media screen and (max-width:600px) {
  .notFoundImg img {
    width: 100%;
}
 .submitButton{
    min-width: 101px;
    float: right;
    background: #ff9f43;
    color: #fff;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    padding: 4px 10px;
}
  .searchButton {
    background: 0 0;
    height: 40px;
    border: 1px solid rgba(145,158,171,.32);
    width: 140px;
    border-radius: 5px;
    padding: 0 15px 0 30px;
}
}
.page-headers h4 {
  font-weight: 700;
  color: #212b36;

  font-size: 18px;
}
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
.notFound
{
  width: 100%;
  display: flex;
  justify-content: center;
  
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

  
.searchDiv
{
  text-align: left;
}
.viewButtons
{
  display: flex;
  justify-content: space-around;
}
.viewByButton{
  margin: none;
  padding:1%;
  width: 50%;
  background: none;
  color: white;
  border: none;
  color: black;
  
}
.viewByButtonNot
{
  background: none;
 font-size:30px;
 border: none;
}
.imageMain
{
 
background-image:url('https://phulbanimunicipality.nic.in/wards.php');
}
.filtericon
{
  font-size: 30px;
}
.dropdown {
  position: relative;
  display: inline-block;
  margin-right:20px ;
}
li{
  list-style-type: none;
}
.notfound
{
  margin-top:3%;
  display: flex;
  text-align: center;
  justify-content: center;
}
li:hover{
  color: black;
}
li button{
  background: none;
  border: none;
}
.dropdown-content {
  display: none;

  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 100;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.imageMain
{
  width: 100px;
  height: 100px;
}
.searchButton
{
      background: 0 0;
    height: 40px;
    border: 1px solid rgba(145,158,171,.32);
    width: 200px;
    border-radius: 5px;
    padding: 0 15px 0 30px;
}
.editIcon,.deleteIcon
{
  background: none;
  border: none;
  margin-left: 2%;
  cursor: pointer;
}
.editIcon{
  color: green;
}
.deleteIcon
{
  color:red
}
.b-table-sticky-header {
    overflow-y: auto;
    max-height: 600px;
}
.shortHeight
{
  max-height: 20px;
}
.main-card{
  margin: 0 0 25px;
  margin-top:2%;
 
  border: 1px solid #e8ebed;
  border-radius: 6px;
  background: white;
  padding: 20px;
}
.searchIcon
{
  background: none;
  border: none;
  font-size: 20px;
  margin-left: 10px;
}
.main-body {
  padding: 1% 2%;
  background: #fafbfe;
  padding: 1%;
  text-align: left;
   height: 100vh;
  font-family: sans-serif;
}
.tableActive
{
  border-bottom: 1px solid black;
}
.page-headers h4 {
  font-weight: 700;
  color: #212b36;

  font-size: 18px;
}
.submitButton
{
    min-width: 120px;
    float: right;
  background: #ff9f43;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  padding: 14px 10px;
 

}
.page-headers h6 {
  font-size: 14px;
  color: #555;
  font-weight: 400;
}
</style>