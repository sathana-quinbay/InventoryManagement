<template>
<div style="position:fixed;padding:20px; position:fixed; width:5vw; margin-top:-80px;">
      <div style="position: absolute;height:70px;width:50px;margin-top: -19px;margin-left:-23px;
     padding-top:2vh;"><b-button style="background:#1b2850;" v-b-toggle.sidebar-variant><ion-icon style="font-size:25px;color:#1bae;" name="menu-outline"></ion-icon></b-button></div>
      <div class="side"><ul style="list-style-type:none">
        <li><router-link style="text-decoration:none; color:black;" to="/admin/dashboard"><ion-icon style="color:#1b2850; font-size:28px; margin-top:15vh;" name="browsers-outline"></ion-icon></router-link></li>
         <li><router-link style="text-decoration:none; color:black;" to="/admin/request"><ion-icon style="color:#1b2850; font-size:28px; margin-top:2vh;" name="newspaper-outline"></ion-icon></router-link></li>
          <li><router-link style="text-decoration:none; color:black;" to="/admin/manage"><ion-icon style="color:#1b2850; font-size:28px; margin-top:2vh;" name="people-circle-outline"></ion-icon></router-link></li>
           <li><router-link style="text-decoration:none; color:black;" to="/admin/products"> <ion-icon style="color:#1b2850; font-size:28px; margin-top:2vh;" name="cube-outline"></ion-icon></router-link></li>
        </ul></div>
    <b-sidebar id="sidebar-variant" title="ADMIN" bg-variant="light" text-variant="dark" shadow>
      <div style="float:right;margin-right: 10px;"><b-button style="background:#1b2850;" v-b-toggle.sidebar-variant><ion-icon style="color:#1bae;" name="arrow-back"></ion-icon></b-button></div>
      <div class="px-3 py-2">
        <div class="router">

     <div class="linkhover"><ul style="list-style-type: none;"><li style="padding-top:20px;"><ion-icon style="color:#1bae;" name="browsers-outline"></ion-icon>&nbsp;&nbsp;&nbsp;<router-link style="text-decoration:none; color:white;" to="/admin/dashboard">Dashboard</router-link></li><hr>
       <li><ion-icon style="color:#1bae;" name="newspaper-outline"></ion-icon>&nbsp;&nbsp;&nbsp;<router-link style="text-decoration:none; color:white;;" to="/admin/request">Requests</router-link></li><hr>
      <li><ion-icon  style="color:#1bae;" name="people-circle-outline"></ion-icon>&nbsp;&nbsp;&nbsp;<router-link style="text-decoration:none; color:white;;" to="/admin/manage">Management</router-link></li><hr>
      <li><ion-icon style="color:#1bae;" name="cube-outline"></ion-icon>&nbsp;&nbsp;&nbsp;<router-link style="text-decoration:none; color:white;;" to="/admin/products">Products</router-link></li>
      </ul></div>
      </div></div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
    name:'SideBar',
}
</script>

<style scoped>
.linkhover{
 box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    padding: 15px;
    margin-bottom: 30px;
    font-size: 17px;
    text-align: left;
    background:#1b2850;
}
li{
  margin-bottom:50px;
}
.router{
  margin-top:100px; 
}
.side{
 width: 78px;
    height: 100vh;
    background: whitesmoke;
    margin-left: -50px;
    margin-top: 57px;
    border-radius: 7px;
    padding: 5px;
    z-index:9999;
}
</style>