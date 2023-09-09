import React from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/login/Login';
import Register from './Components/Register';
import Nav from './Components/Nav';
import Forgot from './Components/Forgot';
import Reset from './Components/Reset';
// import Signin from './Components/login/Signin';
import './interceptors/axios';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Nav/>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/signin" element={<Signin/>}/> */}
          <Route path="/forgot" element={<Forgot/>}/>
          <Route path="/reset/:token" element={<Reset/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
