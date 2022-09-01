import { getsellerdetail } from "@/service/SellerProductService";

export default {
  state: {
    seller: {
        "emailId":"John12345@gmail.com",
        "role":"seller",
        "name":"John ",
        "userId":"5cfc6177-7dfe-4a52-a8f5-d5c3e038ef4",
        "status":true,
        "address":"97",
        "contact":"7676978776",
        "password":"helohjhihvanama"
   
    },
  },

  getters: {
    getSeller(state) {
      return state.seller;
    },
  },

  mutations: {
    setSeller(state, value) {
      state.seller = value;
    },
  },

  actions: {
    getsellerdetailsFromService(context, sellerid) {
      getsellerdetail({
        sellerid,
        success: (data) => {
          console.log(data);
          // this.commit("setSeller", data);
        },
        error: (e) => {
          // this.commit("setSeller", []);
          console.warn(e);
        },
      });
    },
  }}