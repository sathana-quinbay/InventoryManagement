import { mapGetters } from "vuex";
import logOut from '@/mixins/logout'
export default {
  name: "NavBarComponent",
  data() {
    return {
         isLoggedIn:true
    };
  },
  mixins:[logOut],
  methods: {
    // logOut() {
    //   console.warn("User logged out.");
    //   localStorage.removeItem('userId');
    //   localStorage.removeItem("role");
    //   localStorage.removeItem("emailId");

      
    //   this.$store.dispatch('LOG_OUT_USER');
    //   this.$router.push({path: '/login'});
    // },
  },
  computed: {
    ...mapGetters({
      user: "getUserDetail",
      // isLoggedIn: 'getLoginStatus'
    }),
  },
};
