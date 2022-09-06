<template>
    
 <div class="main-body">
   
          <div class="page-headers">
      
       <b-container-fluid>
        <b-row>
          <b-col cols="12" lg="8" md="6" sm="6">
          <h4>Product List</h4>
      <h6>Manage your products</h6>
          </b-col>
           <b-col cols="12" lg="4" md="6" sm="6">
           <button class="submitButton" @click="$router.push({path:'/seller/add'})"> Add Product</button>
           </b-col>
        </b-row>
      </b-container-fluid>
     
    
    </div>
     <div class="main-card-tab">
          
<b-container-fluid>
  <b-row>
   
      <b-col cols="12" lg="12" md="12" sm="12">
        
       <div  class="viewButtons">
         <button @click="view='table'" :class="view=='table'?'viewByButton tableActive':'viewByButton'">Table</button> 
         <!-- <button class="viewByButtonNot">|</button> -->
        <button @click="view='card'" :class="view=='card'?'viewByButton tableActive':'viewByButton'">Card</button>
      
       </div>
         
          </b-col>
  </b-row>
</b-container-fluid>
  
      </div>
        <!-- <img v-if="sellerproductlist.length==0" class="notFoundImg" src="../assets/notfound.png" alt="imageNoutFound"/> -->
      <div  v-if="view=='table'"><ProductTableComponent/></div>
      <div v-if="view=='card'"><ProductContainerComponent/></div>
 </div>

</template>
<style scoped>
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
.searchDiv
{
  text-align: left;
}
.viewButtons
{
  display: flex;
  padding: 0;
  background: white;
  margin:0;
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
  margin:1%;
  color:#ff9f43;
  /* border-bottom: 1px solid black; */
  background: #fafbfe;
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
</style>
<script>
import { mapGetters } from 'vuex';
import ProductTableComponent from '@/components/ProductTableComponent.vue'
import ProductContainerComponent from '@/components/ProductContainerComponent'
export default{
    name:"ProductViewComponent",
    components:{
ProductTableComponent,
ProductContainerComponent
    },
    data(){
        return {
            view:'table',
        }
    },
       computed:
  {
      ...mapGetters({
        sellerproductlist:'getSellerproducts'
      }),
  }
}
</script>
