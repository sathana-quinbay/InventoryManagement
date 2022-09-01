<template>
  <b-container class="backgroundColor">
    <b-row>
       <b-container-fluid>

          <b-row>
               <b-col cols="12" lg="8" md="8" sm="12">
                <b-row>
                    <b-col cols="12" lg="6" md="6" sm="12">
                        <label class="formLabels">Pokemon Name</label>
                           <b-form-input v-model="product.productName" type="text" ></b-form-input>
                    </b-col>
                    <b-col cols="12" lg="6" md="6" sm="12">
                          <label class="formLabels">Image Url</label>
                          <b-form-input v-model="product.imageUrl" type="text" ></b-form-input>
                    </b-col>
                </b-row>
                  <b-row>
                    <b-col cols="12" lg="6" md="6" sm="12">
                        <label class="formLabels">Selling Price</label>
                         <b-form-input min="0" v-model="product.sellingPrice" type="number" ></b-form-input>
                     </b-col>
                   <b-col cols="12" lg="6" md="6" sm="12">
                         <label class="formLabels">Product Price</label>
                         <b-form-input v-model="product.productPrice" type="number" ></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                       <b-col cols="12" lg="6" md="6" sm="12">
              <label class="formLabels">Quantity</label>
             <b-form-input  type="text" ></b-form-input>
        </b-col>
        <b-col cols="12" lg="6" md="6" sm="12">
              <label class="formLabels">Coupon</label>
             <b-form-input type="text" ></b-form-input>
        </b-col>
                </b-row>
               </b-col>
               <b-col cols="12" lg="4" md="6" sm="12">
                <img width="200px" height="200px" :src="product.imageUrl" alt="" srcset="">
               </b-col>
          </b-row>
       </b-container-fluid>
          </b-row>
          <b-row>
           
         <b-col cols="12" lg="12" md="12" sm="12">
            <label class="formLabels">Descriptions</label>
              <b-form-textarea
      id="textarea"
   
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
        </b-col>
          </b-row>
  </b-container>
             
   
       
       
         

</template>
<style scoped>
.formLabels {
  padding-top: 0%;
}
.backgroundColor {
  background: #f9f9f9;
  padding: 3%;
  border-radius: 20px;
}
</style>
<script src="./scripts/AddProductComponent.js"></script>