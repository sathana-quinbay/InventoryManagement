<template>
<div>
  <h1 style="background:whitesmoke;">Admin Dashboard</h1><br>
<div class="sellercnt">
  <img src="../assets/sell.png" height="60px" width="60px">Total Sellers : {{(this.$store.state.sellerStore.sellers).length}} <br>
  Active Sellers : {{this.activeSellersCount}}<br>
  Disabled Sellers : {{this.disabledSellersCount}}  
</div>
</div>
</template>
<script src="./scripts/AdminDashboardComponent.js">
</script>

<style scoped>
.sellercnt{
  float: left;
    background: whitesmoke;
    border: 0.5px solid black;
    border-radius: 10px;
    font-size: 25px;
    padding: 50px;
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
}
 
</style>