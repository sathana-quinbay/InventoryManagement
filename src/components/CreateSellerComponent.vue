<template>
  <div class="main-container">
    <div class="admin-container">
      <div class="admin-container-banner">
        Register New Merchant Account
        <router-link to="/admindashboard" class="router-link-btn"
          >Back To Dashboard</router-link
        >
      </div>
      <div class="admin-display-container">
        <legend name="create-seller-legend">Merchant Details</legend>
        <form class="create-seller-form" @submit.prevent="">
          <span class="registered-success-prompt" v-if="isRegisterSuccess">New Merchant has been Register!</span>
          <input type="text" placeholder="Full Name" v-model="seller.name"/>
          <input type="email" :class="[(emailIdErrorFlag)? 'invalid-email' : '']" :placeholder="[(emailIdErrorFlag)? 'Invalid gmail id' : 'Email']" v-model="seller.emailId">
          <input type="text" :class="[(contactErrorFlag)? 'invalid-contact' : '']" :placeholder="[(contactErrorFlag? 'Contact must be of 10 digits' : 'Contact Number')]" v-model="seller.contact"/>
          <input type="text" placeholder="Address Line" v-model="seller.address"/>
          <input type="password" :class="[(passwordErrorFlag)? 'password-mismatch' : '']" placeholder="New Password" v-model="seller.password"/>
          <input type="password" :class="[(passwordErrorFlag)? 'password-mismatch' : '']" placeholder="Confirm Password" v-model="checkPassword"/>

          <div class="register-seller">
            <button class="register-seller-btn" @click="registerNewSeller()">Register Now</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./scripts/CreateSellerComponent.js"></script>

<style scoped>
.password-mismatch, .invalid-contact, .invalid-email {
  outline: 2px solid red;
}
.registered-success-prompt {
    color: #029d80;
    padding: .3em 1em;
    border-radius: 1em;
    margin-bottom: 3em !important;
    font-size: xx-small;
}
.main-container {
  background-color: whitesmoke;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: column;
  justify-content: center;
  align-content: center;
  padding-top: 1em;
  overflow: scroll;
}
.admin-container-banner {
  max-width: 95%;
  height: 20vh;
  margin: 2em;
  background: whitesmoke;
  border: none;
  border-radius: 1em;
  box-shadow: 2px 2px 10px #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: large;
  color: gray;
}

.admin-container-banner:hover {
  cursor: pointer;
  color: black;
}
.admin-container {
  height: 80vh;
  width: 90vw;
  background-color: white;
  border: none;
  border-radius: 1em;
  overflow: scroll;
}
.create-seller-form {
  padding: 1em;
  width: 100%;
  height: 100%;
}
.create-seller-form input {
  width: 50%;
  height: 3vh;
  margin: 0.5em;
  border: none;
  border-radius: 1em;
  padding: 0.4em 0.7em;
  color: rgb(101, 100, 100);
}

.create-seller-form input:focus {
  outline: 2px solid rgb(200, 200, 200);
}

.admin-display-container {
  background: #f9f9f9;
  height: 50%;
  margin: 1em 2em;
  padding: 2em;
  max-width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
}

.create-seller-btn {
  margin: auto 0.8em;
  padding: 0.5em 2em;
  background-color: #01c5a1;
  border: 2px solid whitesmoke !important;
  border-radius: 0.5em;
  color: white;
  transition: all 0.3s;
}

.create-seller-btn:hover {
  background-color: #029d80;
  box-shadow: 2px 2px 5px #f9f9f9;
  cursor: pointer;
}

.register-seller {
  margin: 1em;
}
.register-seller-btn {
  margin: auto 0.8em;
  padding: 0.5em 2em;
  background-color: #01c5a1;
  border: 2px solid whitesmoke !important;
  border-radius: 0.5em;
  color: white;
  transition: all 0.3s;
}

.register-seller-btn:hover {
  cursor: pointer;
  background-color: #029d80;
}
.router-link-btn {
  background-color: #01c5a1;
  color: white;
  border-radius: 1em;
  margin: 1em;
  padding: 0.5em 0.7em;
  text-decoration: none;
  font-size: small;
}

@media screen and (max-width: 950px) {
  .admin-display-container {
    background: #f9f9f9;
    height: 50%;
    margin: 1em 2em;
    padding: 2em;
    width: 77vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
    align-content: center;
    flex-wrap: nowrap;
  }
}

@media screen and (max-width: 700px) {
  .admin-display-container {
    width: 68vw;
  }
}
@media screen and (max-width: 450px) {
  .admin-display-container {
    padding: 2em 1em;
    width: 66vw;
  }
  .admin-container-banner {
    font-size: small;
  }
  .router-link-btn {
    padding: 0.5em 0.7em;
    font-size: x-small;
  }
  .create-seller-form {
    padding: .5em;
    width: 100%;
    height: 100%;
  }
  .create-seller-form input {
    width: 79%;
    height: 3vh;
    margin: 0.5em;
    border: none;
    border-radius: 1em;
    padding: 0.4em 0.7em;
    color: rgb(101, 100, 100);
  }
  .register-seller {
    margin: 0.3em;
  }
  .register-seller-btn {
    margin: auto 0.8em;
    padding: 0.5em 1em;
  }
}
</style>