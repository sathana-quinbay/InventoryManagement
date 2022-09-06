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
export const isSellerActive = ({success, error})=>{
   const userId = localStorage.getItem('userId');
   var GET_SELLER_API="";
   console.log("get seller ",GET_SELLER_API)
   if(userId)
   {
       GET_SELLER_API = `http://10.30.1.2:8007/seller/isactive/${userId}`
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
export const deleteSellerAccount = ({success, error})=>{
  
    var GET_SELLER_API="";
    const sellerid = localStorage.getItem('userId');
    GET_SELLER_API = `http://10.30.1.2:8007/seller/delete/${sellerid}`
    
    axios.delete(GET_SELLER_API)
         .then(response =>{
            console.log(response)
            success && success(response);
         })
         .catch(err =>{
            console.log(err)
            error && error(err);
        })
}
export const reactivateSellerAccount = ({success, error,payload})=>{
  
    var GET_SELLER_API="";
    GET_SELLER_API = `http://10.30.1.2:8002/admin/seller/reactivate/${payload}`
    
    axios.put(GET_SELLER_API)
         .then(response =>{
            console.log(response)
            success && success(response);
         })
         .catch(err =>{
            console.log(err)
            error && error(err);
        })
}
export const deleteAndCreateSellerAccount = ({success, error,payload})=>{
  
    var GET_SELLER_API="";
    console.log(payload)
    GET_SELLER_API = `http://10.30.1.2:8002/admin/seller/deletePermanent/${payload.emailId}`
    
    axios.delete(GET_SELLER_API,payload)
         .then(response =>{
            console.log(response)
            success && success(response);
         })
         .catch(err =>{
            console.log(err)
            error && error(err);
        })
}