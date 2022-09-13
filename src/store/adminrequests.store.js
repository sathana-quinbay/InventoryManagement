import { requestList } from "@/service/adminrequests.service";
import { postRequestApproval,postRequestDecline} from "@/service/adminrequests.service";
import axios from 'axios'
export default {
    state: {
        requests:[],
        sellerList:90,
    },
    getters: {
        getRequests(state){
            return state.requests;
        },
        getSellerList(state)
        {
            return state.sellerList;
        }
    },
    mutations: {
        setRequests(state, value){
            state.requests = value
        },
        setSellerList(state, value){
            state.sellerList = value
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
        GET_SELLERS()
        {
            axios.get(`http://10.30.1.2:8002/admin/get/requestlist`)
            .then((response)=>{
               console.log("service request success"+response.data.data);
              this.commit('setSellerList',response.data.data)
               this.requests=response.data.data
            })
            .catch((err)=>{
               console.log(err);
            })

        },
        POST_REQUEST(context,payload){
            postRequestApproval({
                success: (response)=>{
                    console.info('Request Approved',response.data);
                    this.commit('setRequests',response.data)
                    axios.get(`http://10.30.1.2:8002/admin/get/requestlist`)
                    .then((res)=>{
                       console.log("service request success"+res.data.data);
                      this.commit('setSellerList',res.data.data)
                       this.requests=res.data.data
                    })
                    .catch((err)=>{
                       console.log(err);
                    })
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
                    this.commit('setRequests',response.data);
                    axios.get(`http://10.30.1.2:8002/admin/get/requestlist`)
                    .then((res)=>{
                       console.log("service request success"+res.data.data);
                      this.commit('setSellerList',res.data.data)
                       this.requests=res.data.data
                    })
                    .catch((err)=>{
                       console.log(err);
                    })
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
