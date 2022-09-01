import axios from "axios"

export const LOGIN_API = 'http://10.30.1.2:8002/login'
export const attempLogin = ({success, error, user})=>{
    console.log(user.emailId + " | " + user.password);
    axios.post(LOGIN_API, user)
         .then(response =>{
            console.log("inside service success",response)
            // if(response.data.role === undefined || response.data.role === null)
            //     throw new Error('Invalid Login credential, No role assigned');
            console.log('Login Success!')
            console.log(response);  
           
            success && success(response);
         })
         .catch(err =>{
            console.log("inside service error",err)
            error && error(err);
         })
}