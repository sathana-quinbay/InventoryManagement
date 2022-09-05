<template>
<div>
  <h4 style="margin-top:5vw; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;width:85vw; background:whitesmoke; border:0.5px solid;border-radius:10px;margin-left:10vw;padding:20px;">Admin Dashboard</h4><br>
<div class="grid">
  <div class="cards1">
  <p>{{(this.$store.state.sellerStore.sellers).length}}<br>Total Sellers</p><img src="../assets/user.svg" height="60px" width="60px"></div>
  <div class="cards2"><p>{{active}}<br>Active Sellers</p><img src="../assets/check.svg" height="60px" width="60px"></div>
  <div class="cards3"><p>{{inactive}}<br>Disabled Sellers</p><img src="../assets/disabled.svg" height="60px" width="60px" ></div>
  <div class="cards4"><p>{{(requestCount).length}}<br>To Approve</p><img src="../assets/approve.svg" height="60px" width="60px"></div>  
</div>
</div>
</template>
<script src="./scripts/AdminDashboardComponent.js">
</script>

<style scoped>
img{
 float: right;  
}
.sellercnt{
  float: left;
    background: whitesmoke;
    border: 1px solid red;
    border-radius: 10px;
    font-size: 18px;
    padding: 50px;
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
    display:flex;
}
   .grid{
    display:flex;
    margin-left: 4vw;
    padding:10vh;
    padding-right:2vw;
   }
 .cards1{

    width:20vw;
    height:10vh;
    border:0px solid;
    border-radius:5px;
    background: skyblue;
    margin-bottom:2vh;
    display: flex;
    padding:10px;
    padding-left:30px;
    color:black ;
    margin-right:3vw;
    font-weight: 400;

     }
     .cards2{

    width:20vw;
    height:10vh;
    border:0px solid;
    border-radius:5px;
    background: lightgreen;
    margin-bottom:2vh;
    display: flex;
    padding:10px;
    padding-left:30px;
    color: #1b2850;
     margin-right:3vw;
       font-weight: 400;

     }
     .cards3{

    width:20vw;
    height:10vh;
    border:0px solid;
    border-radius:5px;
    background:lightsalmon;
    margin-bottom:2vh;
    display: flex;
    padding:10px;
    padding-left:30px;
    color: #1b2850;
     margin-right:3vw;
       font-weight: 400;
     }
     .cards4{

    width:20vw;
    height:10vh;
    border:0px solid;
    border-radius:5px;
    background: lightcoral;
    margin-bottom:2vh;
    display: flex;
    padding:10px;
    padding-left:30px;
    color: #1b2850;
     margin-right:3vw;
       font-weight: 400;
     }
     p{
      font-size:16px;
     }
</style>