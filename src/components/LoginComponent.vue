<template>
<b-container class="main-container">
     <div>
    <b-alert :show="dismissCountDown"
             dismissible
             variant="warning"
             @dismiss-count-down="countDownChanged">
       {{userMessage}} <span class="seconds">{{dismissCountDown}} seconds...</span>
    </b-alert>
    
   
  </div>
    <b-row class="main-container-row">
       <b-col class="main-container-img" cols="12" lg="6" md="12" sm="12">
        <h2>Inventory Management</h2>
        <img src="../assets/login-img.svg" alt="img" srcset="">
       </b-col>
        <b-col cols="12" lg="6" md="12" sm="12" class="main-card">
             <div class="card">
 
          <form class="create-seller-form" @submit.prevent="">
        
          <b-container>
             
            <b-row>
                <b-col cols="12" lg="12" md="12" sm="12">
                    <h2 class="container-heading">Login</h2>
                  <label class="formLabels"> Email Id </label>
                       <br> <input  type="text" :class="[(errorFlag.usernameErrorFlag)? 'errorInput' : ' ']"  v-model="user.emailId"/>
                        
                </b-col>
               
            </b-row>
             <b-row>
                <b-col cols="12" lg="12" md="12" sm="12">
                   <label class="formLabels"> Password</label>
                       <br>  <input type="password" name="password" :class="[(errorFlag.passwordErrorFlag)? 'errorInput' : ' ']" id="password" v-model="user.password" />
         
                </b-col>
             
            </b-row>
             
          
            <b-row>
               <span class="error-display" v-if="error.errorStatus">{{error.errorMessage}}</span>

               <div class="register-seller">
            <button class="register-seller-btn" @click="validateCredentials()">Login</button>
            <p class="account">D'ont have account ? <router-link to="/register">Register</router-link></p>
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
h2.container-heading {
   
    text-align: center;
    margin-top:4%;
    color:#1b2850;
}
.seconds
{
  color: #fff3cd;
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
.account{
    margin-top:3%;
}
.error-display
{
  margin-top: 2%;
  color: red;
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
  width: 100%;
  
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
.register-seller-btn{
background: #1b2850;
color: white;
width:50% ;
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
<script src="./scripts/LoginComponent.js">

</script>