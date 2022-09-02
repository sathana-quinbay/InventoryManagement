<template>
<div>           <!--class="adminrequest"-->
    <h2>Requests</h2>
    <div class="tab">
    <b-table :items="getRequest.data" :fields="fields" responsive='sd'>
         <template #cell(Description)="">
            <b-button size="sm" class="mr-2" @click="modalShow = !modalShow">View Details</b-button>
           <b-modal id="modal-center" centered title="Seller Description" v-model="modalShow">{{Description}}</b-modal>
        </template>
        <template #cell(Approval)="">
        <b-button @click="Approved()" size="sm" class="mr-2">
             Approve
        </b-button>&nbsp; 
         <b-button @click="DisApproved()" size="sm" class="mr-2">
             Disapprove </b-button>
        </template>
    </b-table></div></div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
 name:'AdminRequest',
 data()
 {
    return{
        i:0,
        modalShow:false,
        Description:'Sun Microsystems,we sell computer and accessories related to them',
         fields: ['userid','Description','Approval'],
    }
 },
 computed:
 {
    ...mapGetters({
          getRequest:'getRequests',
    })
 },
 created()
 {
    this.$store.dispatch('REQUEST_LIST');
 },
 methods:{
   filter()
   {
    console.log(this.filterby);
    // this.$store.dispatch('FILTER_BY',this.filterby)
   },
   Approved()
   {
     this.$store.dispatch('POST_APPROVAL',);  
   },
   Disapproved()
   {

   }

}
}
</script>

<style>
.tab{
    background: white;
    width:90%;
    margin-left:5%;
    border-radius:8px;
    border:0.5px solid #01c5a1;
    padding:5px;
    height:82vh;
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
</style>