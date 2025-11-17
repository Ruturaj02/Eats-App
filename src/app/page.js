"use client";
import { set } from "mongoose";
// import styles from "./page.module.css";
import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    loadLocations();
  }, []);

  const loadLocations = async () => {
    let response = await fetch(`http://localhost:3000/api/customer/locations`);
    response = await response.json();
    if (response.success) {
      setLocations(response.result);
    }
  };
  // console.log(locations);
const handleListItem=(item)=>{
  setSelectedLocation(item);
  setShowLocations(false);
}


  return (
    <div>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>EATS App</h1>
        <div className="input-wrapper">
          <input
            type="text"
            onClick={()=>setShowLocations(true)}
            value={selectedLocation}
            className="select-input"
            placeholder="Select place"
          />
          <ul className="location-list">
            {showLocations && locations.map((item,i) => (
              <li key={i} onClick={()=>handleListItem(item)}>
                {item}
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="search-input"
            placeholder="Enter food or restaurant name"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
