
export default{
    name: 'SellerCardComponent',
    data(){
        return {
            uniqueSeller: {},
            isInventoryOpened: false,
            sellerStatus: true, //by default seller is active, can be toggled by the admin
            show:false,
            show2:false
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
        disbaleSeller(status){
            // This is a toggle function to disable or enable a seller.
            if(status=="enabled")
            {
            this.show=true;
            this.show2=false;
            }
            if(status=="disabled")
            {
                this.show=false;
                this.show2=true;
            }
            
        },
        makeEnable(userId)
        {
            this.sellerStatus = !this.sellerStatus;
            this.$store.dispatch('DISABLE_SELLER', userId);
            this.show2=false;
        },
        confirm(userId)
        {
            this.sellerStatus = !this.sellerStatus;
            this.$store.dispatch('DISABLE_SELLER', userId);
            this.show=false;
        },
        close()
        {
            this.show=false;
            this.show2=false;
        }
    }
}