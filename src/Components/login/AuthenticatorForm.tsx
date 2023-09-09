import React,{SyntheticEvent,useState,useEffect, ReactElement} from 'react'
import axios from 'axios'
import qrcode from 'qrcode'
const AuthenticatorForm = (props:{
    LoginData:{
    id:number;
    secret?: string;
    otpauth_url?: string;
},
    success:Function
}) => {
    const [code , setcode] = useState('');
    const [img,setimg] = useState<ReactElement |  null >(null);
        useEffect(()=>{
            if(props.LoginData.otpauth_url){
                qrcode.toDataURL(props.LoginData.otpauth_url,(err,data)=>{
                    setimg(<img src={data} style={{width:'100%', margin:'auto'}}/>)

                })

            }
        },[props.LoginData.otpauth_url]);
    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        const {data,status} =  await axios.post('two-factor',{
          ...props.LoginData,
          code
      },{withCredentials:true});
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      if (status === 200){
        props.success();
      }
    }
    
  return (
    <>
    <main className="form-signin w-100 m-auto">
    <form onSubmit={submit}>
    <h1 className="h3 mb-3 fw-normal">Please insert your authenticator code</h1>

    <div className="form-floating">
      <input
        type="text"
        className="form-control"
        id="floatingInput"
        placeholder="6 digits code"
        onChange={(e) => setcode(e.target.value)}
      />
      <label htmlFor="floatingInput">6 didits code</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">
      Submit
    </button>
  </form>
    {img}
  </main>
  </>
  )
}

export default AuthenticatorForm