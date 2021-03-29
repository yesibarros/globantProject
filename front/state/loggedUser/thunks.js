import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";






export const register= createAsyncThunk("REGISTER_REQUEST", (data)=>{
    return axios.post("/api/auth/register", data).then((respuesta)=>[])
  })


export const login= createAsyncThunk("LOGIN_REQUEST", (data)=>{
    
      return axios
        .post(`http://192.168.1.3:5000/api/auth/login`, {email:data.email, password:data.password})
        .then((respuesta) =>  respuesta.data)
      
   
  //CAMBIAR "192.168.1.3" por la ip de cada uno para que funcione en android. Si es con iphone, puede ir "localhost" como siempre
  
})


