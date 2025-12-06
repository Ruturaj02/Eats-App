"use client";
import CustomerHeader from "@/app/_components/CustomerHeader";
import Footer from "@/app/_components/Footer";
import { useEffect, useState } from "react";

const page = (props) => {
  const name = props.params.name;
  const [restaurantDetails, setRestaurantDetails] = useState();
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    loadRestaurantDetails();
  }, []);

  const loadRestaurantDetails = async () => {
    const id = props.searchParams.id;
    // console.log(id);
    let response = await fetch(`http://localhost:3000/api/customer/${id}`);
    response = await response.json();
    // console.log(response);
    if (response.success) {
      setRestaurantDetails(response.details);
      setFoodItems(response.foodItems);
    }
  };

  return (
    <div>
      <CustomerHeader />
      <div className="restaurant-page-banner">
        <h1>{decodeURI(name)}</h1>
      </div>
      <div className="details-wrapper">
        <h3>Contact : {restaurantDetails?.contactNumber}</h3>
        <h3>City : {restaurantDetails?.city}</h3>
        <h3>Address : {restaurantDetails?.address}</h3>
        <h3>Email : {restaurantDetails?.email}</h3>
      </div>
      <div className="food-list-wrapper">
        {foodItems.length > 0 ? (
          foodItems.map((item, i) => (
            <div key={i} className="list-item">
              <div>
                <img
                  style={{ width: 100 }}
                  src={item.img_path}
                  alt="loading..."
                />
              </div>
              <div>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div className="description">{item.description}</div>
                <button>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <h1 style={{textAlign:"center"}}>No food items available.</h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default page;
