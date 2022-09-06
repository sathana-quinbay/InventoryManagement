<template>
  <div class="editCartComponent">
    <!-- <b-button id="show-btn" @click="showModal">Open Modal</b-button> -->
    <!-- <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button> -->

    <b-modal
      no-close-on-backdrop
      class="modalClass"
      ref="my-modal"
      hide-header
      hide-footer
      width="80%"
    >
      <div class="edit">
        <b-button
          v-if="!editForm"
          @click="editForm = !editForm"
          class="mt-3 success editIcon"
          variant=""
          ><b-icon-pencil></b-icon-pencil
        ></b-button>
      </div>
      <div class="d-block text-center">
        <b-container>
              <span class="errorMessage">{{errorSpanMessage}}</span>
          <b-row>
            <b-col cols="12" md="6" sm="12" xs="12">
              <label class="formLabels">Product Name</label>
              <b-form-input
                :disabled="!editForm"
                v-model="product.productName"
                type="text"
                  :class="nameError ? 'inputError' : ''"
              ></b-form-input>
                <span class="errorMessage">{{nameSpanError}}</span>
              <!-- <input v-model="product.productName" placeholder="Product Name"> -->
            </b-col>
            <b-col cols="12" md="6" sm="12" xs="12">
              <label class="formLabels">Image Url</label>
              <b-form-input
                :disabled="!editForm"
                 :class="imageError ? 'inputError' : ''"
                v-model="product.imageUrl"
                type="text"
              ></b-form-input>
              <!-- <input v-model="product.price" placeholder="Product Price"> -->
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="6" sm="12" xs="12">
              <label class="formLabels">Category</label>
              <b-form-input
                :disabled="!editForm"
                v-model="product.category"
                   :class="categoryError ? 'inputError' : ''"
                type="text"
              ></b-form-input>
                <span class="errorMessage">{{categorySpanError}}</span> 
              <!-- <input v-model="product.productName" placeholder="Product Name"> -->
            </b-col>
            <b-col cols="12" md="6" sm="12" xs="12">
              <label class="formLabels">Product Price</label>
              <b-form-input
               min="0"
                :disabled="!editForm"
                v-model="price"
                type="number"
              ></b-form-input>
              <!-- <input v-model="product.price" placeholder="Product Price"> -->
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="6" sm="12" xs="12">
              <label class="formLabels">Quantity</label>
              <b-form-input
                :disabled="!editForm"
                @blur="roundOff"
                v-model="quantity"
                type="number"
              ></b-form-input>
              <!-- <input v-model="product.productName" placeholder="Product Name"> -->
            </b-col>
            <!-- <b-col cols="12" md="6" sm="12" xs="12">
              <label class="formLabels">Coupon</label>
             <b-form-input :disabled="!editForm" v-model="product.coupon" type="text"></b-form-input>
              
          </b-col> -->
          </b-row>
          <b-row>
            <b-col>
              <label class="formLabels">descriptions</label>
              <b-form-textarea
                id="textarea"
                v-model="product.description"
                  :class="descriptionError ? 'inputError' : ''"
                :disabled="!editForm"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"

              ></b-form-textarea>
               <span class="errorMessage">{{descriptionSpanError}}</span> 
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="button-actions">
        <b-button
          v-if="editForm"
          class="mt-3 saveButton"
          variant=""
          block
          @click="updateForm"
          >Save</b-button
        >
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
          >Close</b-button
        >
      </div>
    </b-modal>
  </div>
