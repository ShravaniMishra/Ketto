import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Input,
  Flex,
  Box,
} from "@chakra-ui/react";
 import {BsGoogle} from "react-icons/bs"
 import {FcGoogle} from "react-icons/fc"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginapi from "../Redux/AuthReducer/auth.actions"; 
import { Register } from "../Redux/Register/action";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectway, setway] = useState(false);
  const [otp, setotp] = useState(false);
  const [signup,setsignup] = useState(false)
  const registered=useSelector((state)=>state.RegisterReducer.registersuccessfull)
  const dispatch = useDispatch()
 
  const [loginuser,setloginuser] = useState({
    email:"eve.holt@reqres.in",
    password:"cityslicka",
  })
 
  const [registerdata,setregisterdata]=useState({
    email:"eve.holt@reqres.in",
    password:"pistol",
  })
  const handlelogin = () => {
    dispatch(loginapi(loginuser))
  }
 
useEffect(()=>{
  if(registered){
    setsignup(false)
    setway(!selectway)
  }
  else{
    setsignup(true)
     
  }
},[registered])
return (
    <>
      <Button
        tabIndex={-1}
        my={4}
        data-cy="add-product-button"
        onClick={onOpen}
        height={8} 
        fontWeight={400} 
        variant="ghost"  
        _hover={{background:"none"}}
      >
        Sign in
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay></ModalOverlay>
        <ModalContent
          style={{
            position: "fixed",
            width: "43434px",
            margin: "10% 49% 0% 27%",
          }}
        >
          <div
            style={{
              borderRadius: "1%",
              backgroundColor: "white",
              width: "53%",
              height: "63%",
              position: "fixed",
            }}
          >
            <ModalHeader
              style={{
                textAlign: "center",
                paddingLeft: "30px",
                fontSize: "x-large",
              }}
            >
              {signup===false ? "Login" : "Signup"}
            </ModalHeader>
            <ModalCloseButton onClick={() => setsignup(false)} style={{ fontSize: "large" }}></ModalCloseButton>
            <ModalBody pb={6}>
              <FormControl style={{ marginTop: "4%" }}>
                <Flex>
                  <div style={{ textAlign: "center",width:"47%" ,marginLeft:"2%"}}>
                    {signup === false ? <div>
                    {selectway === false ? (
                      <>
                        <Input
                          style={{ width: "100%", marginBottom: "5%" }}
                          data-cy="add-product-title"
                          placeholder="Mobile number"
                          name="title"
                          maxLength={10}
                          type={"number"}
                        />
                        {otp === true ? (
                          <>
                            <Input
                              style={{ width: "100%", marginBottom: "5%" }}
                              data-cy="add-product-title"
                              placeholder="Enter OTP"
                              maxLength={6}
                              name="title"
                            />
                          </>
                        ) : null}
                        <Button
                          style={{
                            width: "100%",
                            color: "white",
                            backgroundColor: "#01bfbd",
                          }}
                          onClick={() => setotp(!otp)}
                          data-cy="add-product-submit-button"
                        >
                          {otp !== true ? "Get OTP" : "Login"}
                        </Button>
                      </>
                    ) : (
                      <>
                        <Input
                          style={{ width: "100%", marginBottom: "5%" }}
                          data-cy="add-product-title"
                          placeholder="Email/Mobile number"
                          type={"email"}
                          value={loginuser.email}
                          onChange={(e) => setloginuser({...loginuser,email:e.target.value})}
                          name="title"
                        />
                        <Input
                          style={{ width: "100%", marginBottom: "5%" }}
                          data-cy="add-product-title"
                          placeholder="Password"
                          maxLength={8}
                          type={"password"}
                          value={loginuser.password}
                          onChange={(e) => setloginuser({...loginuser,password:e.target.value})}
                          name="title"
                        />
                        <Button
                          style={{
                            width: "100%",
                            color: "white",
                            backgroundColor: "#01bfbd",
                          }}
                          onClick={() => {setotp(!otp);handlelogin()}}
                          data-cy="add-product-submit-button"
                        >
                          Sign in
                        </Button>
                      </>
                    )}
                    </div> :  <>
                        <Input
                          
                          style={{ width: "100%", marginBottom: "5%" }}
                          data-cy="add-product-title"
                          placeholder="username"
                          type={"email"}
                          name="title"
                          
                        />
                        <Input
                         value={registerdata.email}
                          style={{ width: "100%", marginBottom: "5%" }}
                          data-cy="add-product-title"
                          placeholder="Email"
                          onChange={(e)=>{setregisterdata({...registerdata,email:e.target.value})}}
                          type={"email"}
                          name="title"
                        />
                         <Input
                          style={{ width: "100%", marginBottom: "5%" }}
                          data-cy="add-product-title"
                          placeholder="Password"
                          maxLength={8}
                          type={"password"}
                          value={registerdata.password}
                          onChange={(e)=>{setregisterdata({...registerdata,password:e.target.value})}}
                          name="title"
                        />
                        <Button
                          style={{
                            width: "100%",
                            color: "white",
                            backgroundColor: "#01bfbd",
                          }}
                          onClick={() =>{
                             dispatch(Register(registerdata))
                             setregisterdata({email:"",password:""})
                            } }
                          data-cy="add-product-submit-button"
                        >
                          Sign up
                        </Button>
                      </>}
                    


                    <div style={{ textAlign: "center" }}>
                     {signup === false ? <> <p
                        onClick={() => setway(!selectway)}
                        style={{
                          cursor: "pointer",
                          fontSize: "small",
                          marginTop: "8%",
                          color: "#01bfbd",
                        }}
                      >
                        {selectway === false
                          ? "Login via Password"
                          : "Login via OTP"}
                      </p></> : null}
                      <p
                        style={{
                          fontSize: "12px",
                          marginTop: "8%",
                          fontFamily: "sans-serif",
                          color: "gray",
                        }}
                      >
                        By continuing you agree to our{" "}
                        <span style={{ color: "#01bfbd", cursor: "pointer" }}>
                          Terms of Service
                        </span>{" "}
                        and{" "}
                        <span style={{ color: "#01bfbd", cursor: "pointer" }}>
                          Privacy <br></br>Policy
                        </span>
                      </p>
                      {signup === false ? <>  <p
                        style={{
                          margin: "29px 0px 0px 0px",
                          color: "dimgray",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Not have a account?{" "}
                        <span onClick={() => setsignup(!signup)} style={{ color: "#01bfbd", cursor: "pointer" }}>
                          Signup{" "} 
                        </span>
                        from here
                      </p></> : <><p
                        style={{
                          margin: "29px 0px 0px 0px",
                          color: "dimgray",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Have an account?{" "}
                        <span onClick={() => setsignup(!signup)} style={{ color: "#01bfbd", cursor: "pointer" }}>
                          Login{" "} 
                        </span>
                        from here
                      </p></>}
                    
                    </div>
                  </div>

                  {/* rightside */}
                  <div
                    style={{ width: "50%", border: "1px ", display: "flex" }}
                  >
                    <div>
                      <div style={selectway || otp? {height: "120px"}:{height:"100px"}}></div>
                      <p style={{ margin: "10px 0px 10px 50px" }}>Or</p>
                    </div>
                    <button
                      style={
                        selectway || otp ? 
                        {
                        border: "",
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "large",
                        borderRadius: "2%",
                        marginLeft: "10%",
                        backgroundColor: "#4285f4",
                        height: "40px",
                        marginTop:"120px"
                      } : {
                        border: "",
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "large",
                        borderRadius: "2%",
                        marginLeft: "10%",
                        backgroundColor: "#4285f4",
                        height: "40px",
                        marginTop:"100px"
                      }}
                    >
                      {/* <img
                        style={{
                          cursor: "pointer",
                          width: "13%",
                          height: "78%",
                          margin: "2%",
                          
                        }}
                        src="https://e7.pngegg.com/pngimages/337/722/png-clipart-google-search-google-account-google-s-google-play-google-company-text.png"
                        alt="img"
                      /> */}
                      <Box p={2} background="white" >
                        <FcGoogle fontSize={28} m={5} />
                      </Box>
                     
                      <span
                        style={{
                          cursor: "pointer",
                          margin: "5px 10% 0px 0",
                          color: "white",
                          textAlign:"center"
                        }}
                      >
                         {signup === false ? "Sign in" : "Sign up"} with Google
                      </span>
                    </button>
                  </div>
                </Flex>
              </FormControl>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
