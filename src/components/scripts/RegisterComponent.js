export default {
    name: 'RegisterComponent',
    data(){
        return {
            seller: {
                name: '',
                emailId: '',
                contact: '',
                address: '',
                password: ''

            },
            dismissSecs: 10,
            dismissCountDown: 0,
            checkPassword: '',
            passwordErrorFlag: false,
            nameErrorFlag:false,
            addressErrorFlag:false,
            passwordError:'',
            contactErrorFlag: false,
            confirmPasswordErrorFlag: false,
            emailIdErrorFlag: false,
            isRegisterSuccess: false,
            userMessage:""
        }
    },
    methods:{
        registerNewSeller(){
            this.nameErrorFlag = false;
            this.emailIdErrorFlag=false;
            this.contactErrorFlag=false;
            this.emailIdErrorFlag=false;
          
            this.passwordErrorFlag=false;
            this.confirmPasswordErrorFlag=false;
            this.passwordError='';
            this.addressErrorFlag=false
            if(this.seller.name.length < 5){
                this.nameErrorFlag = true;
                // setInterval(()=>{ this.nameErrorFlag = false; }, 2000);
                return;
            }
           
            console.log(this.seller.emailId)
            if(this.seller.emailId==' '|| this.seller.emailId.includes('@gmail.com') === false){
                this.emailIdErrorFlag = true;
               // setInterval(()=>{ this.emailIdErrorFlag = false; }, 2000);
                return;
            }
            if(this.seller.contact.length !== 10){
                this.contactErrorFlag = true;
                // setInterval(()=>{ this.contactErrorFlag = false; }, 2000);
                return;
            }
            if(this.seller.address.length < 5){
                this.addressErrorFlag = true;
                // setInterval(()=>{ this.nameErrorFlag = false; }, 2000);
                return;
            }
            if(this.seller.password<5)
            {
                this.passwordErrorFlag=true
                this.passwordError="Give strong password"
                return
            }
            if(this.checkPassword != this.seller.password){
  console.log("inside not match")
  console.log(this.checkPassword," ",this.seller.password)
                this.confirmPasswordErrorFlag = true;
                this.passwordError="does not match"
                
                return;
            }
            else{
                console.log("inside match")
                this.confirmPasswordErrorFlag = false;
                this.passwordError=" "
            }
            if(this.seller.emailId.includes('@gmail.com')
                    && this.seller.contact.length === 10 
                    && this.checkPassword === this.seller.password){
                        this.confirmPasswordErrorFlag = false;
                this.passwordError=" "
                this.contactErrorFlag = this.passwordErrorFlag = false;
                this.showAlert()
                
                this.$store.dispatch('REGISTER_NEW_SELLER', {
                    sucess: (response)=>{
                        console.log(response);
                        
                        this.isRegisterSuccess = true;
                        setInterval(()=>{
                            this.isRegisterSuccess = false;
                        }, 3000);
                        this.resetFields();
                    },
                    error: (err)=>{
                        console.warn("New Merchant could not be registered. | " + err);
                    },
                    seller: this.seller
                })
            }
        },
        countDownChanged(c) {
           
            this.dismissCountDown = c;
            if(c==0)
            {
                this.$router.push({path:"/login"})
            }
          },
          showAlert() {
            this.dismissCountDown = this.dismissSecs;
          },
        resetFields(){
            this.seller = {
                name: '',
                emailId: '',
                contact: '',
                address: '',
                password: ''
            };
        }
    }
}