<template>
    <div>
        <SellerHeaderComponent/>
        <router-view/>
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
