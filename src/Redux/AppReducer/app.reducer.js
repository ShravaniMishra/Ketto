import * as types from "./app.actionTypes";

const initialState = {
  funds: [],
  isLoading: false,
  isError: false,
  loadingState:false,


  addingdatasuccess:false,
  addingdatafailed:false,
  addingdatarequest:false
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_DATA_SUCCESS: {
      return {
        ...state,
        funds: payload,
        isLoading: false,
        isError: false,
      };
    }

    case(types.CHANGE_LOADING):{
      return{
        ...state,
        loadingState:payload
      }
    }
    case(types.GET_DATA_REQUEST):{
      return{
        ...state,
        isLoading: true,
      };
    }
    case types.GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.POST_DATA_REQUEST: {
      return {
        ...state,
         addingdatarequest:true
      };
    }
    case types.POST_DATA_SUCCESS: {
      return {
        ...state,
         addingdatarequest:false,
         addingdatasuccess:true
      };
    }
    case types.POST_DATA_FAILURE: {
      return {
        ...state,
         addingdatarequest:false,
         addingdatasuccess:false,
         addingdatafailed:true
      };
    }
    default:
      return state;
  }
};
