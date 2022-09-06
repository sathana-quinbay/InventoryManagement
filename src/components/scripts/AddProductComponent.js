import {postsellerproducts} from '@/service/SellerProductService'
export default {
    name:"AddProductComponent",
    data()
    {
       return {
        product:{
      productName:"",
      productPrice:"",
      description:"",
       category:"",
       sellerId:"",
       quantity:"",
       coupon:"",
       imageUrl:"https://campiazza-media.s3.amazonaws.com/unknown.png",
       sellingPrice:"",
       },
       
       selectedFiles: undefined,
       }
    },
    methods:{
      addProduct()
      {
        this.product.sellerId = localStorage.getItem('userId');
        
        postsellerproducts({
          success: ({ data }) => {
              console.log(data)
             
          },
          error: (e) => {
             
              console.warn(e);
          }
          ,
          payload:this.product
      })
      },
      selectFile() {
        this.selectedFiles = event.target.files[0];
      },
      uploadFile()
      {
        console.log("file upload")
        console.log(this.selectedFiles)
        var sellerId=localStorage.getItem('userId');
          let formData = new FormData();
          formData.append("file",this.selectedFiles);
        
          for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
          }
          this.$store.dispatch('uploadFile',{formData,sellerId})
      }
    }
}