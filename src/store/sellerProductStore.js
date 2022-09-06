import { getsellerproducts,searchProduct,uploadProductViaFile, postsellerproducts, addsellerproducts } from "@/service/SellerProductService";
import {sortProduct} from '@/service/SellerProductService'
export default ({


    state:
    {
        sellerproducts: [
        //     {
        //     sellerId: '123',
        //     productId: '12134',
        //     productName: 'upma',
        //     description: 'tasty',
        //     price: 123,
        //     sellingPrice:140,
        //     quantity:10,
        //     imageUrl:' this.image',
        //     promo: 'this.pro',
        // },
        // {
        //     sellerId: '123',
        //     productId: '1215',
        //     productName: 'dhosa',
        //     description: 'tasty',
        //     price: 123,
        //     sellingPrice:140,
        //     quantity:10,
        //     imageUrl:' this.image',
        //     promo: 'this.pro',
        // },
        // {
        //     sellerId: '123',
        //     productId: '1215',
        //     productName: 'dhosa',
        //     description: 'tasty',
        //     price: 123,
        //     sellingPrice:140,
        //     quantity:10,
        //     imageUrl:' this.image',
        //     promo: 'this.pro',
        // },
        // {
        //     sellerId: '123',
        //     productId: '1215',
        //     productName: 'dhosa',
        //     description: 'tasty',
        //     price: 123,
        //     sellingPrice:140,
        //     quantity:10,
        //     imageUrl:' this.image',
        //     promo: 'this.pro',
        // },
        // {
        //     sellerId: '123',
        //     productId: '1215',
        //     productName: 'dhosa',
        //     description: 'tasty',
        //     price: 123,
        //     sellingPrice:140,
        //     quantity:10,
        //     imageUrl:' this.image',
        //     promo: 'this.pro',
        // },
        // {
        //     sellerId: '123',
        //     productId: '1215',
        //     productName: 'dhosa',
        //     description: 'tasty',
        //     price: 123,
        //     sellingPrice:140,
        //     quantity:10,
        //     imageUrl:' this.image',
        //     promo: 'this.pro',
        // },
        // {
        //     sellerId: '123',
        //     productId: '1215',
        //     productName: 'dhosa',
        //     description: 'tasty',
        //     price: 123,
        //     sellingPrice:140,
        //     quantity:10,
        //     imageUrl:' this.image',
        //     promo: 'this.pro',
        // },
        // {
        //     sellerId: '123',
        //     productId: '1215',
        //     productName: 'dhosa',
        //     description: 'tasty',
        //     price: 123,
        //     sellingPrice:140,
        //     quantity:10,
        //     imageUrl:' this.image',
        //     promo: 'this.pro',
        // },
        // {
        //     sellerId: '123',
        //     productId: '1215',
        //     productName: 'dhosa',
        //     description: 'tasty',
        //     price: 123,
        //     sellingPrice:140,
        //     quantity:10,
        //     imageUrl:' this.image',
        //     promo: 'this.pro',
        // },
        // {
        //     sellerId: '123',
        //     productId: '1215',
        //     productName: 'dhosa',
        //     description: 'tasty',
        //     price: 123,
        //     sellingPrice:140,
        //     quantity:10,
        //     imageUrl:' this.image',
        //     promo: 'this.pro',
        // }
    ]
    },

    getters:
    {
        getSellerproducts(state) {
            return state.sellerproducts;
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
        getsellerproductsfromservice(state, sellerid) {


            // this.commit('setInput',input);

             console.log('searchKey Updated to: ');

            getsellerproducts({
                sellerid,
                success: ({ data }) => {
                    console.log("get seller service call")
                    console.log(data)
                    this.commit('setSellerproducts', data.data)
                },
                error: (e) => {
                    this.commit('setSellerproducts', [])
                    console.warn(e);
                }

            })


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
       searchProductServiceCall(state,payload)
       {
        searchProduct({
        
            success: ({ data }) => {
                console.log("success search producrs")
                console.log(data)
                if(data.message=='No record Found!!!')
                {
                
                    this.commit("setSellerproducts",[])
                }
                else
                {
                    this.commit("setSellerproducts",data.data)
                }
               
            },
            error: (e) => {
               
                console.warn(e);
            },
            payload
      
        })

       },
       searchProductByPrice(state,payload)
       {
        searchProduct({
        
            success: ({ data }) => {
                console.log("success")
                this.commit("setSellerproducts",data.data)
            },
            error: (e) => {
               
                console.warn(e);
            },
            payload
      
        })

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