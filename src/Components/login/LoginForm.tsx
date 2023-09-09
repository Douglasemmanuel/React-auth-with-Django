import React,{useState,SyntheticEvent} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import {GoogleLogin} from "@react-oauth/google"
import GoogleLogin from "react-google-login";
// import { GoogleLoginResponse } from "react-google-login";
// import { GoogleLoginResponseOffline } from "react-google-login";
export const LoginForm = (props:{
        loginData:Function
        success:Function
})=>  {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();
    
      const {data} = await axios.post("login",{
          email,
          password,
        } );
        
        props.loginData(data);
        
    };
    const onSuccess = async (goggleUser: any ) =>{
        const {status,data} = await axios.post('google-auth',{
          token:goggleUser.tokenId
        },{withCredentials:true});

        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
       
        if(status === 200){
          props.success();

        }
        console.log(goggleUser);
    }
    const onFailure = (e:any)=>{
      console.log(e.error);
      // alert(e.error);
    }
    const clientid = "716061718003-tm6l8fmspm9aruis53o9hv3rh5falekl.apps.googleusercontent.com"
    return(
        <>
        <main className="form-signin w-100 m-auto">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              required
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              required
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="mb-3">
            <Link to='/forgot'>Forgot Password</Link>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
        {/* <GoogleOAuthProvider
        clientId="716061718003-tm6l8fmspm9aruis53o9hv3rh5falekl.apps.googleusercontent.com"
        >
          <GoogleLogin
            render={(renderProps)=>(

            )

            }
            buttonText="login with Goggle"
            onError={()=>{
              console.log("faliure")
            }}
            onSuccess={onSuccess}
            // cookiePolicy="single_host_origin"
            // className="mt-3 w-100"
          />

        </GoogleOAuthProvider> */}
      <GoogleLogin 
      clientId="716061718003-tm6l8fmspm9aruis53o9hv3rh5falekl.apps.googleusercontent.com"
      buttonText="login with Goggle"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      className="mt-3 w-100"
      />
      </main>
      </>
    )
}