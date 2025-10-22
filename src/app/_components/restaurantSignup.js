"use client";
import { useState } from "react";

const RestaurantSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(
      email,
      password,
      confirmPassword,
      restaurantName,
      city,
      address,
      contactNumber
    );
    let response = await fetch("http://localhost:3000/api/restaurant",{
        method: "POST",
        body:JSON.stringify({email, password, restaurantName, city, address, contactNumber}),
    })
    response = await response.json();
    console.log(response);
    if(response.success){
        // alert("Restaurant registered successfully");
        console.log(response);
    }
  };
  return (
    <>
      <h3>SignUp</h3>
      <div>
        <form>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Email id "
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Enter password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Confirm password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter restaurant name"
              className="input-field"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter City"
              className="input-field"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Full Address"
              className="input-field"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter contact number"
              className="input-field"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <button className="button" onClick={handleSignup} type="submit">
              SignUP
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RestaurantSignup;