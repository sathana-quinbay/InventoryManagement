export default {
    name:"OpenProductComponent",
    props:['modalShowProp','product'],
    data()
    {
       return {
        product:{
      productName:"",
      productPrice:"",
      editForm:false

       }
       }
    },
    watch:{
     timeStamp()
     {
       this.check()
     }
    },
    mounted()
    {
      console.log(this.modalShowProp)
      this.check()

    },
    methods: {
      check()
      {
if(this.modalShowProp==true)
      {
         this.showModal()
      }
      else{
        this.hideModal()
      }
      },
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
        this.$emit('hideModal',false)
      },
     
    }
  }