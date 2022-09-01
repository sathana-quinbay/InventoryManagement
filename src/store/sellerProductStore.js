import { getsellerproducts, postsellerproducts, addsellerproducts } from "@/service/SellerProductService";

export default ({


    state:
    {
        sellerproducts: [{
            sellerId: '123',
            productId: '12134',
            productName: 'upma',
            discription: 'tasty',
            productPrice: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:' this.image',
            promo: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'dhosa',
            discription: 'tasty',
            productPrice: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:' this.image',
            promo: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'dhosa',
            discription: 'tasty',
            productPrice: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:' this.image',
            promo: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'dhosa',
            discription: 'tasty',
            productPrice: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:' this.image',
            promo: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'dhosa',
            discription: 'tasty',
            productPrice: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:' this.image',
            promo: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'dhosa',
            discription: 'tasty',
            productPrice: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:' this.image',
            promo: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'dhosa',
            discription: 'tasty',
            productPrice: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:' this.image',
            promo: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'dhosa',
            discription: 'tasty',
            productPrice: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:' this.image',
            promo: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'dhosa',
            discription: 'tasty',
            productPrice: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:' this.image',
            promo: 'this.pro',
        },
        {
            sellerId: '123',
            productId: '1215',
            productName: 'dhosa',
            discription: 'tasty',
            productPrice: 123,
            sellingPrice:140,
            quantity:10,
            imageUrl:' this.image',
            promo: 'this.pro',
        }]
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
            state.sellerproducts = value;
        }
    },

    actions:
    {
        getsellerproductsfromservice({ commit }, sellerid) {


            // this.commit('setInput',input);

            // console.log('searchKey Updated to: ' + input);

            getsellerproducts({
                sellerid,
                success: ({ data }) => {
                    console.log(data)
                    commit('setSellerproducts', data)
                },
                error: (e) => {
                    commit('setSellerproducts', [])
                    console.warn(e);
                }

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