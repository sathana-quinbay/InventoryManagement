import axios from 'axios'
export const requestList= ({success, error})=>{
    axios.get(`http://10.30.1.2:8002/admin/get/requestlist`)
         .then((response)=>{
            console.log("service request success");
            success && success(response);
         })
         .catch((err)=>{
            error && error(err);
         })
}
export const postRequestApproval= ({success, error,payload})=>{
   console.log("postRequests"+payload);
   axios.put(`http://10.30.1.2:8002/admin/request/approve/`+payload)
        .then((response)=>{
           console.log("service request success");
           success && success(response);
        })
        .catch((err)=>{
           error && error(err);
        })
}