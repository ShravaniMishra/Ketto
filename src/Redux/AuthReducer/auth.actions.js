import axios from "axios";
import { saveData } from "../../utils/localStorage";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.actionTypes";



const loginapi = (data) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .post("https://reqres.in/api/login", data)
    .then((r) =>{
      saveData(r.data.token)
       
       dispatch({ type: LOGIN_SUCCESS, payload: r.data })
      })
    .catch(() => dispatch({ type: LOGIN_ERROR }));
};

export const Logout = (dispatch) => {
  dispatch({ type: LOGOUT });
};
export default loginapi;
