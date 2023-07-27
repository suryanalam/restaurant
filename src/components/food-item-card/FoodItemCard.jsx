import React, { useContext, useEffect } from "react";
import { toast } from 'react-toastify';
import "./FoodItemCard.css";

import { CustomContext } from "../../contexts/CustomContext";

const FoodItemCard = ({item, id, image, name, price}) => {

  const { cartItems, setCartItems} = useContext(CustomContext);

  const cartData = JSON.parse(localStorage.getItem('cartData'))

  const addToCart = (e) => {

    if(cartData){

        console.log('cartData is available in localstorage');

        let itemExist = cartItems.find((item)=>{
          if(item._id === id){
            item.quantity += 1;
            return item;
          }else{
            return null;
          }
        })

        console.log(itemExist,'itemExist in cart')

        if(itemExist !== undefined){
          console.log('updating item in cart')
          let updatedCart = [...cartItems];
          localStorage.setItem('cartData',JSON.stringify(updatedCart))
          toast.success('Item quantity updated in cart');
        }

        else{
          console.log('creating new item in cart')
          let newCartItem = item;
          newCartItem.quantity = 1;
          console.log(newCartItem,'newCartItem');
          let updatedCart = [...cartItems, newCartItem];
          console.log(updatedCart,'updatedCart');
          setCartItems(updatedCart);
          localStorage.setItem('cartData',JSON.stringify(updatedCart));
          toast.success('Item added to cart');
        }

    }

    else{
      console.log('adding first item when no data in localstorage')
      let newCartItem = item;
      newCartItem.quantity = 1;
      console.log(newCartItem,'newCartItem');
      let updatedCart = [...cartItems, newCartItem];
      console.log(updatedCart,'updatedCart');
      setCartItems(updatedCart);
      localStorage.setItem('cartData',JSON.stringify(updatedCart));
      toast.success('Item added to cart');
    }

  };

  useEffect(() => {
    console.log(cartData,'cartData from localstorage');
  },[cartData])

  
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
