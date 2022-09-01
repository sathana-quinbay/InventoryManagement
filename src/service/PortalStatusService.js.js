
import axios from "axios"

export const PORTAL_API = 'http://10.30.1.2:8002/isAlive'
export const getStatus = ({success, error})=>{
   console.log('inside status');
    axios.get(PORTAL_API)
         .then(response =>{
            success && success(response);
         })
         .catch(err =>{
            error && error(err);
        })
}