import * as types from "./app.actionTypes"

const initialState = {
  funds: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case(types.GET_DATA_SUCCESS):{
      return{
        ...state,
        funds:payload,
        isLoading:false,
      }
    }
    case(types.GET_DATA_REQUEST):{
      return{
        ...state,
        isLoading:true
      }
    }
    case(types.GET_DATA_FAILURE):{
      return{
        ...state,
        isLoading:false,
        isError:true
      }
    }
    default:
      return state;
  }
};
