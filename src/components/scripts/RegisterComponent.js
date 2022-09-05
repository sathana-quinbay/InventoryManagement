import {reactivateSellerAccount, deleteAndCreateSellerAccount} from '@/service/SellerAccountService'
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
            alertMessage:"",
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
        showModal() {
            this.$refs['my-modal'].show()
          },
          hideModal() {
            this.$refs['my-modal'].hide()
          },
          clearForm()
          {
            this.seller= {
                name: '',
                emailId: '',
                contact: '',
                address: '',
                password: ''

            }
            this.checkPassword='';
          },
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
            // if(this.seller.contact.length === 10){
            //     var phoneno = /^\d{10}$/
            //     if((this.seller.contact.match(phoneno)))
            //           {
                        
            //             this.contactErrorFlag = true;
            //           }
            //     this.contactErrorFlag = true;
            //     // setInterval(()=>{ this.contactErrorFlag = false; }, 2000);
            //     return;
            // }
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
                // this.showAlert()
                
                this.$store.dispatch('REGISTER_NEW_SELLER', {
                    success: (response)=>{
                        console.log("sucessregister",response);
                        if(response.data.message=='reactivate')
                        {
                            this.showModal()
                        }
                        else if(response.data.message=='Requested email already exists..')
                        {
                      this.userMessage="Requested email already exists.."
                      this.showAlert()
                        }
                        else{
                            this.userMessage="successfully registered"
                            this.showAlert()
                            this.clearForm()
                        }
                        
                        
                    },
                    error: (err)=>{

                        console.warn("New Merchant could not be registered. | " + err);
                    },
                    seller: this.seller
                })
            }
        },
        reactivate()
        {
            var sellerId=this.seller.emailId;
            this.hideModal()
            reactivateSellerAccount({
                success: (response)=>{
                    
                    this.userMessage="Your old account is reactivated try to login"
                    this.showAlert()
                    console.log(response);
                    this.clearForm()
                    
                //    this.$router.push({path:"/login"})
                },
                error: (err)=>{
                    console.warn(err);
                    this.userMessage="Something went wrong try again after some time"
                    this.showAlert()
                },
                payload:sellerId
               
            })
        },
        deleteAndCreateNew()
        {
             var  seller= this.seller
             this.hideModal()
            deleteAndCreateSellerAccount({
                success: (response)=>{
                    console.log(response);
                    this.userMessage="Created account successfully"
                            this.showAlert()
                            this.clearForm()
                            this.registerNewSeller()
               
                },
                error: (err)=>{
                    this.userMessage="Something went wrong try again aftre some time"
                    this.showAlert()
                    console.warn(err);
                },
                payload:seller
               
            })

        },
        countDownChanged(c) {
           
            this.dismissCountDown = c;
            // if(c==0)
            // {
            //     this.$router.push({path:"/login"})
            // }
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