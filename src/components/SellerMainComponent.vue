<template>
    <div>
        <SellerHeaderComponent/>
       <div class="main-router">
         <router-view/>
       </div>
    </div>
</template>
<script>
import SellerHeaderComponent from './SellerHeaderComponent.vue' 
export default{
    name:"SellerMainComponent",
    components:{
        SellerHeaderComponent
    }
}
</script>
<style scoped>


</style>
