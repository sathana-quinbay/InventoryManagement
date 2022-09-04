<template>
    <div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">Inventory Management</b-nav-item>
     

      
      <b-nav-item-dropdown class="rightAlign" text="Products" right>
        <b-dropdown-item><router-link class="routerLink" to="/seller/add">Add Product</router-link></b-dropdown-item>
        <b-dropdown-item><router-link class="routerLink" to="/seller/tableview">List Products</router-link></b-dropdown-item>
        <b-dropdown-item><router-link class="routerLink" to="/seller/product">All Products</router-link></b-dropdown-item>
        <b-dropdown-item><router-link class="routerLink" to="/seller/import">Import Products</router-link></b-dropdown-item>
       
      </b-nav-item-dropdown>

      <b-nav-item-dropdown class="rightAlign" text="User" right>
        <b-dropdown-item ><router-link class="routerLink" to="/seller/account">Account</router-link></b-dropdown-item>

        <b-dropdown-item @click="logOut()" href="#">Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>
<style scoped>
.rightAlign
{
  float: right;
  text-align: right;
}
.routerLink
{
  text-decoration: none;
  color: black;
}
</style>
<script>

export default{
    name:"SellerHeaderComponent",
    methods:{
         logOut() {
      console.warn("User logged out.");
      localStorage.removeItem('userId');
      localStorage.removeItem("role");
      localStorage.removeItem("emailId");

      
     
      this.$router.replace('/login');
    },
    }
}
</script>
