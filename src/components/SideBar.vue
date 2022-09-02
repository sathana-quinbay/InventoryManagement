<template>
<div style="position:fixed;padding:20px; position:fixed; width:5vw; margin-top:-80px;">
      <div style="position: absolute;height: 9vh;width: 5.5vw;margin-top: -19px;margin-left: -1.5vw;border-radius: 3px;border: 1px solid white;
    background: black; padding-top:2vh;"><b-button v-b-toggle.sidebar-variant><ion-icon name="menu-outline"></ion-icon></b-button><hr></div>
      <div class="side"><ul style="list-style-type:none">
        <li><router-link style="text-decoration:none; color:black;" to="/admin/dashboard"><ion-icon style="color:white; font-size:28px; margin-top:15vh;" name="browsers-outline"></ion-icon></router-link></li>
         <li><router-link style="text-decoration:none; color:black;" to="/admin/request"><ion-icon style="color:white; font-size:28px; margin-top:2vh;" name="newspaper-outline"></ion-icon></router-link></li>
          <li><router-link style="text-decoration:none; color:black;" to="/admin/manage"><ion-icon style="color:white; font-size:28px; margin-top:2vh;" name="people-circle-outline"></ion-icon></router-link></li>
        </ul></div>
    <b-sidebar id="sidebar-variant" title="MENU" bg-variant="light" text-variant="dark" shadow>
      <div style="float:right;margin-right: 10px;"><b-button v-b-toggle.sidebar-variant><ion-icon name="arrow-back"></ion-icon></b-button></div>
      <div class="px-3 py-2">
        <div class="router">

     <div class="linkhover"><ul style="list-style-type: none;"><li style="padding-top:20px;"><ion-icon name="browsers-outline"></ion-icon>&nbsp;&nbsp;<router-link style="text-decoration:none; color:black;" to="/admin/dashboard">Dashboard</router-link></li>
       <li><ion-icon name="newspaper-outline"></ion-icon>&nbsp;&nbsp;<router-link style="text-decoration:none; color:black;" to="/admin/request">Requests</router-link></li>
      <li><ion-icon name="people-circle-outline"></ion-icon>&nbsp;&nbsp;<router-link style="text-decoration:none; color:black;" to="/admin/manage">Seller Management</router-link></li></ul></div>
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
    background: whitesmoke;
    padding: 15px;
    border-radius: 50px;
    margin-bottom: 30px;
    font-size: 22px;
    text-align: left;
}
li{
  margin-bottom:50px;
}
.router{
  margin-top:20vh; 
}
.side{
  width:8vw;
  height:90vh;
  background: black;
  margin-left: -50px;
  margin-top: 7vh;
  border-radius:7px;
  padding:5px;
  border:2px solid white;
}
</style>