
 import { mapGetters } from 'vuex';
 import axios from 'axios';

export default {
    name: 'AdminDashboardComponent',
    data(){
        return {
            isLoading: false,
            requestCount:0
        }
    },
    computed:
    {
        ...mapGetters({
            active:'getActiveCount',
            inactive:'getInactiveCount'
            
        })
    },
    created(){
        
        this.$store.dispatch('GET_ALL_SELLERS');
        axios.get(`http://10.30.1.2:8002/admin/get/requestlist`)
        .then((response)=>{
           console.log("service request success"+response.data.data);
           this.requestCount=response.data.data
        })
        .catch((err)=>{
           console.log(err);
        })

        this.$store.dispatch('USER_LOGGED_IN')
       
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
        }
    }
}