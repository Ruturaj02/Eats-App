"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditFoodItem = (props) => {
  // console.log(props.params.id);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();


  useEffect(() => {
    handleLoadFoodItem();
  }, []);


  const handleLoadFoodItem = async () => {
    let response = await fetch(`http://localhost:3000/api/restaurant/foods/edit/${props.params.id}`);
    response = await response.json();
    if (response.success) {
      setName(response.result.name);
      setPrice(response.result.price);
      setPath(response.result.img_path);
      setDescription(response.result.description);
    }
  }

  const handleEditFood = async () => {
    // console.log({ name, price, path, description });
    if (!name || !price || !path || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    let response = await fetch(`http://localhost:3000/api/restaurant/foods/edit/${props.params.id}`,{
      method: "PUT",
      body:JSON.stringify({name,price,img_path:path,description})
    })
    response = await response.json();
    if(response.success){
      router.push('../dashboard');
    }else{
      alert("Failed to update food item");
    }
  };
  return (
    <>
      <div className="container">
        <h1>Edit Food Item</h1>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter food name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          {
            error && !name && <span className="input-error">* Enter valid name</span>
          }
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input-field"
          />
          {
            error && !price && <span className="input-error">* Enter valid price</span>
          }
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter image path"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            className="input-field"
          />
          {
            error && !path && <span className="input-error">* Enter valid image path</span>
          }
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
          />
          {
            error && !description && <span className="input-error">* Enter valid description</span>
          }
        </div>
        <div className="input-wrapper">
          <button onClick={handleEditFood} className="button">
            Update
          </button>
        </div>
        <div className="input-wrapper">
          <button onClick={() => router.push('../dashboard')} className="button">
            Dashboard
          </button>
        </div>
      </div>
    </>
  );
};

export default EditFoodItem;
