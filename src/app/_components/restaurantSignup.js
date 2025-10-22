"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const router = useRouter();
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignup = async (e) => {
     e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
    }
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !name ||
      !city ||
      !address ||
      !contact
    ) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    console.log(
      email,
      password,
      confirmPassword,
      name,
      city,
      address,
      contactNumber
    );
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        name,
        city,
        address,
        contactNumber,
      }),
    });
    response = await response.json();
    // console.log(response);
    if (response.success) {
      // alert("Restaurant registered successfully");
      // console.log(response);
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
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
            {error && !email && (
              <span className="input-error">Please Enter a valid Email</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Enter password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <span className="input-error">
                Password and confirm password not match
              </span>
            )}
            {error && !password && (
              <span className="input-error">Please Enter a valid Password</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Confirm password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {passwordError && (
              <span className="input-error">
                Password and confirm password not match
              </span>
            )}
            {error && !confirmPassword && (
              <span className="input-error">
                Please Enter a valid Confirm Password
              </span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter restaurant name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error && !name && (
              <span className="input-error">
                Please Enter a valid Restaurant Name
              </span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter City"
              className="input-field"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {error && !city && (
              <span className="input-error">Please Enter a valid City</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Full Address"
              className="input-field"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {error && !address && (
              <span className="input-error">Please Enter a valid Address</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter contact number"
              className="input-field"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            {error && !contactNumber && (
              <span className="input-error">
                Please Enter a valid Contact Number
              </span>
            )}
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
