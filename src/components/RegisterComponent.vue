<template>
<b-container class="main-container">
  <div>
   
    <b-modal ref="my-modal" hide-footer title="Your account is Deleted">
      <div class="d-block text-center">
        <p>Reactive your old account and get your data back or delete old account and continue with new with same emailId</p>
      </div>
      <div class="button-group">
 <b-button class="mt-3 reactivate-button" variant="outline-primary" block @click="reactivate">Reactive</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="deleteAndCreateNew">Create New</b-button>
     
      </div>
      
    </b-modal>
  </div>
     <div>
    <b-alert :show="dismissCountDown"
             dismissible
             variant="warning"
             @dismiss-count-down="countDownChanged">
      {{userMessage}} <span class="seconds"></span>
    </b-alert>
    
   
  </div>
    <b-row class="main-container-row">
       <b-col class="main-container-img" cols="12" lg="6" md="12" sm="12">
        <h1>Inventory Management</h1>
        <img src="../assets/login-img.svg" alt="img" srcset="">
       </b-col>
        <b-col cols="12" lg="6" md="12" sm="12" class="main-card">
             <div class="card">
 
          <form class="create-seller-form" @submit.prevent="">
          <b-container>
            <b-row>
                <b-col cols="12" lg="12" md="12" sm="12">
                  <label class="formLabels"> Full name  <span class="error">{{(nameErrorFlag)? 'Required more than 5 characters' : ' '}}</span></label>
                       <br> <input :class="nameErrorFlag?'errorInput':' '" type="text"  v-model="seller.name"/>
                        
                </b-col>
               
            </b-row>
             <b-row>
                <b-col cols="12" lg="6" md="12" sm="12">
                   <label class="formLabels"> Email  <span class="error">{{(emailIdErrorFlag)? 'Invalid Email' : ' '}}</span></label>
                       <br> <input type="email" :class="emailIdErrorFlag?'errorInput':' '"   v-model="seller.emailId" />
         
                </b-col>
                <b-col cols="12" lg="6" md="12" sm="12">
                  <label class="formLabels"> Contact  <span class="error">{{(contactErrorFlag)? 'Invalid number' : ' '}}</span></label>
                       <br> <input type="text" :class="contactErrorFlag?'errorInput':' '" v-model="seller.contact"/>
         
                </b-col>
            </b-row>
              <b-row>
              <b-col cols="12" lg="12" md="12" sm="12">
                  <label class="formLabels">Address <span class="error">{{(addressErrorFlag)? 'Invalid address' : ' '}}</span> </label>
               <br>
          <b-form-textarea
      id="textarea"
    placeholder="Address Line"
     v-model="seller.address"
     :class="addressErrorFlag?'errorInput':' '"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
               </b-col>
            </b-row>
             <b-row>
                <b-col cols="12" lg="6" md="12" sm="12">
                  <label class="formLabels">Password  </label>
                  
                  <br> <input :class="passwordErrorFlag?'errorInput':' '" type="password" v-model="seller.password"/>
         
                         
                </b-col>
                <b-col cols="12" lg="6" md="12" sm="12">
                  <label class="formLabels"> Confirm Password  </label>
                  <br> <input :class="confirmPasswordErrorFlag?'errorInput':' '"  type="password"   v-model="checkPassword"/>

                       
                </b-col>
                <b-col>
                  <span class="error">{{passwordError}}</span>
                </b-col>
            </b-row>
            <b-row>
               <div class="register-seller">
            <button class="register-seller-btn" @click="registerNewSeller()">Register Now</button>
            <p class="account">Already have account ? <router-link to="/login">Login</router-link></p>
          </div>
            </b-row>
         
          </b-container>
         
       
         
         
        </form>
</div>

        </b-col>
    </b-row>
</b-container>

</template>
<style scoped>
.account{
  margin-top:3%;
}
input{
  width:100%;
      border-color: #f0f0f0;
    background-color:#ffffff;
  
    font-size: 16px;

    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

}
.formLabels {
  padding-top: 0%;
}
.main-container-row
{

 margin-top:10%;
}
.main-card
{

  
    display:  flex;text-align: center;
    align-items: center;
    justify-content: center;
}
.main-container-img{
  margin-top:4%;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  
}
.button-group
{
  display: flex;
  justify-content: space-evenly;
}
.seconds
{
  color: #fff3cd;
}
.error
{
  color: red;
  font-size: 2vh;
  font-weight: 300;
}
.errorInput{
  border: 1px solid red;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.register-seller{
  margin-top:5%;
  margin-bottom: 5%;
  
}
.reactivate-button
{
  color: #1b2850;
  border: 2px solid #1b2850;
background-color: white;
}
.reactivate-button:hover
{
 background: #1b2850;
 border-color: #1b2850;
color: white;
}
.register-seller-btn{
background: #1b2850;
color: white;
border-radius: 10px;
padding: 2%;
}
.container {
  padding: 2px 16px;

}
.main-container{
  height: 100vh;
  width:100vw ;
}
@media screen and (max-width:1000px) {
  .main-container-img{
    display: none;
  }
  
}

</style>
<script src="./scripts/RegisterComponent.js">

</script>