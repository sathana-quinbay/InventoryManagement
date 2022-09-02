import OpenProductComponent from '@/components/OpenProductComponent.vue'
import {sortProduct} from '@/service/SellerProductService'
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
      sortBy:[],
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
    sortData()
    {
    console.log(this.sortBy)
    const sellerid = localStorage.getItem('userId');
    var sortBy=this.sortBy
    sortProduct({
      sellerid,
      sortBy,
      success: ({ data }) => {
          console.log("success")
          console.log(data)
         
      },
      error: (e) => {
         
          console.warn(e);
      }

  })

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