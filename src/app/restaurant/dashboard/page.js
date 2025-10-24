"use client";

import RestaurantHeader from "@/app/_components/RestaurantHeader";
import "../style.css";
import AddFoodItem from "@/app/_components/AddFoodItem";
import { useState } from "react";

const page = () => {
  const [addItem, setAddItem] = useState(false);
  return (
    <>
      <div>
        <RestaurantHeader />
        <button onClick={()=>setAddItem(true)}>Add Food</button>
        <button onClick={()=>setAddItem(false)}>Dashboard</button>
        {addItem ? <AddFoodItem /> : <h1>Welcome to Dashboard Page</h1>}
      </div>
    </>
  );
};

export default page;
