import axios from "axios"

// const GET_SELLERS_API = 'http://http://localhost:8005//admin/getAllUsers'
const GET_SELLERS_API =    'http://10.30.1.2:8002/admin/seller/getAll'
const DISBALE_SELLER_API = 'http://10.30.1.2:8002/admin/status/'
const SELLER_SEARCH_API =  `http://10.30.1.2:8002/admin/search/`
const SELLER_SORT_API =  `http://10.30.1.2:8002/admin/sort/`
export const getAllSellers = ({success, error})=>{
    axios.get(GET_SELLERS_API)
         .then((response)=>{
            console.log("service call success for sellers"+response);
            success && success(response)
         })
         .catch((err)=>{
            error && error(err)
         })
}

export const disbaleSeller = ({success, error, userId}) =>{
      console.log(userId)
   axios.put(DISBALE_SELLER_API + userId, userId)
         .then((response)=>{
               success && success(response);
         })
         .catch((err)=>{
               error && error(err);
         })
}

export const getSellerFromSearch = ({success, error,payload}) =>{
      console.log("service",payload)
      axios.get(SELLER_SEARCH_API+payload.category+"/"+payload.searchkey)
            .then((response)=>{
                  console.log(response);
                  success && success(response);
                 
            })
            .catch(err =>{
                  error && error(err);
            })
}
export const getSellerFromSort = ({success, error,payload}) =>{
      console.log("service",payload)
      axios.get(SELLER_SORT_API+payload+"/seller")
            .then((response)=>{
                  console.log(response);
                  success && success(response);
                 
            })
            .catch(err =>{
                  error && error(err);
            })
}