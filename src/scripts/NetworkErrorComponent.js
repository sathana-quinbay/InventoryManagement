export default {
//     unmounted()
//    {
//     console.log("unmounted")
//    },
//    mounted()
//    {
//     console.log("mounted")
//    },
//    created()
//    {
//     console.log("created")
//    },
//    beforeCreate()
//    {
//     console.log("beforeCreate")
//    },
//    updated()
//    {
//     console.log("updated")
//    },
//    beforeUpdate()
//    {
//     console.log(" before Update")
//    },
//    beforeMount()
//    {
//     console.log("beforeMount")
//    },
data(){
    return{
        count:1
    }
},
computed:{
    incrementFive()
    {
       if(this.count>10)
       {
        alert("hell0")
       }
       return this.count
    }
},
}