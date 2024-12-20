import axios from "axios";

const app= axios.create({
    baseURL:"http://6727af6c270bd0b975534fa0.mockapi.io/api/v1",
    withCredentials:false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET, PUT, POST'
      },
  
})

// app.interceptors.request.use()

// app.interceptors.response.use(

//     (res)=> res,
//     (err)=>{
//         const orginalConfig= error.config;

//     }
//     )

const http= {
    get:app.get,
    post:app.post,
    delete:app.delete,
    put:app.put,
    patch:app.patch
} 

export default http