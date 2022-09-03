import { productList } from "@/service/adminProductList";

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
                    console.info('Request Process Success',response.data.data);
                    this.commit('setProducts',response.data.data);
                    // console.log(response);
                   
                },
                error: (err)=>{
                    console.warn('request error' + err);
                },
            })
        },
    } 
}
