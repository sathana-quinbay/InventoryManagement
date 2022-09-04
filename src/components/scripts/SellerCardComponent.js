
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
        openInventory(value){
            this.$router.push({path: `/admin/manage/products`});
            console.log("opening details"+value.userId)
            this.$store.dispatch('uniqueSellerId',value.userId);

        },
        disbaleSeller(userId){
            // This is a toggle function to disable or enable a seller.
            this.$store.dispatch('DISABLE_SELLER', userId);
            this.sellerStatus = !this.sellerStatus;
        }
    }
}