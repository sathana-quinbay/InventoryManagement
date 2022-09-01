export const filterBy= ({success, error,filter})=>{
    axios.post(`http://10.30.1.2:8002/admin/search/name/${filter.category}`,filter.category,filter.search)
         .then((response)=>{
            success && success(response);
         })
         .catch((err)=>{
            error && error(err);
         })
}
