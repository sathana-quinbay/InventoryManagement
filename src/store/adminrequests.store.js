import { requestList } from "@/service/adminrequests.service";
import { postRequestApproval,postRequestDecline} from "@/service/adminrequests.service";

export default {
    state: {
        requests:[],
    },
    getters: {
        getRequests(state){
            return state.requests;
        },
    },
    mutations: {
        setRequests(state, value){
            state.requests = value
        }
    },
    actions:{
        REQUEST_LIST(){
            // console.log(state + " | " + user);
            requestList({
                success: (response)=>{
                    console.info('Request Process Success',response);
                    this.commit('setRequests',response.data)
                    // console.log(response);
                   
                },
                error: (err)=>{
                    console.warn('request error' + err);
                },
            })
        },
        POST_REQUEST(context,payload){
            postRequestApproval({
                success: (response)=>{
                    console.info('Request Approved',response.data);
                    // console.log(response);
                   
                },
                error: (err)=>{
                    console.warn('request approval error' + err);
                },
                payload
            })
        },
        DECLINE_REQUEST(context,payload)
        {
            postRequestDecline({
                success: (response)=>{
                    console.info('Request Approved',response.data);
                    // console.log(response);
                   
                },
                error: (err)=>{
                    console.warn('request approval error' + err);
                },
                payload
            })
        }
    } 
}
