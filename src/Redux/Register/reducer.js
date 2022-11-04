

import * as types from "./actiontypes"
const initialState={
    registersuccessfull:false,
    registerfailed:false
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case(types.REGISTER_SUCCESS):{
            return{
                registerfailed:false,
                registersuccessfull:true
            }
        }
        case(types.REGISTER_FAILED):{
            return{
                registersuccessfull:false,
                registerfailed:true
            }
        }
        default:{
            return state
        }

    }
}