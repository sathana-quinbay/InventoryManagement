import axios from "axios";


export const getsellerproducts = ({sellerid,success , error}) => {

    axios
    .get(`http://10.30.1.2:8007/seller/product/getAll/${sellerid}`)
        .then((response) => {
    console.log(response)
            success && success(response)

        }).catch((e) => {
  console.log(e)
            error && error(e)
        })

}
export const sortProduct = ({sellerid,sortBy,success , error}) => {
    var url=""
   if(sortBy=='name')
   {
   url=`http://10.30.1.2:8007/seller/product/sortbyname/${sellerid}`
   }
   else if(sortBy=='price')
   {
    url = `http://10.30.1.2:8007/seller/product/sortbyprice/${sellerid}`
    }
    axios
    .get(url)
        .then((response) => {
    console.log(response)
            success && success(response)

        }).catch((e) => {
  console.log(e)
            error && error(e)
        })

}
export const deleteProduct = ({success , error ,payload}) => {
    var url = `http://10.30.1.2:8007/seller/product/delete/${payload.productId}`
    console.log("deelete",url)
    axios
    .delete(url)
        .then((response) => {
    console.log(response)
            success && success(response)

        }).catch((e) => {
  console.log(e)
            error && error(e)
        })

}
export const uploadProductViaFile = ({success , error ,payload}) => {
    console.log("upload file",payload)
    var url = `http://10.30.1.2:8007/seller/product/import/`
    console.log("deelete",url)
    axios
    .post(url)
        .then((response) => {
    console.log(response)
            success && success(response)

        }).catch((e) => {
  console.log(e)
            error && error(e)
        })

}
export const searchProduct = ({success , error ,payload}) => {
    var url = `http://10.30.1.2:8007/seller/product/search?search=${payload.searchValue}&sellerId=${payload.sellerId}`
    console.log("indie search ",url,payload)
    axios
    .get(url)
        .then((response) => {
    console.log(response)
            success && success(response)

        }).catch((e) => {
  console.log(e)
            error && error(e)
        })

}
export const postsellerproducts = ({payload,success,error}) => {

    console.log(payload)

    axios
    .post("http://10.30.1.2:8007/seller/product/add/",payload)
        .then((response) => {
            console.log(response)

            success && success(response)

        }).catch((e) => {
   console.log(e)
            error && error(e)
        })

}
export const editsellerproducts = ({payload,success,error}) => {

    console.log(payload)
    var url=`http://10.30.1.2:8007/seller/product/edit`

    axios
    .put(url,payload)
        .then((response) => {
            console.log(response)

            success && success(response)

        }).catch((e) => {
   console.log(e)
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