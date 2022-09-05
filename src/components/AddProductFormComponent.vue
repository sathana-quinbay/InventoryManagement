<template>
  <div class="main-body">
    <b-alert class="alertMessageText" :show="dismissCountDown"
             dismissible
            
             variant="warning"
             @dismiss-count-down="countDownChanged">
       {{userMessage}} <span class="seconds">{{dismissCountDown}} seconds...</span>
    </b-alert>
    <div class="page-headers">
      <h4>Product Add</h4>
      <h6>Create new product</h6>
       <b-container-fluid>
        <b-row>
          <b-col cols="12" lg="8" md="6" sm="6"></b-col>
           <b-col cols="12" lg="4" md="6" sm="6"></b-col>
        </b-row>
      </b-container-fluid>
    </div>
    
    <div class="main-body-container">
      <b-row>
        <b-container-fluid>
          <b-row>
            <b-col cols="12" lg="8" md="8" sm="12">
              <b-row>
                <b-col cols="12" lg="4" md="6" sm="12">
                  <label class="formLabels">Product Name</label>

                  <b-form-input
                    v-model="product.productName"
                    type="text"
                  ></b-form-input>
                </b-col>
                <b-col cols="12" lg="4" md="6" sm="12">
                  <label class="formLabels">Product Price</label>
                  <b-form-input
                
                    v-model="price"
                    type="number"

                  ></b-form-input>
                </b-col>
                <b-col cols="12" lg="4" md="6" sm="12">
                  <label class="formLabels">Quantity</label>
                  <b-form-input

                    v-model="quantity"
                    type="text"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" lg="4" md="6" sm="12">
                  <label class="formLabels">Category</label>
                  <b-form-input
                    v-model="product.category"
                    type="text"
                  ></b-form-input>
                </b-col>
                <b-col cols="12" lg="4" md="6" sm="12">
                  <label class="formLabels">Image Url</label>
                  <b-form-input
                    v-model="product.imageUrl"
                    type="text"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-col>

            <b-col cols="12" lg="4" md="6" sm="12">
              <img
              class="imgFound"
                width="150px"
                height="150px"
                :src="product.imageUrl"
                alt="Image not found"
                srcset=""
              />
            </b-col>
          </b-row>
        </b-container-fluid>
      </b-row>
      <b-row>
        <b-col cols="12" lg="12" md="12" sm="12">
          <label class="formLabels">Descriptions</label>
          <b-form-textarea
            id="textarea"
            v-model="product.description"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
        <b-col class="submit-button-product">
          <button class="download_csv" @click="addProduct">Submit</button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { postsellerproducts } from "@/service/SellerProductService";
export default {
  name: "AddProductComponent",
  data() {
    return {
          dismissSecs: 10,
          dismissCountDown: 0,
          userMessage:"",
      product: {
        productName: "",
        productPrice: 0,
        description: "",
        category: "",
        price:0,
        sellerId: "",
        quantity: 0,
        coupon: "",
        imageUrl: "https://campiazza-media.s3.amazonaws.com/unknown.png",
        sellingPrice: "",
      },
       price:0,
       quantity:0,
      selectedFiles: undefined,
    };
  },
 watch:{
  price()
  {
      if(this.price<0)
      {
         this.price=0
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
  
  methods: {
    addProduct() {
      this.product.sellerId = localStorage.getItem("userId");
      this.product.price=this.price,
      this.product.quantity=this.quantity
      postsellerproducts({
        success: ({ data }) => {
          console.log(data);
          this.showAlert()
          this.userMessage="Product Added Sucessfuly"
           this.product={
        productName: "",
        productPrice: "",
        description: "",
        category: "",
        sellerId: "",
        quantity: "",
        coupon: "",
        imageUrl: "https://campiazza-media.s3.amazonaws.com/unknown.png",
        sellingPrice: "",
      }
      this.price=0;
      this.quantity=0;
        },
        error: (e) => {
          console.warn(e);
          this.showAlert()
          this.userMessage="Something went wrong"
        },
        payload: this.product,
      });
    },
    selectFile() {
      this.selectedFiles = event.target.files[0];
    },
     countDownChanged(c) {
           
        this.dismissCountDown = c;
        if(c==0)
        {
            this.userMessage=""
        }
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs;
      },
    uploadFile() {
      console.log("file upload");
      console.log(this.selectedFiles);
      var sellerId = localStorage.getItem("userId");
      let formData = new FormData();
      formData.append("file", this.selectedFiles);

      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      this.$store.dispatch("uploadFile", { formData, sellerId });
    },
  },
};
</script>
<style scoped>
.main-body-container {
  margin: 0 0 25px;
 
  border: 1px solid #e8ebed;
  border-radius: 6px;
  background: white;
  padding: 20px;
}
.imgFound
{
  max-width: 200px;
  max-height: 200px;
}
.seconds
{
    display: none;
}
.alertMessageText
{
    text-align: center;
}
.main-body {
  padding: 1% 2%;
  background: #fafbfe;
  padding: 1%;
  text-align: left;
   height: 100vh;
  font-family: sans-serif;
}
.addProduct {
  margin: 1% 2%;
  text-align: left;
}
.download_csv {
  min-width: 120px;
  background: #ff9f43;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  padding: 14px 10px;
 
}
.submit-button-product
{
    margin-top: 2%;
}
.download_csv:hover {
  background: #ff8e25;
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

