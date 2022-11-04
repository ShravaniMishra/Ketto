import axios from "axios"
import * as types from "./actiontypes"
export const registersuccess=()=>{
    return {
        type:types.REGISTER_SUCCESS
    }
}
export const Register=(data)=>(dispatch)=>{
    // console.log(data)
    axios.post("https://reqres.in/api/register",data).then((res)=>{
        dispatch(registersuccess(res.data))
    }).catch((err)=>{
        console.log(err)
    })
}