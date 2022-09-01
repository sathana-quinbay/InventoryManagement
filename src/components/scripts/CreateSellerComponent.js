export default {
    name: 'CreateSellerComponent',
    data(){
        return {
            seller: {
                name: '',
                emailId: '',
                contact: '',
                address: '',
                password: ''
            },
            checkPassword: '',
            passwordErrorFlag: false,
            contactErrorFlag: false,
            emailIdErrorFlag: false,
            isRegisterSuccess: false
        }
    },
    methods:{
        registerNewSeller(){
            if(this.seller.emailId.includes('@gmail.com') === false){
                this.emailIdErrorFlag = true;
                setInterval(()=>{ this.emailIdErrorFlag = false; }, 2000);
                return;
            }
            if(this.seller.contact.length !== 10){
                this.contactErrorFlag = true;
                setInterval(()=>{ this.contactErrorFlag = false; }, 2000);
                return;
            }
            if(this.checkPassword !== this.seller.password){
                this.passwordErrorFlag = true;
                setInterval(()=>{ this.passwordErrorFlag = false; }, 2000);
                return;
            }else if(this.seller.emailId.includes('@gmail.com') 
                    && this.seller.contact.length === 10 
                    && this.checkPassword === this.seller.password){
                        
                this.contactErrorFlag = this.passwordErrorFlag = false;
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