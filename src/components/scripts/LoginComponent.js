import { mapGetters } from "vuex";
export default{
    name: 'LoginComponent',
    mounted()
    {
        console.log(this.$route.params)
    },
    data(){
        return {
            dismissSecs: 10,
            dismissCountDown: 0,
            user : {
                emailId: '',
                password: '',
            },
            error:{
                errorStatus:false,
                errorMessage:"",
            },
            errorFlag: {
                passwordErrorFlag: false,
                usernameErrorFlag: false,  
            },
            loginButtonClass: 'login-button',
            resetButtonClass: 'reset-button',
            userMessage:"",
           
        }
    },
    computed:{
        ...mapGetters({
            isloggedIn: 'getLoginStatus'
        })
    },
    methods: {
        validateCredentials(){
            this.error.errorStatus=false;
            this.errorFlag.usernameErrorFlag=false
            this.error.errorMessage=" "
            this.errorFlag.passwordErrorFlag=false
            
            if(this.user.emailId=='')
            {
                this.error.errorStatus=true;
                this.error.errorMessage="Please Enter EmailId"
                this.errorFlag.usernameErrorFlag=true
            }else
            if(this.user.password=='')
            {
                this.error.errorStatus=true;
                this.error.errorMessage="Please Enter Password"
                this.errorFlag.passwordErrorFlag=true
            }
            else{
                
                this.$store.dispatch('ATTEMPT_LOGIN', {
               
                    success: (response)=>{
                        console.log("inside success")
                        
                        this.$store.dispatch('USER_LOG_STATUS',true)
                        //this.isloggedIn = true;
                        console.log(response);
                        if(response.data.httpStatusCode==409)
                        {
                            this.showAlert()
                            this.userMessage=response.data.message
                            this.error.errorStatus=false;
                           this.errorFlag.usernameErrorFlag = this.errorFlag.passwordErrorFlag = false;
                            this.error.errorMessage=""
                        }
                        else
                        if(response.data.httpStatusCode==401)
                        {
                            this.error.errorStatus=true;
                            this.errorFlag.passwordErrorFlag = true;
                            this.errorFlag.usernameErrorFlag = false;
                            this.error.errorMessage="Password is wrong"
                        }
                        else if(response.data.httpStatusCode==404)
                        {
                            this.error.errorStatus=true;
                            this.errorFlag.usernameErrorFlag = this.errorFlag.passwordErrorFlag = true;
                            this.error.errorMessage="Invalid user name or password"
                        }
                        else if(response.data.httpStatusCode==200)
                        {
                            this.error.errorStatus=false;
                           this.errorFlag.usernameErrorFlag = this.errorFlag.passwordErrorFlag = false;
                            this.error.errorMessage=""
                     
                        localStorage.setItem('role', response.data.data.role);
                        localStorage.setItem('userId', response.data.data.userId);
                        if( response.data.data.role=='admin')
                        { this.$router.push({path: '/admin/dashboard'});
    
                        }
                        else if( response.data.data.role=='seller')
                        { this.$router.push({path: '/seller/dashboard'});
    
                        }
                        }
                    },
                    error: (err)=>{
                        console.log("inside error",err)
                        // console.log(err)
                        // console.warn(err);
                        // this.isloggedIn = false;
                        this.$store.dispatch('USER_LOG_STATUS',false)
                        this.error.errorStatus=true;
                        this.error.errorMessage=err.message;
                    },
                    user: this.user
                });  
            }
                     
        },
        resetCredentials(){
            this.user.emailId = "";
            this.user.password = "";
        },
        countDownChanged(c) {
           
            this.dismissCountDown = c;
            if(c==0)
            {
                this.userMessage=""
            }
          },
          showAlert() {
            this.dismissCountDown = this.dismissSecs;
          },
    }
}


/*
OLD validateCredentials:
            // if(this.user.emailId && this.user.username === "admin" && this.user.password === "admin"){
            //     this.loginMessage = "Logged in as " + this.user.username
            //     this.isloggedIn = true;

            //     setTimeout(()=>{
            //         this.isloggedIn = false; //revert back after 1.5second.
            //     }, 1500);
            //     this.errorFlag.usernameErrorFlag = false;
            //     this.errorFlag.passwordErrorFlag = false;
            //     this.user.username = this.user.password = ""; //clear form field
            //     this.$router.push({path: '/admindashboard'});
               
            // }else if(this.user.username !== "admin" && this.user.password !== "admin"){
            //     this.isloggedIn = false;
            //     this.errorFlag.usernameErrorFlag = this.errorFlag.passwordErrorFlag = true;
            // }else if(this.user.password !== "admin"){
            //     this.isloggedIn = false;
            //     this.errorFlag.passwordErrorFlag = true;
            // }else{
            //     this.isloggedIn = false;
            //     this.errorFlag.usernameErrorFlag = true;
            // }

*/ 
