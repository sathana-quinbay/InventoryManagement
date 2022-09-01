import axios from "axios"

export const REGISTER_SELLER_API = 'http://10.30.1.2:8002/admin/add/seller'
export const GET_SELLER_BY_ID_API = 'http://10.30.1.2:8002/admin/seller/'

export const registerNewSeller = ({success, error, seller})=>{
   console.log('Registered!!! ' + seller);
    axios.post(REGISTER_SELLER_API, seller)
         .then(response =>{
            console.log(response)
            success && success(response);
         })
         .catch(err =>{
            console.log(err)
            error && error(err);
        })
}

export const getSellerById = ({success, error, userId}) => {
   axios.get(GET_SELLER_BY_ID_API + userId)
         .then((response)=>{
            console.log("Service call for get seller by ID was a success",response);
            success && success(response)
         })
         .catch((err)=>{
            error && error(err);
         })
}