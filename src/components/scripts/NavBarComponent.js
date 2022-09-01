import { mapGetters } from "vuex";

export default {
  name: "NavBarComponent",
  data() {
    return {
      
    };
  },
  methods: {
    logOut() {
      console.warn("User logged out.");
      localStorage.removeItem('userId');
      localStorage.removeItem("role");
      localStorage.removeItem("emailId");

      
      this.$store.dispatch('LOG_OUT_USER');
      this.$router.push({path: '/login'});
    },
  },
  computed: {
    ...mapGetters({
      user: "getUserDetail",
      isLoggedIn: 'getLoginStatus'
    }),
  },
};