</template>
<style>
button.close {
  display: none;
}
button.saveButton {
  border: 1px solid purple;
  color: purple;

  background: none;
}
button.saveButton:hover {
  background: purple;
  color: white;
}
.modalClass {
  width: 1000px !important ;
}
.formLabels {
  float: left;
  margin-top: 3%;
}
.editCartComponent {
  margin-top: 30%;
}
.button-actions {
  display: flex;
  justify-content: space-evenly;
}
textarea.form-control:focus,
input:focus,
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="number"]:focus {
  border-color: none;
  cursor: pointer;
  outline: none !important;
  border-color: purple;
  box-shadow: none;
}
span.errorMessage
{
  color: red;
}
.inputError {
    border: 1px solid red !important;
}
.inputError {
  border: 1px solid red;
}
.edit {
  width: 100%;
  text-align: right;
  margin-right: 1%;
  display: block;
}
button.editIcon {
  background: purple;
}
button.editIcon:hover {
  background: none;
  color: purple;
}
</style>
<script>
import {editsellerproducts} from '@/service/SellerProductService'
export default {
  name: "OpenProductComponent",
  props: ["modalShowProp", "productItem"],
  data() {
    return {
      product: {
        productName: "",
        price: "",
        description: "",
        sellerId:"",
        qunatity: "",
        coupon: "",
        category: "",
      },
      price:0,
      quantity:0,
      editForm: false,
     
      selectedFiles: undefined,
      nameError: false,
      categoryError: false,
      imageError: false,
      descriptionError: false,
      errorSpanMessage:"",
      nameSpanError:'',
      categorySpanError:'',
      descriptionSpanError:''
    };
  },
  watch: {
    timeStamp() {
      this.check();
      this.product = this.productItem;
    },
  
  price(newvalue, olvalue) {
      console.log(typeof newvalue, newvalue, typeof olvalue, olvalue);
      console.log(typeof this.price, this.price);
      if (this.price < 0) {
        this.price = 1;
      }
    },
   quantity()
  {
      if(this.quantity<0)
      {
         this.quantity=0
      }
  }
},
  mounted() {
    console.log(this.modalShowProp);
    this.check();
    this.product = this.productItem;
    this.price=this.product.price;
    this.quantity=this.product.quantity;
    console.log("inside open",this.product)
  },
  methods: {
      roundOff() {
      if (
        this.quantity == "" ||
        this.quantity < 0 ||
        this.quantity == undefined
      ) {
        this.quantity = 0;
      } else {
        this.quantity = parseInt(this.quantity);
      }
    },
     nameCheck()
        {
          
          console.log("***** inside name check")
          this.nameError=true
           this.nameSpanError=''
           if(this.product.productName[0]>='a'&&this.product.productName[0]<='a')
           this.nameSpanError="Must start with aplphabet"
           else if(this.product.productName.length<2)
           this.nameSpanError="Minimum 2 characters"
           else if(this.product.productName.length>20)
           this.nameSpanError="Maximum 20 characters"
          //  if (this.seller.password.search(/[^A-Za-z0-9]/) > 0) {
          //      this.nameSpanError='must not contain special characters'
          //   }
           else{ 
            this.nameSpanError=''
            this.nameError=false
           }
        },
        categoryCheck()
        {
           var categoryRegx = new RegExp('^[a-zA-Z . ]+$')
          this.categoryError=true
           this.categorySpanError=''
           if(this.product.category.length<2)
           this.categorySpanError="Minimum 2 characters"
           else if(this.product.category.length>20)
           this.categorySpanError="Maximum 20 characters"
          else if (!categoryRegx.test(this.product.category))
             this.categorySpanError="Must contain Alphabets only"
          //  if (this.seller.password.search(/[^A-Za-z0-9]/) > 0) {
          //      this.nameSpanError='must not contain special characters'
          //   }
           else{ 
            this.categorySpanError=''
            this.categoryError=false
           }
        },
        descriptionCheck()
        {
          this.descriptionError=true
           this.descriptionSpanError=''
           if(this.product.description.length<10)
           this.descriptionSpanError="Give more information"
           else if(this.product.description.length>350)
           this.descriptionSpanError="Limit execeded"
          //  if (this.seller.password.search(/[^A-Za-z0-9]/) > 0) {
          //      this.descriptionSpanError='must not contain special characters'
          //   }
           else{ 
            this.descriptionSpanError=''
            this.descriptionError=false
           }
        },
    check() {
      if (this.modalShowProp == true) {
        this.showModal();
      } else {
        this.hideModal();
      }
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
      this.$emit("hideModal", false);
    },
    updateForm()
    {
        this.nameError = false;
      this.categoryError = false;
      this.descriptionError = false;
      this.imageError = false;
      if (this.product.productName.length == 0) this.nameError = true;
      if (this.product.category.length == 0) this.categoryError = true;
      if (this.product.imageUrl.length == 0) this.imageError = true;
      if (this.product.description.length == 0) this.descriptionError = true;
      if (this.price.length == 0) this.price = 1;
      console.log(this.nameError)
      console.log(this.categoryError)
      console.log(this.imageError)
      console.log(this.descriptionError)
      if(!this.nameError&&(!this.categoryError)&&(!this.imageError)&&(!this.descriptionError))
      { 
        this.errorSpanMessage=''
        console.log("inside")
        this.nameCheck();
       
        this.categoryCheck()
        this.descriptionCheck()
        console.log(this.nameError)
        console.log(this.categoryError);
         console.log(this.imageError);
        
       if(!this.nameError&&(!this.categoryError)&&(!this.imageError)&&(!this.descriptionError))
      { 
      console.log(this.product)
       this.product.sellerId = localStorage.getItem('userId');
      
      this.product.price=this.price
      this.product.quantity=this.quantity
       editsellerproducts({
          success: ({ data }) => {
              console.log(data)
               this.$refs["my-modal"].hide();
              this.$emit("hideModal", false);
             
          },
          error: (e) => {
             
              console.warn(e);
          }
          ,
          payload:this.product
      })
      }
      }
      else{
        this.errorSpanMessage="Please fill all the fields"
      }
    }
  },
};
</script>