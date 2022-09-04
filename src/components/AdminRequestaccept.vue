<template>
<div>           <!--class="adminrequest"-->
    <div class="cont"><div class="bag"><h3 style="padding:5px;"><ion-icon style="color:#1b2850;" name="newspaper-outline"></ion-icon>&nbsp;Requests</h3></div></div><hr>
    <div class="tab">
    <b-table :items="requests" :fields="fields" responsive='sd'>
         <template #cell(Description)="">
            <b-button class="mr-2 viewButton" size="sm"  @click="modalShow = !modalShow;desc(requests.userId)">View Details</b-button>
           <b-modal id="modal-center" centered title="Seller Description" v-model="modalShow">
            Name:{{desc.name}}<br>
            
           </b-modal>
        </template>
        <template #cell(Approval)="item">
        <b-button @click="Approved(item)" size="sm" class="mr-2">
             Approve
        </b-button>&nbsp; 
         <b-button @click="DisApproved()" size="sm" class="mr-2">
             Disapprove </b-button>
        </template>
    </b-table></div></div>
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
        modalShow:false,
        Description:'Sun Microsystems,we sell computer and accessories related to them',
         fields: ['userid','Description','Approval'],
         requests:[]
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
           desc:'getSellers'
       })
   },
 created()
 {
    // this.$store.dispatch('REQUEST_LIST');
     axios.get(`http://10.30.1.2:8002/admin/get/requestlist`)
         .then((response)=>{
            console.log("service request success"+response.data.data);
            this.requests=response.data.data
         })
         .catch((err)=>{
            console.log(err);
         })
 },
 methods:{
   filter()
   {
    console.log(this.filterby);
    // this.$store.dispatch('FILTER_BY',this.filterby)
   },
   Approved(item)
   {
    console.log(item.item.userid);
     this.$store.dispatch('POST_REQUEST',item.item.userid); 
    axios.get(`http://10.30.1.2:8002/admin/get/requestlist`)
         .then((response)=>{
            console.log("service request success"+response.data.data);
             this.requests=response.data.data;
         })
         .catch((err)=>{
            console.log(err);
         })
}
   },
   desc(value)
   {
      this.$store.dispatch('GET_SELLER_BY_ID',value);
   }

}
</script>

<style>
.cont{
   display: flex;
   width:100% ;
   justify-content:center;
   margin-top:10px;
}
.bag{
   border:0.2px solid #1b2850;
   padding:5px;
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