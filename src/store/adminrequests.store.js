import { filterBy } from "@/service/adminrequests.service";

export default {
    state: {
        filterby: {},
    },
    getters: {
        getfilter(state){
            return state.filterby;
        },
    },
    mutations: {
        setfilter(state, value){
            state.filterby = value
        }
    },
    actions:{
        FILTER_BY(context, {success, error, filter}){
            // console.log(state + " | " + user);
            filterBy({
                success: (response)=>{
                    console.info('Filter Process Success');
                    // console.log(response);
                    success(response);
                },
                error: (err)=>{
                    console.warn('Something went wrong in filtering' + err);
                    error(err);
                },
                filter
            })
        },
    } 
}
