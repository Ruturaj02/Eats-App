"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantLogin = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [error,setError] = useState(false);
  const router = useRouter();
  
  const handleLogin =async(e) => {
    e.preventDefault();
    if(!email || !password){
      setError(true);
      return false;
    }else{
      setError(false);
    }
    // console.log(email,password);
    let response = await fetch("http://localhost:3000/api/restaurant",{
      method:"POST",
      body:JSON.stringify({login:true,email,password})
    })
    response = await response.json();
    // console.log(response);
    if(response.success){
      const {result} = response;
      delete result.password;
      localStorage.setItem("restaurantUser",JSON.stringify(result));
      router.push("/restaurant/dashboard");
      // alert("Login Successful");

    }else{
      alert("Invalid Credentials");
    }
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
