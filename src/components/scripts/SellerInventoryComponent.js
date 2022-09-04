import { mapGetters } from "vuex";

export default {
   name: "SellerInventoryComponent",
  data() {
    return {
  }
},
  methods: {
    viewProducts() {
      this.$router.push({
        path: "/sellerdashboard/products",
        // name: "ProductContainerComponent",
      });
    },
  },
  created()
  {
    this.$store.dispatch('SELLER_BY_ID',this.$store.state.specificSellerStore.uniqueId);
    console.log("create dispatch success");
  },
  computed:{
    ...mapGetters({
      Seller:'getSellerById',
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