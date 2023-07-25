import React, { useContext, useEffect, useState } from "react";
import "./Menu.css";
import ClipLoader from "react-spinners/ClipLoader";

import FoodItemCard from "../../components/food-item-card/FoodItemCard";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import { CustomContext } from "../../contexts/CustomContext";
import { useFetch } from "../../custom hooks/useFetch";

const Menu = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useFetch("https://food-api-98fq.onrender.com/api/v1/food/getItems");

  const { menuItems } = useContext(CustomContext);

  useEffect(() => {
    if (menuItems.length > 0) {
      setIsLoading(false);
    }
  },[menuItems])

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="loading-div">
          <ClipLoader color="#000000" loading={isLoading} />
        </div>
      ) : (
        <section className="menu-bg">
          {menuItems.map((item,index) => 
          (
            <FoodItemCard 
            id={item._id}
            image={item.image_src}
            name={item.name}
            price={item.price}
            index={index}
            item={item} 
            key={index}
            />
          ))}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Menu;
