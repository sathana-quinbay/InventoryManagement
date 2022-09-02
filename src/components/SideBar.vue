<template>
<div style="position:fixed; background:lightgray; padding-botom:10px; position: fixed; width:5vw">
      <div style="position:absolute; background:lightgray; height:100vh; border-radius:3px;"><b-button v-b-toggle.sidebar-variant><ion-icon name="menu-outline"></ion-icon></b-button><hr></div>
    <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="light" text-variant="dark" shadow>
      <div style=" margin-top:5vh; float:right;"><b-button v-b-toggle.sidebar-variant><ion-icon name="menu-outline"></ion-icon></b-button></div>
      <div class="px-3 py-2">
        <div class="router">
     <div class="linkhover"><router-link style="text-decoration:none; color:black;" to="/admindashboard">Dashboard</router-link><br></div>
        <div class="linkhover"><router-link style="text-decoration:none; color:black;" to="/admin">Requests</router-link><br></div>
       <div class="linkhover"> <router-link style="text-decoration:none; color:black;" to="/sellermanager">Seller Management</router-link><br></div>
      </div></div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
    name:'SideBar',
}
</script>

<style>
.linkhover{
 box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    background: whitesmoke;
    padding: 15px;
    border-radius: 50px;
    border: 1px solid lightseagreen;
    margin-bottom: 30px;
}

.router{
  margin-top:20vh; 
}
</style>