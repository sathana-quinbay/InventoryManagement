export default {
    methods:{
        logOut() {
            console.warn("User logged out.");
            localStorage.removeItem('userId');
            localStorage.removeItem("role");
            localStorage.removeItem("emailId");
      
            
            this.$store.dispatch('LOGOUT');
            this.$router.push({path: '/login'});
          },
    }
}