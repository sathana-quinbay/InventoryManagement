<template>
<div>
  <h4 style="margin-top:5vw; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;width:85vw; background:whitesmoke; border:0.5px solid;border-radius:10px;margin-left:10vh;margin-left:10vh;padding:15px;">Admin Dashboard</h4><br>
 <div style="display:flex;">
<div class="grid">
  <div class="cards1">
  <p>{{(this.$store.state.sellerStore.sellers).length==0?("No"):(this.$store.state.sellerStore.sellers.length)}}<br>Sellers</p><img src="../assets/user.svg" height="60px" width="60px"></div>
  <div class="cards2"><p>{{active==0?("No"):(active)}}<br>Active Sellers</p><img src="../assets/check.svg" height="60px" width="60px"></div>
  <div class="cards3"><p>{{inactive==0?("No"):(inactive)}}<br>Disabled Sellers</p><img src="../assets/disabled.svg" height="60px" width="60px" ></div>
  <div class="cards4"><p>{{(requestCount).length==undefined?("No"):(requestCount).length}}<br>Requests Pending</p><img src="../assets/approve.svg" height="60px" width="60px"></div>  
</div>
<!-- <img src='../assets/inventory.gif'> -->

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
    display:grid;
    grid-template-columns: auto auto auto auto;
    margin-left: 1vw;
    padding:10vh;
    padding-right:2vw;
   }
 .cards1{

    width:20vw;
    height:13vh;
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
    height:13vh;
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
    height:13vh;
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
    height:13vh;
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
      font-size:1.5vw;
     }
 @media screen  and (max-width:700px){
     .grid{
      display: grid;
      grid-template-columns: auto auto auto;
   }}
    @media screen  and (max-width:650px){
     .grid{
      display: grid;
      grid-template-columns: auto auto auto;
      column-gap: 4vw;
   }
     .cards1{
    width:22vw;
     }
      .cards2{
    width:22vw;
     }
      .cards3{
    width:22vw;
     }
      .cards4{
    width:22vw;
     }
     p{
      font-size:1.7vw;
     }
   }
    @media screen  and (max-width:570px){
       .grid{
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 4vw;
   }
     .cards1{
    width:30vw;
     }
      .cards2{
    width:30vw;
     }
      .cards3{
    width:30vw;
     }
      .cards4{
    width:30vw;
     }
     p{
      font-size:2vw;
     }
    }
     @media screen  and (max-width:570px){
          .cards1{
    width:32vw;
     }
      .cards2{
    width:32vw;
     }
      .cards3{
    width:32vw;
     }
      .cards4{
    width:32vw;
     }
      p{
      font-size:2.5vw;
     }
     }
      @media screen  and (max-width:370px){
         .grid{
      display: grid;
      margin-left:8vw;
      grid-template-columns: auto ;
      column-gap: 5vw;
   }
    .cards1{
    width:50vw;
     }
      .cards2{
    width:50vw;
     }
      .cards3{
    width:50vw;
     }
      .cards4{
    width:50vw;
     }
      p{
      font-size:2.8vw;
     }
      }
</style>