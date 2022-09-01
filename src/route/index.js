import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from "@/components/LoginComponent.vue";
import AdminDashboardComponent from "@/components/AdminDashboardComponent";
// import CreateSellerComponent from "@/components/CreateSellerComponent";
import SellerInventoryComponent from '@/components/SellerInventoryComponent'
// import ViewSellerComponent from "@/components/ViewSellerComponent";
import RegisterComponent from "@/components/RegisterComponent"
import ProductContainerComponent from '@/components/ProductContainerComponent'
import AdminComponent from '@/components/AdminComponent'
import SellerMainComponent from '@/components/SellerMainComponent'
// import {getStatus} from '@/service/PortalStatusService';
import NetworkErrorComponent from '@/components/NetworkErrorComponent'
import AdminRequest from '@/components/AdminRequestaccept'
import SellerManagementComponent from '@/components/SellerManagementComponent'
Vue.use(VueRouter);
// const  = (a, b) => {
//   if (a > b)
//       return "a is greater";
//   else
//       return "b is greater";
// }
const routes = [
  { path: '/register', name: 'RegisterComponent', component: RegisterComponent },
  
  {
    path: '/', name: 'LoginComponent', component: LoginComponent,
    beforeEnter: (to, from, next) => {
      // console.log(to)
      next({ path: '/login' })
    }
  },
  {
    path: "/login", name: "LoginComponent", component: LoginComponent,
    beforeEnter: (to, from, next) => {
      console.log(to)
      const role = localStorage.getItem('role');
      console.log(role)
      if (role != undefined && role != null && (role.toLocaleLowerCase() === 'admin')) {
        alert('you have already loged in as admin')
        next({ path: "/admin/dashboard" })
      }
      else if (role != undefined && role != null && role.toLocaleLowerCase() === 'seller') {
        alert('you have already loged in as seller')
        next({ path: "/seller/dashboard" })
      }
      else {
        next()
      }
    }
  },
  { path: "/error", name: "errorComponent", component: NetworkErrorComponent },
  {
    path: "/admin/", name: "AdminMain", component: AdminComponent,
    beforeEnter: (to, from, next) => {
      console.log("/",to)
      const role = localStorage.getItem('role');
      if (role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')) {
        alert("login and try again");
        // <RegisterComponent dialogStatus="true" path="/login" />
        next({ name: 'LoginComponent', path: '/login' });
      }
      else if (role.toLocaleLowerCase() === 'seller') {
        alert("you cant access")

        next({ path: "/seller/dashboard" })
      }
      else {
        next();
      }
    },
    children: [
      {
        path: "dashboard",
        name: "AdminDashboardComponent",
        component: AdminDashboardComponent,
      },
      { 
        path: "request",
         name: "AdminRequest",
          component: AdminRequest 
      },
      {
         path: "manage",
         name: "SellerManagementComponent",
         component: SellerManagementComponent 
      },

    ]
  },
  {
    path: "/seller", name: "SellerMain", component: SellerMainComponent,
   beforeEnter: (to, from, next) => {
      const role = localStorage.getItem('role');

      if (role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')) {
        next({ path: '/login' });
      }
      else if (role != undefined && role != null && (role.toLocaleLowerCase() === 'admin')) {
        console.log('loged in as admin use seller id and try again')
        alert('loged in as admin use seller id and try again')
        next({ path: '/admin/dashboard' });
      }
      else {
        console.log("moving to seller")
        next();
      }
    },
    
    children: [
      {
      path: "dashboard",
    name: "SellerInventoryComponent",
    component: SellerInventoryComponent,
  },
  {
    path: 'product',
    name: 'ProductContainerComponent',
    component: ProductContainerComponent,
  }
  
    
    ]
  },

  // { path: "/admin", name: "AdminRequest", component: AdminRequest },

  // { path: "/sellermanager", name: "SellerManagementComponent", component: SellerManagementComponent },



  // {
  //   path: "/dashboard",
  //   name: "AdminDashboardComponent",
  //   component: AdminDashboardComponent,
  //   beforeEnter: (to, from, next) => {
  //     console.log(to)
  //     const role = localStorage.getItem('role');
  //     if (role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')) {
  //       next({ name: 'LoginComponent', path: '/login' });
  //     }
  //     else if (role.toLocaleLowerCase() === 'seller') {
  //       next({ path: "/sellerdashboard" })
  //     }
  //     else if (role.toLocaleLowerCase() === 'admin') {
  //       next({ path: "/admindashboard" })
  //     }
  //   }
  // },
  // {
  //   path: "/admindashboard/create",
  //   name: "CreateSellerComponent",
  //   component: CreateSellerComponent,
  //   beforeEnter: (to, from, next) => {
  //     console.log(to)
  //     const role = localStorage.getItem('role');
  //     if (role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')) {
  //       alert("login and try again")
  //       next({ path: '/login' });
  //     } else
  //       if (role != undefined && role != null && (role.toLocaleLowerCase() === 'seller')) {
  //         alert("Already logged in as seller")
  //         next({ path: '/sellerdashboard' });
  //       }
  //       // if(role != undefined && role != null && (role.toLocaleLowerCase() === 'admin')){
  //       //   alert("logged in as admin logout and try to register")
  //       //   next ({name: 'AdminDashboardComponent', path: '/admindashboard'});
  //       // }
  //       else {
  //         next();
  //       }
  //   }
  // },
  // {
  //   path: "/sellerdashboard",
  //   name: "SellerInventoryComponent",
  //   component: SellerInventoryComponent,
  //   beforeEnter: (to, from, next) => {
  //     const role = localStorage.getItem('role');

  //     if (role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')) {
  //       next({ path: '/login' });
  //     }
  //     else if (role != undefined && role != null && (role.toLocaleLowerCase() === 'admin')) {
  //       console.log('loged in as admin use seller id and try again')
  //       alert('loged in as admin use seller id and try again')
  //       next({ path: '/admindashboard' });
  //     }
  //     else {
  //       console.log("moving to seller")
  //       next();
  //     }
  //   }
  // },
  // {
  //   path: '/admindashboard/sellers/:userId',
  //   name: 'ViewSellerComponent',
  //   component: ViewSellerComponent,
  //   beforeEnter: (to, from, next) => {
  //     const role = localStorage.getItem('role');
  //     if (role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')) {
  //       next({ path: '/login' });
  //     } else if (role.toLocaleLowerCase() === 'seller') {
  //       alert("unable to access")
  //       next({ path: '/sellerdashboard' });
  //     } else {
  //       next();
  //     }
  //   }
  // },
  // {
  //   path: '/sellerdashboard/products',
  //   name: 'ProductContainerComponent',
  //   component: ProductContainerComponent,
  //   beforeEnter: (to, from, next) => {
  //     const role = localStorage.getItem('role');
  //     if (role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')) {
  //       next({ path: '/login' });
  //     } else if (role.toLocaleLowerCase() === 'admin') {
  //       next({ path: '/login' });
  //     } else {
  //       next(); //is role is seller
  //     }
  //   }
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   getStatus({
//     success: (response)=>{
//         console.log(response)
//     },
//     error: (err)=>{
//       if(to.fullPath!='/error')
//       {


//       if(err.code=='ERR_NETWORK')
//       {
//         console.log(err)
//         next ({name: 'errorComponent'});
//       }
//     }
//     else
//     {
//       next()
//     }

//     }
// })


// })

export default router;