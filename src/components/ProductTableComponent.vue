<template>
     <div class="main-body">
   
          <div class="page-headers">
      <h4>Product Add</h4>
      <h6>Create new product</h6>
    </div>
      
    <div class="main-card">
    
  
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
  
    
        
        <div v-if="getListCount==0"  class="notfound">
                 <img src="../assets/notfound.png" alt="image"/>
               </div>
               <b-table  v-else id="dataTable"  sticky-header height="700" responsive :fields="fields" :items="sellerproductlist">
          <template #cell(imageUrl)="item">
               <img class="imageMain" :src="item.item.imageUrl" alt="">
          </template>
          <template #cell(action)="item">
           <button class="editIcon" @click="editProduct(item.item)"> <b-icon-pencil></b-icon-pencil></button>
            <button class="deleteIcon" @click="deleteProduct(item.item)"> <b-icon-trash-fill></b-icon-trash-fill></button>
          </template>
            
        </b-table>
    </div>
       <div v-if="modalShow">
      <OpenProductComponent
        :productItem="product"
        @hideModal="removeModal"
        :timeStamp="new Date().getTime()"
        :modalShowProp="(modalShow = true)"
      />
    </div>
     </div>
</template>
<style scoped>
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
.page-headers h4 {
  font-weight: 700;
  color: #212b36;

  font-size: 18px;
}
.page-headers h6 {
  font-size: 14px;
  color: #555;
  font-weight: 400;
}
</style>
<script>
// import SellerProductsComponent from  './SellerProductComponent.vue'
// import AddProductComponent from  './AddProductComponent.vue'
import { mapGetters } from 'vuex';
import OpenProductComponent from '@/components/OpenProductComponent.vue'
import {deleteProduct} from '@/service/SellerProductService'
export default {
    name:"ProductTableComponent",
      computed:
  {
      ...mapGetters({
        sellerproductlist:'getSellerproducts'
      }),
      getListCount()
      {
        return this.sellerproductlist.length
      }
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
created()
  {
    const userId = localStorage.getItem('userId');
    console.log("inside created")
    console.log(userId)
      this.$store.dispatch('getsellerproductsfromservice', userId);
  },
  components:{
  OpenProductComponent,
 
 },
    data()
    {
        return {
          fields:['imageUrl','productName','category','price','quantity','description','action'],
           modalShow:false,
           product:[],
           search:"",
            sortBy:[],
      
            
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
    console.log("contaier",sortBy)
    this.$store.dispatch('sortSellerProducts',{sellerid,sortBy});
    },
      editProduct(item)
      {
          this.modalShow=true;
          this.product={... item}
      },
      removeModal()
      {
        const userId = localStorage.getItem('userId');
         this.$store.dispatch('getsellerproductsfromservice', userId);
        this.modalShow = false
      },
      deleteProduct(product)
    {
      console.log("products",product)
      deleteProduct({
           
        success: ({ data }) => {
            
            console.log("success delete")
            if(data.status_code==200)
            {
              console.log("inside code")
              const userId = localStorage.getItem('userId');
              console.log("inside created")
              console.log(userId)
                this.$store.dispatch('getsellerproductsfromservice', userId);
            }
            console.log(data)
        
        },
        error: (e) => {
          
            console.warn(e);
        },
        payload:product
  
    })
    },
    }
}
</script>