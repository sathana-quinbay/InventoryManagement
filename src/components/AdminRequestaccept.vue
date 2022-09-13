<template>
<div>           <!--class="adminrequest"-->
    <div class="cont"><div class="bag"><h5 style="padding:5px;margin-left:40px;"><ion-icon style="color:#1b2850;" name="newspaper-outline"></ion-icon>&nbsp;Requests</h5></div></div>
    <div class="tab">
    <b-table style="font-size:12px;" :items="desc" :fields="fields" responsive>
         <!-- <template #cell(Description)="">
            <button @click="desc()">View Details</button> -->
             <!-- Name:{{desc.name}}<br> -->
        <!-- </template> --> 
    <template #cell(Approval)="item">
        <b-button @click="Approved(item)" size="sm" class="mr-2">
             Approve
        </b-button>&nbsp; 
         <b-button @click="DisApproved(item)" size="sm" class="mr-2">
             Reject </b-button> 
        </template>
    </b-table></div>
    <p class="noreqs" v-show='show'>No requests Pending..!</p>
    </div>
</template>

<script>
 import {mapGetters} from 'vuex'
import axios from 'axios';
export default {
 name:'AdminRequest',
 data()
 {
    return{
        i:0,
        Description:'Sun Microsystems,we sell computer and accessories related to them',
         fields: ['name','userid','Approval'],
         requests:[],
         show:false
    }
 },
//  computed:
//  {
//     ...mapGetters({
//           getRequest:'getRequests',
//     })
//  },
   computed:{
       ...mapGetters({
           desc:'getSellerList'
       })
   },
 created()
 {
    this.$store.dispatch('GET_SELLERS');
   //   axios.get(`http://10.30.1.2:8002/admin/get/requestlist`)
   //       .then((response)=>{
   //          console.log("service request success"+response.data.data);
   //          this.requests=response.data.data
   //       })
   //       .catch((err)=>{
   //          console.log(err);
   //       })
 },
 
 mounted()
 {
   if(this.requests==null)
         {
            this.show=true;
         }
 },
 methods:{
   filter()
   {
    console.log(this.filterby);
    // this.$store.dispatch('FILTER_BY',this.filterby)
   },
   Approved(item)
   {
      this.i=1;
    console.log(item.item.userid);
     this.$store.dispatch('POST_REQUEST',item.item.userid); 
     
},
   DisApproved(item)
   {
      this.i=1;
    console.log(item.item.userid);
     this.$store.dispatch('DECLINE_REQUEST',item.item.userid); 
    axios.get(`http://10.30.1.2:8002/admin/get/requestlist`)
         .then((response)=>{
            console.log("service request success"+response.data.data);
             this.requests=response.data.data;
         })
         .catch((err)=>{
            console.log(err);
         })
},
   desc(value)
   {
      this.$router.push({path: "admin/request/details"});
      console.log("request details now");
      this.$store.dispatch('GET_SELLER_BY_ID',value);
      
   }
 }
}
</script>

<style>
.noreqs{
   color:black;
}
.cont{
   display: flex;
   width:100% ;
   justify-content:center;
   margin-top:10px;
}
.bag{
   border:0.2px solid #1b2850;
   margin-bottom:30px;
   width:200px;
   display:flex;
   border-radius:10px;
   background:whitesmoke;
}
.tab{
    background: white;
    width:75%;
    margin-left:14%;
    border-radius:5px;
    border:0.5px solid #01c5a1;
    padding:5px;
    height:100;
}
.thAlign{
    padding-right:10px;
    background: #01c5a1;
    
}
.filterbar
{
    background:#01c5a1;
    width:90%;
    margin-left:5%;
}
button.btn.mr-2.viewButton.btn-secondary.btn-sm {
    background: white;
    color:#1b2850;
    font-weight:500;
}
</style>