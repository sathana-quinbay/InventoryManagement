<template>
     <div class="main-body">
   
         
      
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
                 <img class="notFoundImg" src="../assets/notfound.png" alt="imageNoutFound"/>
               </div>
               <b-table  v-else id="dataTable"  sticky-header height="700" responsive :fields="fields" :items="sellerproductlist">
          <template #cell(imageUrl)="item">
               <img class="imageMain" :src="item.item.imageUrl" alt="Not found">
          </template>
          <template #cell(action)="item">
           <button class="editIcon" @click="editProduct(item.item)"> <b-icon-eye></b-icon-eye></button>
            <button class="deleteIcon" @click="showModal(item.item)"> <b-icon-trash-fill></b-icon-trash-fill></button>
          </template>
            
        </b-table>
    </div>
      <b-modal ref="my-modal" hide-footer title="Products will be deleted permanently">
      <div class="d-block text-center">
        <p>Are you sure?</p>
      </div>
      <div class="button-group">
 <b-button class="mt-3 reactivate-button yesButton" variant="outline-primary" block @click="deleteProductFunction">Yes</b-button>
      <b-button class="mt-3 noButton" variant="outline-danger" block @click="hideModal">No</b-button>
     
      </div>
      
    </b-modal>
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
.yesButton:hover
{
  background: #212b36;
  color:white;
  width:40% ;
  border:none;
}
.yesButton
{
  background: none;
  color:#212b36;
  width:40% ;
  border:1px solid #212b36;
}
.noButton:hover
{
    width:40% ;
  background: #ff9f43;
  color: white;
  border: none;
}
.noButton
{
    width:40% ;
  background: none;
  color: #ff9f43;
  border: 1px solid #ff9f43;
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
.button-group
{
  display: flex;
  justify-content: space-around;
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
@media screen and (max-width:600px) {
  img.notFoundImg {
    width: 100%;
}
.searchButton {
    background: 0 0;
    height: 40px;
    border: 1px solid rgba(145,158,171,.32);
    width: 140px;
    border-radius: 5px;
    padding: 0 15px 0 30px;
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
      },
      sortedData()
      {
                  console.log(this.sellerproductlist)
        // var MyData = {... this.sellerproductlist}
        // MyData.sort(this.dynamicSort("productName"));
        // console.log(MyData)
        return this.sellerproductlist.length
      }
  },
  watch:{
    search()
    {
      if(this.search!='')
      this.findData()
      else
       {
        const userId = localStorage.getItem('userId');
        this.$store.dispatch('getsellerproductsfromservice', userId);
       }
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
           fields: [
            {key:'imageUrl',sortable:false},
          { key: 'productName', sortable: false },
          { key: 'category', sortable: false },
          { key: 'price', sortable: false },
          {key:'quantity',sortable:false},
         
 {key:'action',sortable:false}

        ],
           modalShow:false,
           product:[],
           search:"",
           deleteItem:'',
            sortBy:[],
      
      
            
        }
    },

    mounted(){
        console.log("inside mounteed");
        console.log(this.sellerproductlist)
        // var MyData = {... this.sellerproductlist}
        // MyData.sort(this.dynamicSort("ame"));

// Display data with new order !
// console.log(MyData);
    },
    methods:{
      dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
},
      findData()
    {
      console.log("doind")
      var payload={
        sellerId:localStorage.getItem('userId'),
        searchValue:this.search
      }

      this.$store.dispatch('searchProductServiceCall',payload)
      
    },
    showModal(item) {
      this.$refs["my-modal"].show();
      this.deleteItem=item
      console.log("delete item",this.deleteItem)
    },
    hideModal() {
      this.$refs["my-modal"].hide();
      
      
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
      editProduct(item)
      {
          this.modalShow=true;
          this.product={... item}
          console.log("edited",this.product)
      },
      removeModal()
      {
        const userId = localStorage.getItem('userId');
         this.$store.dispatch('getsellerproductsfromservice', userId);
        this.modalShow = false
      },
      deleteProductFunction()
    {
      var product = this.deleteItem
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
                // this.$store.dispatch('getsellerproductsfromservice', userId);
                this.findData()
                this.deleteItem=''

            }
            console.log(data)
            this.hideModal()
        
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