
// import { mapGetters } from 'vuex';
// import { sellers } from './mockSellers';

export default {
    name: 'AdminDashboardComponent',
    data(){
        return {
            isLoading: false,
            // sellers: sellers,
           
        }
    },
    methods: {
        updateLoader(){
            this.isLoading = false; //fix after service layer is integrated.
            setInterval(()=>{
                this.isLoading = true;
            }, 5000);
            
        },
        createSeller(){
            this.$router.push({path: `/admindashboard/create`})
        },
      
    }
}