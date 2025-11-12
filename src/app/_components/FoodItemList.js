import { useEffect, useState } from "react"

const FoodItemList = () => {
    const [foodItems, setFoodItems] = useState()

    useEffect(() => {
        loadFoodItems();
    }, [])


    const loadFoodItems = async () => {
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
        const resto_id = restaurantData._id;
        let response = await fetch(`http://localhost:3000/api/restaurant/foods/${resto_id}`);
        response = await response.json();
        // console.log(response);
        if (response.success) {
            setFoodItems(response.result);
        } else {
            alert("Error while loading food items");
        }
    }


    const deleteItem = async(id)=>{
        let response = await fetch(`http://localhost:3000/api/restaurant/foods/${id}`,{
            method:"DELETE"
        });
        response = await response.json();
        if(response.success){
            loadFoodItems();
        }else{
            alert("Error while deleting item");
        }
    }
    return (
        <div>
            <h1>Food Items</h1>
            <table>
                <thead>
                    <tr>
                        <td>S.N</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Operations</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        foodItems && foodItems.map((item, i) => (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img src={item.img_path} alt="loading" /></td>
                                <td><button onClick={()=>deleteItem(item._id)}>Delete</button><button>Edit</button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default FoodItemList