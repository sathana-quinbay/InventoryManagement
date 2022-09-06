<template>
  <div class="main-body">
    <div class="page-headers">
      <h4>Profile</h4>
      <h6>User Profile</h6>
    </div>
     <b-modal ref="my-modal" hide-footer title="Your account will be Deleted">
      <div class="d-block text-center">
        <p>Are you sure to continue?</p>
      </div>
      <div class="button-group">
 <b-button class="mt-3 reactivate-button" variant="outline-primary" block @click="deleteAccount">Yes</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">No</b-button>
     
      </div>
      
    </b-modal>
    <div class="main-card">
      <div class="heading-bg"></div>
      <b-container-fluid>
        <b-row class="profileMain">
          <b-col>
            <img class="profileImg" src="../assets/man.jpeg" alt="" />
          </b-col>
          <b-col>
            <h4 class="profileContent">Update Your Personal Details</h4>
          </b-col>
        </b-row>
        <b-row class="userProfile">
          <b-col cols="12" lg="6" md="12" sm="12">
            <label class="formLabels">
              Full name
              <span class="error">{{
                nameErrorFlag ? "Required more than 5 characters" : " "
              }}</span></label
            >
            <br />
            <br />
            <input
              :class="nameErrorFlag ? 'errorInput' : ' '"
              type="text"
              v-model="seller.name"
            />
          </b-col>
          <b-col cols="12" lg="6" md="12" sm="12">
            <label class="formLabels">
              Contact
              <span class="error">{{
                contactErrorFlag ? "Invalid number" : " "
              }}</span></label
            >
            <br />
            <input
              type="text"
              :class="contactErrorFlag ? 'errorInput' : ' '"
              v-model="seller.contact"
            />
          </b-col>
          <b-col cols="12" lg="12" md="12" sm="12">
            <label class="formLabels"
              >Address
              <span class="error">{{
                addressErrorFlag ? "Invalid address" : " "
              }}</span>
            </label>
            <br />
            <b-form-textarea
              id="textarea"
              placeholder="Address Line"
              v-model="seller.address"
              :class="addressErrorFlag ? 'errorInput' : ' '"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-col>
           <b-alert :show="dismissCountDown"
             dismissible
             class="alertMessage"
             variant="warning"
             @dismiss-count-down="countDownChanged">
       {{userMessage}} <span class="seconds">{{dismissCountDown}} seconds...</span>
    </b-alert>
          <div class="updateSellerStyle">
            <button id="DeleteAccount" @click="showModal">Delete my account</button>
            <button class="register-seller-btn" @click="updateSeller">
              Update
            </button>
            
          </div>
        </b-row>
      </b-container-fluid>
    </div>
  </div>
</template>
<style scoped>
.button-group
{
  display: flex;
  justify-content: space-evenly;
  
}
.button-group button{
width:100px ;
}
.error
{
  color: red;
}
.errorInput{
  border: 1px solid red;
}
.alertMessage
{
  margin:2%;
  width: 95%;
}
.seconds{
  display: none;
}

.updateSellerStyle button
{

  margin-top:3%;
  min-width: 120px;
    float: right;
  background: #ff9f43;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  padding: 14px 10px;
}
#DeleteAccount{
  margin-left: 3%;
  background: #1b2850;
  color: white;
}
.userProfile input,.userProfile textarea {
  width: 100%;
  border: 1px solid rgba(145, 158, 171, 0.32);
  height: 40px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #637381;
  padding: 10px 15px;
  border-radius: 5px;
}
.profileContent {
  color: white;
  text-align: right;
  padding-right: 20px;
}
.profileMain {
  margin-top: -4%;
}
.heading-bg {
  height: 109px;
  background: linear-gradient(90deg, #ea5455 0%, #ff9f43 100%);
}
.profileImg {
  border-radius: 70%;
  height: 150px;
  width: 150px;
  margin-left: 1%;
}
.main-body {
  padding: 1% 2%;
  background: #fafbfe;
  padding: 1%;
  text-align: left;
  height: 100vh;
  font-family: sans-serif;
}
.main-card {
  margin: 0 0 25px;

  border: 1px solid #e8ebed;
  border-radius: 6px;
  background: white;
  padding: 20px;
}
.page-headers h4 {
  font-weight: 700;
  color: #212b36;

  font-size: 18px;
}
@media screen and (max-width:700px) {
  .profileMain{
    margin-top: -15%;
}
  
}
</style>
<script>
import {getSellerDetails,updateSellerDetails,deleteSellerAccount} from '../service/SellerAccountService'
import logOut from '@/mixins/logout'
export default {
    name:"SettingComponent",
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
    mixins:[logOut],
   methods:{
     deleteAccount()
    {
        deleteSellerAccount({
            success: ({ data }) => {
                console.log(data)
               
                this.logOut()
            },
            error: (e) => {
               
                console.warn(e);
            }
        })
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
          showModal() {
            this.$refs['my-modal'].show()
          },
          hideModal() {
            this.$refs['my-modal'].hide()
          },
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
            // if(this.seller.contact.length === 10){
            //     var phoneno = /^\d{10}$/
            //     if((!this.seller.contact.match(phoneno)))
            //           {
                        
            //             this.contactErrorFlag = true;
            //           }
               
            //     // setInterval(()=>{ this.contactErrorFlag = false; }, 2000);
            //     return;
            // }
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
                        this.showAlert()
                        this.userMessage="Updated Successfully"
                       
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
</script>


