export default{
   methods:{
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
        console.log("NAme check proop")
      this.nameError=true
       this.nameSpanError=''
        if(!(this.product.productName[0]>='a'&&this.product.productName[0]<='z')&&(!(this.product.productName[0]>='A'&&this.product.productName[0]<='Z')))
       this.nameSpanError="Must start with alphabet"
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
      //  if (this.seller.password.search(/[^A-Za-z0-9]/) > 0) {
      //      this.nameSpanError='must not contain special characters'
      //   }
      else if (!categoryRegx.test(this.product.category)){

         this.categorySpanError="Must contain Alphabets only"
      
      }
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
   }
}