import { requestList } from "@/service/adminrequests.service";

export default {
    state: {
        products:[],
    },
    getters: {
        getProducts(state){
            return state.products;
        },
    },
    mutations: {
        setProducts(state, value){
            state.products = value
        }
    },
    actions:{
        PRODUCT_LIST(){
            // console.log(state + " | " + user);
            productList({
                success: (response)=>{
                    console.info('Request Process Success',response);
                    this.commit('setProducts',response.data)
                    // console.log(response);
                   
                },
                error: (err)=>{
                    console.warn('request error' + err);
                },
            })
        },
    } 
}
