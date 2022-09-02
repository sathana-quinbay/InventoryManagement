
//  import { mapGetters } from 'vuex';
// import { sellers } from './mockSellers';

export default {
    name: 'AdminDashboardComponent',
    data(){
        return {
            isLoading: false,
            // sellers: sellers,
            activeSellersCount:0,
            disabledSellersCount:0
        }
    },
    // computed:
    // {
    //     // ...mapGetters({
    //     //     activeSellers:'getSellers',
    //     // })
    // },
    created(){
        this.$store.dispatch('GET_ALL_SELLERS');
        // this.$store.dispatch('USER_LOGGED_IN')
        let activeSellers=this.$store.state.sellerStore.sellers;
        console.log("damn"+activeSellers);
        for(let i=0;i<activeSellers.length;i++)
        {
            if(activeSellers.role=="seller")
            {
                if(activeSellers.status=="true")
                {
                    this.activeSellersCount++;
                    console.log("active")
                }
                else{
                    this.disabledSellersCount++;
                }
            }
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