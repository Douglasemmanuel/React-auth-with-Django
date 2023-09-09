import React,{useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate ,Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import AuthenticatorForm from "./AuthenticatorForm";
import { setAuth } from "../../redux/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const [loginData , setLoginData] = useState<{
    id:number;
    secret? : string;
    otpauth_url? : string;
    }>({
      id:0
  });
  const success = ()=>{
    setRedirect(true);
    dispatch(setAuth(true));
  }   
  // const [email, setEmail] = useState("");
  // const [password, setpassword] = useState("");
  // const submit = async (e:SyntheticEvent) => {
  //   e.preventDefault();

  //  const {data} = await axios.post("login",{
  //     email,
  //     password,
  //   } , {withCredentials:true});

  //   axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    
    // setRedirect(true);
  // };
  if (redirect) {
    return <Navigate to="/"/>;
  }
 

  let form ;
  if(loginData?.id === 0){
    form = <LoginForm loginData={setLoginData} success={success}/>
   
  }else{
    form = <AuthenticatorForm LoginData={loginData} success={success}/>
  }
  return (
    <div className="login">
      {form}
    </div>
  );
};

export default Login;