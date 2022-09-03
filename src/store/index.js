import Vue from 'vue'
import Vuex from 'vuex'
import loginStore from '@/store/loginStore'
import sellerStore from '@/store/sellerStore'
import sellerProductStore from '@/store/sellerProductStore'
import specificSellerStore from '@/store/specificSellerStore'
import RequestStore from '@/store/adminrequests.store'
import adminProductsList from '@/store/adminProducts.store'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        loginStore,
        sellerStore,
        sellerProductStore,
        specificSellerStore,
        RequestStore,
        adminProductsList
    }
    
}) 

