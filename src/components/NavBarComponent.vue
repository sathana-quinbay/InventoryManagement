<template>
  <nav class="nav-bar" id="nav-bar">
    <div class="brand">
      <!-- {{getHeaderFromStore}} -->
        <!-- <img src="@/assets/brand-logo.png" alt="IMA"> -->
       <h4 style="margin-left:8vw;color:white;"> <ion-icon style="color:#1bae;font-size:30px; margin-top:5px;" name="logo-web-component"></ion-icon>&nbsp;Inventory Manager</h4>
        <span style="color:white;font-size:10px;">&copy; Blibli 2022</span>
    </div>
    
    <div class="login-register">
      <router-link to='/' style="font-size:30px; padding-top:5px;">&nbsp;&nbsp;</router-link>
      <!-- <router-link to="/login" tag="button" class="login-btn"
        >Login</router-link> -->
        <button style="background:#1b2850; color:#1bae; border: 0.1px solid black; font-weight:400;" @click="logOut()" class="login-btn"
        >Logout</button>
    </div>
  </nav>
</template>

<script src="./scripts/NavBarComponent.js"></script>

<style scoped>
.nav-bar {
  overflow: hidden;
  background-color: #1b2850;
  position:sticky;
  top: 0;
  /* z-index: 9999; */
  height: 10vh;
  width:100vw;
  padding: 0.4em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.nav-bar .brand{
    font-size: large;
}
.navigation {
  padding: 1em;
  border-radius: 0em;
  background-color: #01c5a1;
  color: white;
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-content: center;
}
.navigation .navigation-link {
  text-decoration: none;
  color: white;
  margin: 0 1em;
  color: white;
  width: 2em;
}
.brand img{
    max-height: 20px;
    margin: 0;
}
.nav-bar-copy-right{
  font-size: xx-small;
  color: #f9f9f9;
  transition: all .3s;
}
.nav-bar-copy-right:hover{
  color: white;
  cursor: pointer;
}
.register-btn{
  margin: auto .8em;
  padding: 0.5em 1em;
  background-color: whitesmoke;
  border: 2px solid #01c5a1 !important;
  border-radius: 0.5em;
  color: #01c5a1;
  transition: all 0.3s;
}
.register-btn:hover{
  cursor: pointer;
  background-color: white;
}
.login-btn:hover {
  cursor: pointer;
  background-color: #01c5a1;
}


.login-register {
  display: flex;
}
.nav-bar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 1vh 1vw 0 1vw;
  text-decoration: none;
  font-size: 17px;
  transition: all .2s;
}

.nav-bar a:hover {
  color: #ffffff;
  cursor: pointer;
}



.nav-menu-button {
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-content: center;
  color: white;
  width: 2em;
}
.nav-menu-button ion-icon {
  margin-left: 33%;
  align-content: center;
}

/* Media Queries */

@media screen and (min-width: 950px) {

  .nav-menu-button {
    display: none;
  }

  .login-btn{
    margin: auto 0.8em;
    padding: 0.4em 1em;
    background-color: #01c5a1;
    border: 2px solid whitesmoke !important;
    border-radius: 0.5em;
    color: white;
    transition: all 0.3s;
  }
  .register-btn{
    margin: auto 0.8em;
    padding: 0.5em 0.5em;
    background-color: whitesmoke;
    border: 2px solid #01c5a1 !important;
    border-radius: 0.5em;
    color: #01c5a1;
    transition: all 0.3s;
  }
}
@media screen and (max-width: 950px) {

  .nav-menu,
  .navigation {
    display: none;
  }
  .register-btn{
    margin: auto 0.5em;
    padding: 0.5em 0.5em;
    background-color: whitesmoke;
    border: 2px solid #01c5a1 !important;
    border-radius: 0.5em;
    color: #01c5a1;
    transition: all 0.3s;
  }
  .login-btn{
    margin: auto 0.5em;
    padding: 0.4em 1em;
    background-color: #01c5a1;
    border: 2px solid whitesmoke !important;
    border-radius: 0.5em;
    color: white;
    transition: all 0.3s;
  }
}

/* @media screen  and (max-width: 700px){
  .login-btn, .register-btn{
    display: none !important;
  }
}

@media screen and (max-width: 500px) {
  .nav-menu,
  .navigation{
    display: none;
  }
  .nav-menu-button {
    display: none !important;
  }
}

@media screen and (max-width: 900px) {
  .nav-menu-button {
    display: block;
  }
}

@media screen and (max-width: 450px) {
  .nav-menu,
  .navigation,.login-btn,.register-btn{
    display: none;
  }
} */
</style>
