import {uniqueProductList, productList } from "@/service/adminProductList";

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
        UNIQUE_PRODUCT_LIST(context,payload){
            // console.log(state + " | " + user);
            uniqueProductList({
                success: (response)=>{
                    console.info('Unique Products Process Success',response.data.data);
                    this.commit('setProducts',response.data.data);
                    // console.log(response);
                   
                },
                error: (err)=>{
                    console.warn('unique productlist request error' + err);
                },
                payload
            })
        },
    } 
}
