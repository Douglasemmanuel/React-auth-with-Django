import React, { SyntheticEvent,useState } from 'react';
import axios from 'axios'
const Forgot = () => {

    const [email,setEmail] = useState('');
    const [notify , setNotify]  = useState({
        show:false,
        error:false,
        message:''
    });

    const submit = async (e:SyntheticEvent) =>{
        e.preventDefault();

        try{
            await axios.post('forgot',{email});
            setNotify({
                show:true,
                error:false,
                message:'Please Check your Email.'
            });
        }catch(e){
            setNotify({
                show:true,
                error:true,
                message:'An Error has Occured .'
            });

        }
    }
    let info;
    if(notify.show){
        info = <div className={notify.error ? 'alert alert-danger' : 'alert alert-sucess'} role='alert'>
                {notify.message}
        </div>
    }
  return (
    <div>
         <main className="form-signin w-100 m-auto">
            {info}
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please put your Email</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary mt-1" type="submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  )
}

export default Forgot