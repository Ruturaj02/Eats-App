import { useState } from "react";

const AddFoodItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error,setError] = useState(false);

  const handleAddFood = async () => {
    console.log({ name, price, path, description });
    if(!name || !price || !path || !description){
        setError(true);
        return false;
    }else{
        setError(false);
    }
    let resto_id;
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    if (restaurantData) {
      resto_id = restaurantData._id;
    }
    let response = await fetch("http://localhost:3000/api/restaurant/foods", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        img_path: path,
        description,
        resto_id,
      }),
    });
    response = await response.json();
    if (response) {
      alert("Food item Added");
    }else{
        alert("Not added food item");
    }
  };
  return (
    <>
      <div className="container">
        <h1>Add Food Item</h1>
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
          <button onClick={handleAddFood} className="button">
            Add Food
          </button>
        </div>
      </div>
    </>
  );
};

export default AddFoodItem;
