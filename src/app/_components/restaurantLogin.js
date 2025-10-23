"use client";

import { useState } from "react";

const RestaurantLogin = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [error,setError] = useState(false);
  
  const handleLogin = (e) => {
    e.preventDefault();
    if(!email || !password){
      setError(true);
    }else{
      setError(false);
    }
    console.log(email,password);
  }
  return (
    <>
      <h3>Login</h3>
      <div>
        <form>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Email id "
              className="input-field"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            {error && !email && <span className="input-error">Email is required</span>}
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Enter password"
              className="input-field"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            {error && !password && <span className="input-error">Password is required</span>}
          </div>
          <div className="input-wrapper">
            <button className="button" type="submit" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RestaurantLogin;
