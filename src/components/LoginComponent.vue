<template>
<div class="container-login">
    <div class="login-card">
        <form class="login-form" @submit.prevent>
            <img src="../assets/brand-logo.png" alt="blibli"><br>

            <span class="error-display" v-if="error.errorStatus">{{error.errorMessage}}</span>
            <br>
            <input type="text" name="username" id="username" :class="[(!errorFlag.usernameErrorFlag)? 'login-default' : 'login-failure']" v-model="user.emailId" placeholder="username email">
            <br>

            <input type="password" name="password" :class="[(!errorFlag.passwordErrorFlag)? 'login-default' : 'login-failure']" id="password" v-model="user.password" placeholder="password">
            <div class="login-button-div">
                <button name="login-button" :class="loginButtonClass" @click="validateCredentials()">log in</button>
            </div>
            <p class="register-msg">Don't have an account? Contact <span class="contact-admin">admin@ima.quinbay</span></p>
        </form>
    </div>
</div>
</template>


<script src="./scripts/LoginComponent.js"></script>

<style scoped>
.container-login{
    margin: 0;
    border-radius: 1em;
    height: 85vh;
    width: 100vw;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.login-default{
    border: 2px solid #01c5a1 !important;
}
.login-success{
    border: 2px solid rgba(0, 128, 0, 0.616) !important;
}
.login-failure{
    border: 2px solid rgba(255, 0, 0, 0.616) !important;
}

input:focus{
    outline: 2px solid #01c5a1;
}

.error-display {
    color: red;
    padding: .3em 1em;
    border-radius: 1em;
    margin-bottom: 3em !important;
    font-size: xx-small;
}
.success-display{
    color: #01c5a1;
    padding: .3em 1em;
    border-radius: 1em;
    margin-bottom: 3em !important;
    font-size: xx-small;
}
.error-display {
    background-color: rgba(255, 0, 0, 0.271);
}
.login-card {
    background-color: white;
    border: none;
    padding: 1em;
    border-radius: 1em;
    box-shadow: 2px 2px 10px lightgrey;
}
.login-card img {
    background-color: #01c5a1;
    max-width: 10em;
    margin-bottom: 1em;
    border-radius: 1em;
    padding: 1em;
}
.register-msg{
    font-size: xx-small;
    color: gray;
}
.register-msg span{
    text-decoration: underline;
    color: gray;
}
.register-msg span:hover{
    cursor: pointer;
}
.login-card input:focus{
    border: none !important;
}
.login-button-div{
    margin: 10% 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-form {
    padding: 1em;
}
.login-form input {
    background-color: whitesmoke;
    width: 95%;
    border: none;
    margin: .5em auto;
    padding: .5em;
    height: 2em;
    border-radius: 1em;
    justify-content: center;
    align-items: center;
}
.login-form img {
    border-radius: 20%;
    max-width: 30%;
}
.login-button-div .login-button, .reset-button{
    color: white;
    background-color: #01c5a1;
    border: none;
    border-radius: 1em;
    width: 20vw;
    padding: .7em 1em;
    margin: .1em .5em;
    cursor: pointer;
}
button :hover{
    box-shadow: 2px 3px 5px grey;
}

@media screen and (max-width: 850px){
    .login-button-div{
        margin: 10% 17% !important;
        padding: 0%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-button-div .login-button .reset-button{
        color: white;
        background-color: #01c5a1;
        border: none;
        border-radius: 0.5em !important;
        width: 25vw !important;
        padding: 0.5em !important;
        margin: 0.1em 0.5em !important;
        cursor: pointer;
    }
}
</style>

