import OpenProductComponent from '@/components/OpenProductComponent.vue'
import {deleteProduct} from '@/service/SellerProductService'
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      clicked: false,
      pname: "",
      modalShow:false,
      
      pprice: 0,
      sprice: 0,
      image: "",
      pro: 0,
      des: "",
    };
  },
 components:{
  OpenProductComponent,
 
 },
  methods: {
    changeflag() {
      this.clicked = true;
    },
    
    update() {
      this.clicked = false;
      if(this.pname || this.des=='' || this.image=='' || this.sprice==0 || this.pprice==0 || this.quantity==0 || this.pro==0)

          alert("Enter all the details");

        else{
      var obj = {
        sellerId: this.product.sellerId,
        productId: this.product.productId,
        productName: this.pname,
        discription: this.des,
        productPrice: this.pprice,
        sellingPrice: this.sprice,
        quantity: this.product.quantity,
        imageUrl: this.image,
        promo: this.pro,
      };
    }

      this.$store.dispatch("putsellerproductstoservice", obj);
    },
    add() {
      var obj = {
        sellerId: this.product.sellerId,
        productId: this.product.productId,
        productName: this.product.productName,
        discription: this.product.discription,
        productPrice: this.product.productPrice,
        sellingPrice: this.product.sellingPrice,
        quantity: this.product.quantity + 1,
        imageUrl: this.product.imageUrl,
        promo: this.product.promo,
      };

      console.log(obj);

      this.$store.dispatch("putsellerproductstoservice", obj);
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
    sub() {
      let obj = {
        sellerId: this.product.sellerId,
        productId: this.product.productId,
        productName: this.product.productName,
        discription: this.product.discription,
        productPrice: this.product.productPrice,
        sellingPrice: this.product.sellingPrice,
        quantity: this.product.quantity - 1,
        imageUrl: this.product.imageUrl,
        promo: this.product.promo,
      };

      this.$store.dispatch("putsellerproductstoservice", obj);

      //   window.location.reload();
    },
  },
};