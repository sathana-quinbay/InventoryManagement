<template>

   <div class="main-container-slot">
   
     <b-container class="card-container">
     
        <b-row class="card-row">
           
            <b-col cols="12" lg="6"  md="12" sm="12">
                
                <div :class="editButton?'card card-margin':'card small-card'">
                    <div class="avatar"><b-icon-person-circle></b-icon-person-circle><span class="initial">SV</span></div>
                    <h1>{{sellerDetail.name}}</h1>
                   
                    <p>{{sellerDetail.address}}</p>
                    <div  class="contact-details">
                        <b-icon-mailbox class="iconDisplay"></b-icon-mailbox>{{sellerDetail.emailId}}<br>
                         <b-icon-telephone-fill class="iconDisplay"></b-icon-telephone-fill>{{sellerDetail.contact}}<br>
                        
                    </div>
                    <p><button v-if="!editButton" @click="editButton=true">Edit</button></p>
                    <button @click="deleteAccount" class="deleteMyAccount">Delete my account</button>
                    </div>
            </b-col>
            <b-col v-if="editButton" lg="6" cols="12"  md="12" sm="12">
               <form class="card  create-seller-form" @submit.prevent="">
          <b-container>
            <b-row>
             
              <b-col cols="12" lg="12" md="12" sm="12"> <div class="closeButton"> <button @click="editButton=false" >X</button ></div></b-col>
          
                <b-col cols="12" lg="12" md="12" sm="12">
                  <label class="formLabels"> Full name  <span class="error">{{(nameErrorFlag)? 'Required more than 5 characters' : ' '}}</span></label>
                       <br> <input :class="nameErrorFlag?'errorInput':' '" type="text"  v-model="seller.name"/>
                        
                </b-col>
               
            </b-row>
             <b-row>
               
                <b-col cols="12" lg="12" md="12" sm="12">
                  <label class="formLabels"> Contact  <span class="error">{{(contactErrorFlag)? 'Invalid number' : ' '}}</span></label>
                       <br> <input type="text" :class="contactErrorFlag?'errorInput':' '" v-model="seller.contact"/>
         
                </b-col>
            </b-row>
              <b-row>
              <b-col  cols="12" lg="12" md="12" sm="12">
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
               <div class="register-seller">
            <button class="register-seller-btn" @click="updateSeller()">Update</button>
           
          </div>
            </b-row>
         
          </b-container>
         
       
         
         
        </form>
         
            </b-col>
        </b-row>
    </b-container>
   </div>
</template>
<script src="./scripts/SellerAccountComponent.js"></script>
<style scoped>
.iconDisplay
{
    margin-right: 10px;
}

.closeButton button {
    width: 99px;
    float: right;
    text-align: right;
    background: none;
    color: black;
}
.contact-details
{
    float: left;
    text-align: left;
    margin: 24px 0;
}
.card-container
{
    height: 100vh;
    display: flex;
    align-items: center;
}
.initial
{
    margin-left: 4%;
}
.subject
{
  
  padding: 0% 5%;
  text-align: left;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 80%;
  height: 350px;
  margin: auto;
  margin-top:0%;
  height:max-content;
  align-items: center;
  text-align: center;
  font-family: arial;
}
.deleteMyAccount
{
  background: red;
  width:200px ;
}
.small-card
{
  height: 400px;
  
  margin-top: 0%;
}
.card-margin
{
   height: 400px;
  margin-top: 0%;
}
.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;

  color: black;
}
.avatar
{
    background: blueviolet;
    color: white;
    display: flex;
    font-size: 30px;
    margin-top:3%;
    justify-content: center;
    align-items: center;
  text-align: center;
  width: 80%;
  height: 50px;
  border-radius: 10px;
}
button:hover, a:hover {
  opacity: 0.7;
}
.card-row

{
width:100% ;
}

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
.error
{
  color: red;
  font-size: 2vh;
  font-weight: 300;
}
.errorInput{
  border: 1px solid red;
}

.register-seller{
  margin-top:5%;
  margin-bottom: 5%;
  
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
