import {getSellerDetails,updateSellerDetails} from '../../service/SellerAccountService'
export default{
    name:"SellerAccountComponent",
    data()
    {
    return{
        sellerDetail:[],
        editButton:false,
        seller: {
            name: '',
            emailId: '',
            contact: '',
            address: '',
            password: '',
            userId:'',

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
    mounted()
    {
        console.log("mounted")
        getSellerDetails({
            success: ({ data }) => {
                console.log(data)
                var responseData =data.data
                this.sellerDetail=responseData
                this.seller={...responseData}
               
            },
            error: (e) => {
               
                console.warn(e);
            }
        })
    },
    methods:{
        updateSeller(){
            this.nameErrorFlag = false;
            this.emailIdErrorFlag=false;
            this.contactErrorFlag=false;
            this.emailIdErrorFlag=false;
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
         
            if(this.seller.emailId.includes('@gmail.com')
                    && this.seller.contact.length === 10 ){
                        
                this.contactErrorFlag = this.passwordErrorFlag = false;
               
                const userId = localStorage.getItem('userId');
                this.seller.userId=userId;
                updateSellerDetails({
                    success: ({ data }) => {
                        console.log(data)
                       
                    },
                    error: (e) => {
                       
                        console.warn(e);
                    }
                    ,
                    payload:this.seller
                })
            }
        },
    }
}