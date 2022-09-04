import { getsellerdetail } from "@/service/SellerProductService";

export default {
  state: {
    sellerdetails:[],
    uniqueId:''
  },
  getters: {
    getSellerById(state) {
      return state.seller;
    },
    getUniqueSellerId(state)
    {
      return state.uniqueId;
    }
  },

  mutations: {
    setSellerById(state, value) {
      state.seller = value;
    },
    setUniqueSellerId(state,value)
    {
      state.uniqueId=value;
    }
  },

  actions: {
    SELLER_BY_ID(context, sellerid) {
      getsellerdetail({
        sellerid,
        success: (response) => {
          console.log(response.data.data);
         this.commit("setSellerById",response.data.data);
        },
        error: (e) => {
          // this.commit("setSeller", []);
          console.warn(e);
        },
      });
    },
    uniqueSellerId(context,UniqueId)
    {
      this.commit('setUniqueSellerId',UniqueId);
    }
  }}