import React, { SyntheticEvent , useState } from 'react'
import axios from 'axios'
import { useParams , Navigate } from 'react-router-dom';
const Reset = () => {
    const [password, setpassword] = useState("");
    const [passwordConfirm, setpasswordConfirm] = useState("");
    const [redirect , setRedirect] = useState(false);
    const {token} = useParams();
    const submit = async (e:SyntheticEvent) =>{
       e.preventDefault();

       await  axios.post('reset',{
          token,
          password,
          password_confirm :passwordConfirm
       });
        setRedirect(true);
      
    };
    if(redirect){
      return <Navigate to='/login'/>;
    }
  return (
        <div>
         <main className="form-signin w-100 m-auto">
         <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please Reset Your Password</h1>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password confirm"
              onChange={(e) => setpasswordConfirm(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password Confirm</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary mt-1" type="submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  )
}

export default Reset