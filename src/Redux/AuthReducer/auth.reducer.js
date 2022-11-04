import { loadData } from "../../utils/localStorage";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./auth.actionTypes";

const initialState = {
  isAuth: loadData("key")?true: false,
  token:loadData("key")||"",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading:true,
        isError:false,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth:true,
        token:loadData("key"),
        isLoading:false,
        isError:false,
      }   
    case LOGIN_ERROR:
    return {
      ...state,
      isLoading:false,
      isError:true,
    }  
    case LOGOUT:
      return {
        ...state,
        isAuth:false,
        token:loadData("key"),
        
      }
    default:
      return state;
  }
};
