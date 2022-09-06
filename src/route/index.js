import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from "@/components/LoginComponent.vue";
import AdminDashboardComponent from "@/components/AdminDashboardComponent";
import DemoComponent from "@/components/DemoComponent";
import SettingComponent from "@/components/SettingComponent"
import ProductDetails from '@/components/productDetails'
import {isSellerActive} from '@/service/SellerAccountService'

import AddProductFormComponent from '@/components/AddProductFormComponent';

// import AddProductFormComponent from '@/components/AddProductFormComponent'
// import SellerInventoryComponent from '@/components/SellerInventoryComponent'

import DetailsComponent from '@/components/DetailsComponent';

import ProductViewComponent from '@/components/ProductViewComponent'

import  SellerAccountComponent from "@/components/SellerAccountComponent";
import RegisterComponent from "@/components/RegisterComponent"
import ProductContainerComponent from '@/components/ProductContainerComponent'
import AdminComponent from '@/components/AdminComponent'
import SellerMainComponent from '@/components/SellerMainComponent'
 import {getStatus} from '@/service/PortalStatusService';
import NetworkErrorComponent from '@/components/NetworkErrorComponent'
import AdminRequest from '@/components/AdminRequestaccept'
import SellerManagementComponent from '@/components/SellerManagementComponent'
import AdminProductListComponent from '@/components/AdminProductListComponent'
import ImportProductComponent from '@/components/ImportProductComponent'
import ProductTableComponent from '@/components/ProductTableComponent'
var isAuthenticated=false;
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
      
      { path: 'products', name: 'AdminProductListComponent', component: AdminProductListComponent },
      {
        path: "manage/products",
      name: "ProductDetails",
      component:ProductDetails,
    },
    { path: 'request/details', name: 'DetailsComponent', component: DetailsComponent},
    ]
  },
  {
    path: "/seller", name: "SellerMain", component: SellerMainComponent,
   beforeEnter: (to, from, next) => {
    console.log("before enter")
      const role = localStorage.getItem('role');

      if (role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')) {
        next({ path: '/login' });
      }
      else if (role != undefined && role != null && (role.toLocaleLowerCase() === 'admin')) {
        console.log('loged in as admin use seller id and try again')
        alert('loged in as admin use seller id and try again')
        next({ path: '/admin/dashboard' });
        console.log(isAuthenticated)
      }
      else {
        console.log("moving to seller")
        next();
      }
    },
   
      
    
    children: [
      {
        path: "setting",
        name: "SettingComponent",
        component: SettingComponent 
      },
  {
    path: "add",
  name: "AddProductFormComponent",
  component: AddProductFormComponent,
},
{
  path: "dashboard",
name: "ProductTableComponent",
component: ProductTableComponent,
},
  {
    path: 'product',
    name: 'ProductContainerComponent',
    component: ProductContainerComponent,
  },
  {
    path: 'products',
    name: 'ProductViewComponent',
    component: ProductViewComponent,
  },
  {
    path: 'account',
    name: 'SellerAccountComponent',
    component: SellerAccountComponent,
  },
  {
    path: 'import',
    name: 'ImportProductComponent',
    component: ImportProductComponent,
  },
  {
    path: "tableview",
    name: "ProductTableComponent",
    component: ProductTableComponent 
 },

    ]
  },


   { path: "/*", name: "DemoComponent", component:DemoComponent},

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

router.afterEach((to, from, next) => {
  console.log("after each")

  if(to.path !='/login'&&to.path !='/register'){
    const role = localStorage.getItem('role');
    if (role === undefined || role === null || (role.toLocaleLowerCase() !== 'admin' && role.toLocaleLowerCase() !== 'seller')) {
      router.replace('/login');
     }
     isSellerActive({
      success: (response)=>{
        console.log(response)
        if(response.data.message=='not active')
           {
            console.warn("User logged out.");
            localStorage.removeItem('userId');
            localStorage.removeItem("role");
            localStorage.removeItem("emailId");
          
            router.replace('/login');
           }
    },
    error: (err)=>{
       console.log(err)
       
    }
     }
  )
     
    
  }

getStatus({
    success: (response)=>{
        console.log(response)
    },
    error: (err)=>{
      console.log(err)
      if(to.fullPath!='/error')
      {


      if(err.code=='ERR_NETWORK')
      {
        console.log(err)
        next ({path:"/error"});
      }
    }
    else
    {
      next()
    }

    }
})


})

export default router;