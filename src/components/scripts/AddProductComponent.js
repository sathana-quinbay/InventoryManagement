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
      }
    }
}