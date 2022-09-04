import axios from 'axios'

//10.30.1.2
export const productList= ({success, error})=>{
    axios.get(`http://10.30.1.2:8007/seller/product/all`)
         .then((response)=>{
            console.log("productlist request success");
            success && success(response);
         })
         .catch((err)=>{
            error && error(err);
         })
}
