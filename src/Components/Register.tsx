import React, { useState, SyntheticEvent } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const Register = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);
  const submit = async (e:SyntheticEvent) => {
    e.preventDefault();

    await axios.post("register", {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirm: passwordConfirm,
    });
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="register">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <div className="form-floating">
            <input
              required
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="first Name"
              onChange={(e) => setfirstName(e.target.value)}
            />
            <label htmlFor="floatingInput">First Name</label>
          </div>
          <div className="form-floating">
            <input
              required
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="last Name"
              onChange={(e) => setlastName(e.target.value)}
            />
            <label htmlFor="floatingInput">Last Name</label>
          </div>
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
          <div className="form-floating">
            <input
              required
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password confirm"
              onChange={(e) => setpasswordConfirm(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password Confirm</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;