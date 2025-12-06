"use client";
import { set } from "mongoose";
// import styles from "./page.module.css";
import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showLocations, setShowLocations] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadLocations();
    loadRestaurants();
  }, []);

  const loadLocations = async () => {
    let response = await fetch(`http://localhost:3000/api/customer/locations`);
    response = await response.json();
    if (response.success) {
      setLocations(response.result);
    }
  };

  const loadRestaurants = async (params) => {
    let url = `http://localhost:3000/api/customer`;
    if (params && params?.locations) {
      url = `${url}?location=${params.locations}`;
    } else if (params && params?.restaurant) {
      url = `${url}?restaurant=${params.restaurant}`;
    } else {

    }
    let response = await fetch(url);
    response = await response.json();
    if (response.success) {
      setRestaurants(response.result);
    }
  };

  // console.log(restaurants);
  // console.log(locations);
  const handleListItem = (item) => {
    setSelectedLocation(item);
    setShowLocations(false);
    loadRestaurants({ locations: item });
  };

  return (
    <div>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>EATS App</h1>
        <div className="input-wrapper">
          <input
            type="text"
            onClick={() => setShowLocations(true)}
            value={selectedLocation}
            className="select-input"
            placeholder="Select place"
          />
          <ul className="location-list">
            {showLocations &&
              locations.map((item, i) => (
                <li key={i} onClick={() => handleListItem(item)}>
                  {item}
                </li>
              ))}
          </ul>
          <input
            type="text"
            className="search-input"
            onChange={(e) => loadRestaurants({ restaurant: e.target.value })}
            placeholder="Enter food or restaurant name"
          />
        </div>
      </div>
      <div className="restaurant-list-container">
        {restaurants.map((item, i) => (
          <div key={i} onClick={()=>router.push(`explore/${item.name}?id=${item._id}`)} className="restaurant-wrapper">
            <div className="heading-wrapper">
              <h3>{item.name}</h3>
              <h5>Contact:{item.contactNumber}</h5>
            </div>
            <div className="address-wrapper">
              <div>{item.city},</div>
              <div className="address">
                {item.address}, Email:{item.email}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
