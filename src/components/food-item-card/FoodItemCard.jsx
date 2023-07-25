import React, { useContext } from "react";
//import { useCart } from "react-use-cart";
import "./FoodItemCard.css";

import { CustomContext } from "../../contexts/CustomContext";

const FoodItemCard = ({image,name,price,key}) => {

  //const { addItem } = useCart();
  //console.log(item.id, 'from food item card');
  const { menuItems, cartItems, setCartItems } = useContext(CustomContext);

  
  const addToCart = async (e) => {

    console.log(key);

    const itemID = e.target.id;
    console.log("food item id from add to cart:", itemID);

    //returns an object of item details if item already exists in cart:
    const itemExist = cartItems.find((item) => item._id === itemID);

    //increase the quantity of item if it item exists in cart:
    if (itemExist) {
      const updatedCart = cartItems.map((item) =>
        item._id === itemID ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("CartData", JSON.stringify(updatedCart));
    }

    //add new item to cart if it doesn't exist in cart:
    else {
      const itemData = menuItems.find((item) => item._id === itemID);
      // fetching the details of item from menu:
      console.log("itemData from menuItems", itemData);

      let newCartItem;
      if (itemData) {
        newCartItem = {
          _id: itemData._id,
          image: itemData.image_src,
          name: itemData.name,
          price: itemData.price,
          quantity: 1,
        };
      }
      setCartItems([...cartItems, newCartItem]);
      localStorage.setItem(
        "CartData",
        JSON.stringify([...cartItems, newCartItem])
      );
    }
  };

  
  return (
    <div className="food-card">
      <div className="food-image-div">
        <img src={image} alt={name} />
      </div>
      <div className="food-details">
        <h2>{name}</h2>
        <p>${price}</p>
        <button onClick={addToCart} >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItemCard;
