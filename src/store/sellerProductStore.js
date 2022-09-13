//added
//import { getsellerproducts,searchProduct,uploadProductViaFile, postsellerproducts, addsellerproducts } from "@/service/SellerProductService";
import { uploadProductViaFile, postsellerproducts, addsellerproducts } from "@/service/SellerProductService";

import {sortProduct} from '@/service/SellerProductService'
export default ({


    state:
    {
        sellerproducts: [ ],
        initialValue:[    {
            sellerId: '123',
            productId: '12134',
            productName: 'samsung',
            description: 'tasty',
            price: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:'https://m-cdn.phonearena.com/images/phones/83157-350/Samsung-Galaxy-S22.jpg',
            category: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'apple',
            description: 'tasty',
            price: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:'https://m-cdn.phonearena.com/images/phones/83157-350/Samsung-Galaxy-S22.jpg',
            category: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'apple',
            description: 'tasty',
            price: 15000 ,
            sellingPrice:140,
            quantity:10,
            imageUrl:'https://m-cdn.phonearena.com/images/phones/83157-350/Samsung-Galaxy-S22.jpg',
            category: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'apple',
            description: 'tasty',
            price: 5000,
            sellingPrice:140,
            quantity:10,
            imageUrl:'https://m-cdn.phonearena.com/images/phones/83157-350/Samsung-Galaxy-S22.jpg',
            category: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'apple',
            description: 'tasty',
            price: 7000,
            sellingPrice:140,
            quantity:10,
            imageUrl:'https://m-cdn.phonearena.com/images/phones/83157-350/Samsung-Galaxy-S22.jpg',
            category: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'apple',
            description: 'tasty',
            price: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:'https://m-cdn.phonearena.com/images/phones/83157-350/Samsung-Galaxy-S22.jpg',
            category: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'apple',
            description: 'tasty',
            price: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:'https://m-cdn.phonearena.com/images/phones/83157-350/Samsung-Galaxy-S22.jpg',
            category: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'apple',
            description: 'tasty',
            price: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:'https://m-cdn.phonearena.com/images/phones/83157-350/Samsung-Galaxy-S22.jpg',
            category: 'box',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'apple',
            description: 'tasty',
            price: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:'https://m-cdn.phonearena.com/images/phones/83157-350/Samsung-Galaxy-S22.jpg',
            category: 'pencil',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'apple',
            description: 'tasty',
            price: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:'https://m-cdn.phonearena.com/images/phones/83157-350/Samsung-Galaxy-S22.jpg',
            category: 'briyani',
        }]
    },

    getters:
    {
        getSellerproducts(state) {
            return state.sellerproducts;
        },
        getinitialValue(state)
        {
            return state.initialValue
        }
    },

    mutations:
    {
        setSellerproducts(state, value) {
            console.log("Set prducts")
            state.sellerproducts = value;
        }
    },

    actions:
    {
        uploadFile(state,{formData,sellerId})
        { 
            var payload={
                formData,
                sellerId
            }
            uploadProductViaFile({
                
                success: ({ data }) => {
                    console.log("get seller service call")
                    console.log(data)
                   
                    
                },
                error: (e) => {
                   
                    console.warn(e);
                },
                payload

            })
        },
        getsellerproductsfromservice({state,getters}, sellerid) {


            // this.commit('setInput',input);

             console.log('searchKey Updated to: ',sellerid);
            var init=getters.getinitialValue
            console.log(init,state)
            this.commit('setSellerproducts', init)
            // getsellerproducts({
            //     sellerid,
            //     success: ({ data }) => {
            //         // if()
            //         console.log("get seller service call")
            //         console.log(data)
            //         // this.commit('setSellerproducts', data.data)
            //     },
            //     error: (e) => {
            //         // this.commit('setSellerproducts', [])
            //         console.warn(e);
            //     }

            // })


        },
       sortSellerProducts(state,{sellerid,sortBy})
       {
         console.log(sellerid,sortBy)
         sortProduct({
            sellerid,
            sortBy,
            success: ({ data }) => {
                console.log("success")
                console.log(data)
                this.commit("setSellerproducts",data.data)
            },
            error: (e) => {
               
                console.warn(e);
            }
      
        })
          
       },
       searchProductServiceCall({getters},payload)
       {
        console.log("inside call srvus")
        var search=getters.getSellerproducts
      
        var array=[]
        search.forEach(element => {
            var name = element.productName
            var category = element.category
            console.log(name)
            if(name.startsWith(payload.searchValue) || category.startsWith(payload.searchValue))
            {
                array.push(element)
            }
            
            
        });
        console.log(array,payload.searchValue)
         this.commit("setSellerproducts",array)
        // searchProduct({
        
        //     success: ({ data }) => {
        //         console.log("success search producrs")
        //         console.log(data)
        //         if(data.message=='No record Found!!!')
        //         {
                
        //             this.commit("setSellerproducts",[])
        //         }
        //         else
        //         {
        //             this.commit("setSellerproducts",data.data)
        //         }
               
        //     },
        //     error: (e) => {
               
        //         console.warn(e);
        //     },
        //     payload
      
        // })

       },
       searchProductByPrice({getters},payload)
       {
        console.log("inside call srvus")
        var search=getters.getSellerproducts
        var min =parseInt(payload.minRange)
        var max =parseInt(payload.maxRange)
        var array=[]
        search.forEach(element => {
            
            
            if(element.price>=min&&element.price<=max)
            {
                array.push(element)
            }
            
            
        });
        console.log(array,min,max)
         this.commit("setSellerproducts",array)
        // searchProduct({
        
        //     success: ({ data }) => {
        //         console.log("success")
        //         this.commit("setSellerproducts",data.data)
        //     },
        //     error: (e) => {
               
        //         console.warn(e);
        //     },
        //     payload
      
        // })

       },
        putsellerproductstoservice({ dispatch }, payload) {


            // this.commit('setInput',input);

            // console.log('searchKey Updated to: ' + input);

            postsellerproducts({

                payload,
                success: (data) => {
                    console.log(data);
                    
                    dispatch('getsellerproductsfromservice', localStorage.getItem('userId'));

                },
                error: (e) => {
                    console.log(e);
                }

            })


        },
        LOGOUT(state)
        {
            console.log("logout user")
          this.commit('setSellerproducts',[])
          console.log(state.sellerproducts)
        },

        addsellerproductstoservice(context, payload) {

            addsellerproducts({
   
                payload,
                success: (data) => {
                    console.log(data);
                    // dispatch('getsellerproductsfromservice','QB12');
   
                },
                error: (e) => {
                    console.log(e);
                }
   
            })
   
   
        }

    }

})