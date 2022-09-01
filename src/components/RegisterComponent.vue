<template>
<b-container>
    <b-row >
        <b-col class="main-card">
             <div class="card">
 
          <form class="create-seller-form" @submit.prevent="">
          <span class="registered-success-prompt" v-if="isRegisterSuccess">New Merchant has been Register!</span>
          <b-container>
            <b-row>
                <b-col cols="12" lg="12" md="12" sm="12">
                  <label class="formLabels"> Full name :</label>
                        <b-input type="text"  placeholder="Full Name" v-model="seller.name"/>
                </b-col>
               
            </b-row>
             <b-row>
                <b-col cols="12" lg="6" md="12" sm="12">
                   <label class="formLabels"> Email :</label>
                        <b-input type="email" :class="[(emailIdErrorFlag)? 'invalid-email' : '']"  v-model="seller.emailId" />
         
                </b-col>
                <b-col cols="12" lg="6" md="12" sm="12">
                  <label class="formLabels"> Contact :</label>
                        <b-input type="text" :class="[(contactErrorFlag)? 'invalid-contact' : '']"  v-model="seller.contact"/>
         
                </b-col>
            </b-row>
              <b-row>
              <b-col cols="12" lg="12" md="12" sm="12">
                  <label class="formLabels">Address :</label>
               
          <b-form-textarea
      id="textarea"
    placeholder="Address Line"
     v-model="seller.address"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
               </b-col>
            </b-row>
             <b-row>
                <b-col cols="12" lg="6" md="12" sm="12">
                  <label class="formLabels">Password :</label>
                   <b-input type="password" :class="[(passwordErrorFlag)? 'password-mismatch' : '']" placeholder="New Password" v-model="seller.password"/>
         
                         
                </b-col>
                <b-col cols="12" lg="6" md="12" sm="12">
                  <label class="formLabels"> Confirm Password :</label>
                   <b-input type="password" :class="[(passwordErrorFlag)? 'password-mismatch' : '']" placeholder="Confirm Password" v-model="checkPassword"/>

                       
                </b-col>
            </b-row>
         
          </b-container>
         
       
         
          <div class="register-seller">
            <button class="register-seller-btn" @click="registerNewSeller()">Register Now</button>
          </div>
        </form>
</div>

        </b-col>
    </b-row>
</b-container>

</template>
<style scoped>
.formLabels {
  padding-top: 0%;
}
.main-card
{

    margin-top:5%;
    display:  flex;text-align: center;
    align-items: center;
    justify-content: center;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>
<script src="./scripts/RegisterComponent.js">

</script>