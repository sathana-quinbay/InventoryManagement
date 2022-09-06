import {registerNewSeller, getSellerById} from '@/service/RegisterSellerService'
import  {getAllSellers,disbaleSeller,getSellerFromSearch,getSellerFromSort} from '@/service/AdminService';

export default {
    state: {
        sellers: [],
        active:0,
        inactive:0,
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
            while(i<state.sellers.length){
                if(state.sellers[i].userId == userId)
                    return state.sellers[i];
            }
            return [];
            // return state.sellers[];    
        },
        getActiveCount(state)
        {
            return state.active;
        },
        getInactiveCount(state)
        {
            return state.inactive;
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
        },
        setCount(state,active)
        {
            state.active=active;
        },
        setC(state,inactive)
        {
            state.inactive=inactive;
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
                    let value=response.data.data;
                    let a=0,d=0;
                    let sdata=[];
                    let resp=response;
                    for(let i=0;i<value.length;i++)
                    {
                        if(value[i].status=="enabled")
                        {
                            a++;
                        }
                        if(value[i].status=="disabled")
                        {
                            d++;
                        }
                    }
                    for(let i=0;i<(resp.data.data).length;i++)
                         {
                         if(resp.data.data[i].status!="waiting for approval"&&resp.data.data[i].status!="deleted")
                             {
                                 sdata.push(resp.data.data[i]);
                             }
                         }
                         commit('setSellers',sdata);
                        //  console.log("filtered"+sdata);
                        //  console.log(response.data.data);
                    console.log(a,d);
                    commit('setCount',a);
                    commit('setC',d);
                    // commit('setSellers',response.data.data);
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
                    this.commit('setSellers',response.data.data);
                    console.log(userId);
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
                    let resp=response;
                    // let sdata=[]
                    if(resp.data.data==null)
                    {
                       this.commit("setSellers",[])
                    }
                    else
                    {
                        // for(let i=0;i<(resp.data.data).length;i++)
                        // {
                        //     if(resp.data.data[i].status!="waiting for approval")
                        //     {
                        //         sdata.push(resp.data[i]);
                        //     }
                        // }
                        // this.commit('setSellers',sdata);
                        this.commit('setSellers',response.data.data);
    
                    }
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
                    let resp=response.data.data;
                    let sdata=[]
                    for(let i=0;i<resp.length;i++)
                    {
                        if(resp[i].status!="waiting for approval")
                        {
                            sdata.push(resp[i]);
                        }
                    }
                    this.commit('setSellers',sdata);
                },
                error: (err)=>{
                    console.warn(err);
                },
                payload
            })
        }
    }
}