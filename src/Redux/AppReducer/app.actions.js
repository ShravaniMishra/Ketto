// https://qr1zme.sse.codesandbox.io/funds

import axios from "axios";
import * as types from "./app.actionTypes";

export const getdatarequest = () => {
  return {
    type: types.GET_DATA_REQUEST,
  };
};

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

export const adddatarequest = () => {
    return {
      type: types.POST_DATA_REQUEST,
    };
  };
  
  export const adddatafailure=()=>{
      return{
          type:types.GET_DATA_FAILURE
      }
  }
  export const adddatasuccess=(payload)=>{
      return{
          type:types.GET_DATA_SUCCESS,
          payload
      }
  }
export const postdata=(data)=>(dispatch)=>{
    console.log(data)
        dispatch(adddatarequest())
       return axios.post("https://qr1zme.sse.codesandbox.io/funds",data).then((res)=>{

            dispatch(getdata())

        }).catch((err)=>{
            dispatch(adddatafailure())
        })
}

export const changeloadin=(payload)=>{
    return{
        type:types.CHANGE_LOADING,
        payload
    }
}
export const getdata=(filter,location,limit)=>(dispatch)=>{
    
    if(filter&&filter!="all"){
        dispatch(getdatarequest())
    return axios.get(`https://qr1zme.sse.codesandbox.io/funds?category=${filter}&_limit=${limit}`).then((res)=>{
         
        dispatch(getdatasuccess(res.data))
    }).catch((err)=>{
        console.log(err)
        dispatch(getdatafailure())
    })
    }
    
    else{
        dispatch(getdatarequest())
        return axios.get(`https://qr1zme.sse.codesandbox.io/funds?_limit=${limit}`).then((res)=>{
            
            dispatch(getdatasuccess(res.data))
        }).catch((err)=>{
            console.log(err)
            dispatch(getdatafailure())
    })
    }
    
}

