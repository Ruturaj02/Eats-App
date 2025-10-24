import { useState } from "react"


const AddFoodItem = () => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [path,setPath] = useState('');
    const [description,setDescription] = useState('');
    const handleAddFood = ()=>{
        console.log({name,price,path,description});
    }
  return (
  <>
    <div className="container">
        <h1>Add Food Item</h1>
        <div className="input-wrapper">
        <input type="text" placeholder="Enter food name" value={name} onChange={(e)=>setName(e.target.value)} className="input-field" />
    </div>
     <div className="input-wrapper">
        <input type="text" placeholder="Enter Price" value={price} onChange={(e)=>setPrice(e.target.value)} className="input-field" />
    </div>
     <div className="input-wrapper">
        <input type="text" placeholder="Enter image path" value={path} onChange={(e)=>setPath(e.target.value)} className="input-field" />
    </div>
     <div className="input-wrapper">
        <input type="text" placeholder="Enter description" value={description} onChange={(e)=>setDescription(e.target.value)} className="input-field" />
    </div>
    <div className="input-wrapper">
        <button onClick={handleAddFood} className="button">Add Food</button>
    </div>
    </div>
    
  </>
  )
}

export default AddFoodItem