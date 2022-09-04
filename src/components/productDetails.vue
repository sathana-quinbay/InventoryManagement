<template>
<div>
  <h2 style="font-family:sans serif;">products</h2><hr>
   <b-table :items="products" :fields="fields" responsive='sd'> 
        
           
    </b-table>
    </div>
</template>

<script>
// import {mapGetters} from 'vuex';
export default {
    data()
    {
        return{
            fields:['productname']
        }
    },
       created(){
          this.$store.dispatch('UNIQUE_PRODUCT_LIST',this.$store.state.specificSellerStore.uniqueId);
          console.log(this.$store.state.specificSellerStore.uniqueId)
       },
    // ...mapGetters({
    //     userId:'getUniqueSellerId'
    // })  
}
</script>

<style>

</style>