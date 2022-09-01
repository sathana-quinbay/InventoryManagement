import {registerNewSeller, getSellerById} from '@/service/RegisterSellerService'
import  {getAllSellers,disbaleSeller,getSellerFromSearch,getSellerFromSort} from '@/service/AdminService';

export default {
    state: {
        sellers: [],
        sellerId: localStorage.getItem('userId') || null,
    },
    getters:{
        getSellers(state){
            return state.sellers;
        },
        getSellerId(state){
            return state.sellerId;
        },
        getSpecificSeller(state, userId){
            let i = 0;
            while(i< state.sellers.length){
                if(state.sellers[i].userId == userId)
                    return state.sellers[i];
            }
            return [];
            // return state.sellers[];    
        }
    },
    mutations:{
        setSellerId(state, newSellerId){
            state.sellerId = newSellerId;
        },
        setSellers(state,newSellers){
            state.sellers = newSellers;
        },
        addNewSeller(state, newSeller){
            state.sellers.push(newSeller);
        }
    },
    actions:{
        REGISTER_NEW_SELLER({commit}, {success, error, seller}){
            registerNewSeller({
                success: (response)=>{
                    commit('addNewSeller', seller);
                    success && success(response);
                },
                error: (err)=>{
                    error && error(err);
                },
                seller
            })
        },
        GET_ALL_SELLERS({commit}){
            getAllSellers({
                success: (response)=>{
                    commit('setSellers', response.data.data);
                    console.log(response.data.data);
                },
                error: (err)=>{
                    commit('setSellers', []);
                    console.warn('No sellers could be fetched from SELLERS API ' + err);
                }
            })
        },
        DISABLE_SELLER({dispatch}, userId){
            disbaleSeller({
                success: (response)=>{
                    console.log(response);
                    console.warn(`Seller: ${userId} is now disabled from the portal`);
                    dispatch('GET_ALL_SELLERS', {
                        success: ()=>{},
                        error: ()=>{}
                    });
                
                },
                error: (err)=>{
                    console.warn(err);
                },
                userId
            })
        },
        GET_SELLER_BY_ID(context, {success, error, userId}){
            getSellerById({
                success: (response)=>{
                    success && success(response);
                },
                error: (err)=>{
                    error && error(err);
                },
                userId
            })
        },
        GET_SELLER_FROM_SEARCH(state,payload){
            getSellerFromSearch({
                success: (response)=>{
                    this.commit('setSellers', response.data.data);
                },
                error: (err)=>{
                    console.warn(err);
                },
                payload
            })
        },
        GET_SELLER_FROM_SORT(state,payload){
            getSellerFromSort({
                success: (response)=>{
                    console.log("store response initiated for sort");
                    this.commit('setSellers', response.data.data);
                },
                error: (err)=>{
                    console.warn(err);
                },
                payload
            })
        }
    }
}