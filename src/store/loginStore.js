import { attempLogin } from "@/service/LoginService";

export default {
    state: {
        user: {},
        isLoggedIn: false
    },
    getters: {
        getUserDetail(state){
            return state.user;
        },
        getLoginStatus(state){
            return state.isLoggedIn;
        }
    },
    mutations: {
        setUserDetail(state, newUser){
            state.user = newUser || {}
        },
        setUserDetailToLocal(state, newUser){
            state.user = newUser || {}
            localStorage.setItem('user', newUser);
        },
        setLoginStatus(state, status){
            state.isLoggedIn = status;
        }
    },
    actions:{
        // USER_LOGGED_IN({commit}){
        //     this.$commit('setLoginStatus', true);
        // },
        USER_LOG_STATUS(state,value)
        {
            this.commit('setLoginStatus', value);
        },
        ATTEMPT_LOGIN(context, {success, error, user}){
            // console.log(state + " | " + user);
            attempLogin({
                success: (response)=>{
                    console.info('ATTEMP_LOGIN Action success.');
                    // console.log(response);
                    success(response);
                },
                error: (err)=>{
                    console.warn('Something went wrong while loggin in' + err);
                    error(err);
                },
                user
            })
        },
        // LOG_OUT_USER({commit}){
        //     this.$commit('setLoginStatus', false); //logged out.
        // }
    }
}