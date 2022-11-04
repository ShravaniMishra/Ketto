import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  
  const { isAuth } = useSelector((state) => state.AuthReducer);
  const location = useLocation();
 

  if (isAuth==true) {
     
    return children;
  } else {
    
    return  <>

       <Navigate to="/" state={{ from: location }} replace/>
        {alert("Please Login or Sign up") }
       
       </>
  
  }
};

export default RequiredAuth;
