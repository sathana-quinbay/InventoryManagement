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
};