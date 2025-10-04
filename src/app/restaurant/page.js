"use client";

import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignup from "../_components/restaurantSignup";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <h1>Restaurant Login/signUp Page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignup />}

        <div>
          <button className="button-link" onClick={() => setLogin(!login)}>
            {login
              ? "New User? Create an Account"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
