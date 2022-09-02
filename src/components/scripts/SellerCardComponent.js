
export default{
    name: 'SellerCardComponent',
    data(){
        return {
            uniqueSeller: {},
            isInventoryOpened: false,
            sellerStatus: true //by default seller is active, can be toggled by the admin
        }
    },
    props: {
        sellerprop: {
            type: Object,
            required: true,
             default: ()=>{}
        }
    },
    // computed: {
    //     ...mapGetters({
    //         uniqueSeller: 'getSpecificSeller'
    //     })
    // },
    methods:{
        openInventory(userId){
            
            this.isInventoryOpened = true;
            setInterval(()=>{
                this.isInventoryOpened = false
            }, 1000);            

            this.$router.push({path: `/admin/sellers/${userId}`});
            
        },
        disbaleSeller(userId){
            // This is a toggle function to disable or enable a seller.
            this.$store.dispatch('DISABLE_SELLER', userId);
            this.sellerStatus = !this.sellerStatus;
        }
    }
}