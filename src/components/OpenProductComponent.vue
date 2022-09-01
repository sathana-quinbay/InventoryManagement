<template>
  <div>
    <!-- <b-button id="show-btn" @click="showModal">Open Modal</b-button> -->
    <!-- <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button> -->

    <b-modal no-close-on-backdrop class="modalClass" ref="my-modal" hide-header hide-footer width="80%">
      <div class="edit">
        <b-button v-if="!editForm"  @click="editForm=!editForm" class="mt-3 success editIcon" variant=""><b-icon-pencil></b-icon-pencil></b-button>
     
      </div>
      <div class="d-block text-center">
      <b-container>
             
            <b-row> 
          <b-col cols="12" md="6" sm="12" xs="12">
            <label class="formLabels">Product Name</label>
             <b-form-input :disabled="!editForm" v-model="product.productName" type="text" ></b-form-input>
               <!-- <input v-model="product.productName" placeholder="Product Name"> -->
          </b-col>
          <b-col cols="12" md="6" sm="12" xs="12">
             <label class="formLabels">Image Url</label>
             <b-form-input :disabled="!editForm" v-model="product.imageUrl"  type="text" ></b-form-input>
               <!-- <input v-model="product.productPrice" placeholder="Product Price"> -->
          </b-col>
         
        </b-row>
         <b-row>
          <b-col cols="12" md="6" sm="12" xs="12">
            <label class="formLabels">Selling Price</label>
             <b-form-input :disabled="!editForm" v-model="product.sellingPrice" type="number" ></b-form-input>
               <!-- <input v-model="product.productName" placeholder="Product Name"> -->
          </b-col>
          <b-col cols="12" md="6" sm="12" xs="12">
              <label class="formLabels">Product Price</label>
             <b-form-input :disabled="!editForm" v-model="product.productPrice" type="number"></b-form-input>
               <!-- <input v-model="product.productPrice" placeholder="Product Price"> -->
          </b-col>
        </b-row>
         <b-row>
          <b-col cols="12" md="6" sm="12" xs="12">
              <label class="formLabels">Quantity</label>
             <b-form-input :disabled="!editForm" v-model="product.quantity" type="number"></b-form-input>
               <!-- <input v-model="product.productName" placeholder="Product Name"> -->
          </b-col>
          <b-col cols="12" md="6" sm="12" xs="12">
              <label class="formLabels">Coupon</label>
             <b-form-input :disabled="!editForm" v-model="product.coupon" type="text"></b-form-input>
               <!-- <input v-model="product.productPrice" placeholder="Product Price"> -->
          </b-col>
        </b-row>
        <b-row>
          <b-col>
              <label class="formLabels">discriptions</label>
              <b-form-textarea
      id="textarea"
     v-model="product.discription"
     :disabled="!editForm"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>

          </b-col>
        </b-row>
      </b-container>
       
      </div>
      <div class="button-actions">
        <b-button v-if="editForm" class="mt-3 saveButton" variant="" block @click="hideModal">Save</b-button>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>

      </div>
     
     
    </b-modal>
  </div>
</template>
<style>
button.close {
    display: none;
   
}
button.saveButton {
    border:1px solid  purple;
    color: purple;
   
    background: none;
}
button.saveButton:hover{
    background: purple;
    color:white;
}
.modalClass{
  width:1000px !important ;
}
.formLabels {
   float: left;
   margin-top:3%;
}
.button-actions{
  display: flex;
  justify-content: space-evenly;
}
textarea.form-control:focus,
input:focus,
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="number"]:focus{
  border-color: none;
  cursor: pointer;
  outline: none !important;
  border-color: purple;
  box-shadow: none;
}
.edit{
  width:100%;
  text-align: right;
  margin-right: 1%;
  display: block;
}
button.editIcon {
    background: purple;
}
button.editIcon:hover{
  background: none;
  color: purple;
}
</style>
<script>
 export default {
    name:"OpenProductComponent",
    props:['modalShowProp','productItem'],
    data()
    {
       return {
        product:{
      productName:"",
      productPrice:"",
       discription:"",
       qunatity:"",
       coupon:"",
       sellingPrice:"",
       },
       editForm:false
       }
    },
    watch:{
     timeStamp()
     {
       this.check()
       this.product=this.productItem
     }
    },
    mounted()
    {
      console.log(this.modalShowProp)
      this.check()
      this.product=this.productItem

    },
    methods: {
      check()
      {
if(this.modalShowProp==true)
      {
         this.showModal()
      }
      else{
        this.hideModal()
      }
      },
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
        this.$emit('hideModal',false)
      },
     
    }
  }
</script>