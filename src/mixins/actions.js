export default{
    methods:{
        trimValue(varible) {

            this.seller[varible] = this.seller[varible].replace(/^\s+|\s+$/gm, '')
        },

        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
           
        },
       
    }
}