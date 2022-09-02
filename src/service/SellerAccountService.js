import axios from "axios"



export const getSellerDetails = ({success, error})=>{
    const userId = localStorage.getItem('userId');
    var GET_SELLER_API="";
    console.log("get seller ",GET_SELLER_API)
    if(userId)
    {
        GET_SELLER_API = `http://10.30.1.2:8007/seller/get/${userId}`
    }
  
    axios.get(GET_SELLER_API)
         .then(response =>{
            console.log(response)
            success && success(response);
         })
         .catch(err =>{
            console.log(err)
            error && error(err);
        })
}
export const updateSellerDetails = ({success, error,payload})=>{
  
    var GET_SELLER_API="";
    console.log("update seller ",GET_SELLER_API)
    console.log(payload)
    
        GET_SELLER_API = `http://10.30.1.2:8007/seller/edit`
    
    axios.put(GET_SELLER_API,payload)
         .then(response =>{
            console.log(response)
            success && success(response);
         })
         .catch(err =>{
            console.log(err)
            error && error(err);
        })
}
