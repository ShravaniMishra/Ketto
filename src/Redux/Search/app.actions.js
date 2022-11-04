// https://qr1zme.sse.codesandbox.io/funds

import axios from "axios"
import * as types from "./app.actionTypes"

export const getdatarequest=()=>{
    return{
            type:types.GET_DATA_REQUEST
    }
}

export const getdatafailure=()=>{
    return{
        type:types.GET_DATA_FAILURE
    }
}
export const getdatasuccess=(payload)=>{
    return{
        type:types.GET_DATA_SUCCESS,
        payload
    }
}
export const getdata=(filter)=>(dispatch)=>{
     
    if(filter&&filter!=="all"){
        dispatch(getdatarequest())
    return axios.get(`https://qr1zme.sse.codesandbox.io/funds?category=${filter}`).then((res)=>{
         
        dispatch(getdatasuccess(res.data))
    }).catch((err)=>{
        console.log(err)
        dispatch(getdatafailure())
    })
    }
    else{
        dispatch(getdatarequest())
        return axios.get(`https://qr1zme.sse.codesandbox.io/funds`).then((res)=>{
            
            dispatch(getdatasuccess(res.data))
        }).catch((err)=>{
            console.log(err)
            dispatch(getdatafailure())
    })
    }
    
}