<template>
<div>
  <h2 style="margin-top:5vw; width:85vw; background:whitesmoke; border:0.5px solid;border-radius:10px;margin-left:10vw;padding:20px;">Admin Dashboard</h2><br>
<div class="grid">
  <div class="cards">
  <p > {{(this.$store.state.sellerStore.sellers).length}}<br>Total Sellers</p><img src="../assets/user.svg" height="60px" width="60px"></div>
  <div class="cards"><p>{{active}}<br>Active Sellers</p><img src="../assets/check.svg" height="60px" width="60px"></div>
  <div class="cards"><p>{{inactive}}<br>Disabled Sellers</p><img src="../assets/disabled.svg" height="60px" width="60px" ></div>
  <div class="cards"><p>{{(requestCount).length}}<br>Waiting For Approval</p><img src="../assets/approve.svg" height="60px" width="60px"></div>  
</div>
</div>
</template>
<script src="./scripts/AdminDashboardComponent.js">
</script>

<style scoped>
img{
 float: right;
    position: absolute;
    top: 0;
    right: 0;
}
.sellercnt{
  float: left;
    background: whitesmoke;
    border: 1px solid red;
    border-radius: 10px;
    font-size: 25px;
    padding: 50px;
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
    display:flex;
}
   .grid{
    display:grid;
    grid-template-columns: auto auto;
    margin-left: 4vw;
    padding:10vh;
    padding-right:2vw;
   }
 .cards{

    width:40vw;
    height:10vh;
    border:0px solid;
    border-radius:10px;
    background: whitesmoke;
    margin-bottom:2vh;
    display: flex;
    padding:10px;
    padding-left:30px;
    position: relative;
    color: #1b2850;

     }
     p{
      font-size:20px;
     }
</style>