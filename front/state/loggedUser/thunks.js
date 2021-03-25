import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const register= createAsyncThunk("REGISTER_REQUEST", (data)=>{
    return axios.post("/api/auth/register", data).then((respuesta)=>[])
  })


export const login= createAsyncThunk("LOGIN_REQUEST", (data)=>{
  return axios
      .post("/api/auth/login", data)
      .then((respuesta) =>  respuesta.data)
})


