<template>
<div>           <!--class="adminrequest"-->
    <h2>Requests</h2>
    <div class="tab">
    <b-table :items="items" :fields="fields" responsive='sd'>
         <template #cell(Description)="">
            <b-button size="sm" class="mr-2" @click="modalShow = !modalShow">View Details</b-button>
           <b-modal id="modal-center" centered title="Seller Description" v-model="modalShow">{{Description}}</b-modal>
        </template>
        <template #cell(Approval)="">
        <b-button size="sm" class="mr-2">
             Approve
        </b-button>&nbsp; 
         <b-button size="sm" class="mr-2">
             Disapprove </b-button>
        </template>
    </b-table></div></div>
</template>

<script>
export default {
 name:'AdminRequest',
 data()
 {
    return{
        i:1,
        modalShow:false,
        Description:'Sun Microsystems,we sell computer and accessories related to them',
         fields: ['S_No', 'Name', 'Contact','Date','Description','Approval'],
        items: [
          { S_No:1, Name: 'Dickerson', Contact:9939323216,Date:'29/10/21'},
          { S_No:2, Name: 'Larsen',Contact:98873663637,Date:'13/08/22' },
          { S_No:3, Name: 'Geneva',Contact:9883736542,Date:'15/08/22' }
        ]
    }
 },
 methods:{
   filter()
   {
    console.log(this.filterby);
    // this.$store.dispatch('FILTER_BY',this.filterby)
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