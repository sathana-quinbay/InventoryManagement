import axios from "axios";

export const getsellerproducts = ({sellerid,success , error}) => {

    axios
    .get(`http://10.30.1.2:8002/seller/product/${sellerid}`)
        .then((response) => {

            success && success(response)

        }).catch((e) => {

            error && error(e)
        })

}


export const postsellerproducts = ({payload,success,error}) => {

    console.log(payload)

    axios
    .put("http://10.30.1.2:8002/seller/product/edit",payload)
        .then((response) => {

            success && success(response)

        }).catch((e) => {

            error && error(e)
        })

}

export const addsellerproducts = ({payload,success,error}) => {

    axios
    .post("http://10.30.1.2:8002/seller/product/add",payload)
        .then((response) => {
           
            success && success(response)

        }).catch((e) => {

            error && error(e)
        })

}

export const getsellerdetail = ({sellerid,success,error}) => {
    console.log(sellerid)
    axios
    .get(`http://10.30.1.2:8002/admin/sellerbyId/${sellerid}`)
        .then((response) => {
            console.log(response)
            success && success(response)

        }).catch((e) => {

            error && error(e)
        })

}