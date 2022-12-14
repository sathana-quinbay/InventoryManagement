import SellerCardComponent from '@/components/SellerCardComponent'
import {mapGetters} from 'vuex';
// import { sellers } from './mockSellers';
export default{
    data()
        {
             return{
                
                     category:'name',
                     searchkey:'', 
                     sortby:'',
                     empty:false

            }
                
             },
    components:{
        SellerCardComponent
        },
    created(){
        this.$store.dispatch('GET_ALL_SELLERS')
        // this.$store.dispatch('USER_LOGGED_IN')
    },
    methods:
    {
        processSearch(){
            var payload={
                searchkey:this.searchkey,
                category:this.category
            
            }
            this.$store.dispatch('GET_SELLER_FROM_SEARCH',payload);
            console.log(this.searchkey);
            console.log(this.category);
            console.log('Getting all sellers based on search');
        },
        
    },
    watch:
    {
        sortby(newvalue,oldvalue)
        {
            this.$store.dispatch('GET_SELLER_FROM_SORT',newvalue);
            console.log(newvalue,oldvalue);
        },
        sellers(newvalue,oldvalue)
        {
            if(this.sellers.length==0)
            {
                this.empty=true;
            }
            console.log(newvalue,oldvalue);
        },
        searchkey(newvalue,oldvalue)
        {
            this.empty=false;
            var payload={
                searchkey:newvalue,
                category:this.category
            }
            if(newvalue=='')
            {
                this.$store.dispatch('GET_ALL_SELLERS');
            }
            this.$store.dispatch('GET_SELLER_FROM_SEARCH',payload);
            console.log('searchkey',this.$store.state.sellerStore.sellers);
            console.log(newvalue,oldvalue);
        },
        clear()
        {
           this.searchkey="";
        }
    },
    computed:{
        ...mapGetters({
            sellers: 'getSellers'
        })
    }
}