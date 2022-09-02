<template>
    <div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item><router-link to="/seller/product">Add Product</router-link></b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" left>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
        <b-dropdown-item @click="logOut()" href="#">Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>
<script>

export default{
    name:"SellerHeaderComponent",
    methods:{
         logOut() {
      console.warn("User logged out.");
      localStorage.removeItem('userId');
      localStorage.removeItem("role");
      localStorage.removeItem("emailId");

      
      this.$store.dispatch('LOG_OUT_USER');
      this.$router.push({path: '/login'});
    },
    }
}
</script>
