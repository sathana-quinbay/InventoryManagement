import { mapGetters } from "vuex";

export default {
  name: "SellerInventoryComponent",
  data() {
    return {
      obj: {
        sellerId: "",
        productId: "",
        productName: "",
        discription: "",
        productPrice: "",
        sellingPrice: "",
        quantity: "",
        imageUrl: "",
        promo: "",
      },
    };
  },
  methods: {
    addproduct() {
      if (this.obj.status === false) {
        console.warn("Seller has been disabled by the Admin!");
      }
      if (
        this.obj.productName == "" ||
        this.obj.discription == "" ||
        this.obj.imageUrl == "" ||
        this.obj.sellingPrice == 0 ||
        this.obj.productPrice == 0 ||
        this.obj.quantity == 0 ||
        this.obj.promo == 0
      )
        alert("Enter all the details");
      else {
        this.obj.sellerId = localStorage.getItem("userId");
        this.$store.dispatch("addsellerproductstoservice", this.obj);
      }
    },
    viewProducts() {
      this.$router.push({
        path: "/sellerdashboard/products",
        name: "ProductContainerComponent",
      });
    },
  },

  computed: {
    ...mapGetters({
      sellerobj: "getSeller",
    }),
  },
  // e44f6029-31e3-4138-8fcc-3e1390195477
  created() {
    const sellerId = localStorage.getItem("userId");
    console.log(sellerId)
    this.$store.dispatch(
      "getsellerdetailsFromService",
      sellerId
      // "e44f6029-31e3-4138-8fcc-3e1390195477"
    );
    console.log(this.sellerobj)
  },
};