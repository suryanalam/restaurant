import React, { useContext, useEffect, useState } from "react";
import "./Menu.css";
import ClipLoader from "react-spinners/ClipLoader";

import categories from "../../utils/categories";
import CategoryCard from "../../components/category-card/CategoryCard";
import FoodItemCard from "../../components/food-item-card/FoodItemCard";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import { CustomContext } from "../../contexts/CustomContext";
import { useFetch } from "../../custom hooks/useFetch";

const Menu = () => {
  const [isLoading, setIsLoading] = useState(true);

  useFetch("https://notes-app-0wxo.onrender.com/food");

  const { menuItems, filteredMenu } = useContext(CustomContext);

  useEffect(() => {
    if (menuItems.length > 0 || filteredMenu.length > 0) {
      setIsLoading(false);
    }
  }, [menuItems, filteredMenu]);

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="loading-div">
          <ClipLoader color="#000000" loading={isLoading} />
        </div>
      ) : (
        <section className="menu-bg">
          <div className="categories-bg">
            <h1 className="categories-heading">Categories</h1>
            <div className="categories-cards-div">
              {categories.map(({ id, icon, title }) => (
                <CategoryCard key={id} icon={icon} title={title} />
              ))}
            </div>
          </div>
          <div className="menu-div">
            {filteredMenu.length > 0
              ? filteredMenu.map((item, index) => (
                  <FoodItemCard
                    id={item._id}
                    image={item.imageUrl}
                    name={item.name}
                    price={item.price}
                    index={index}
                    item={item}
                    key={index}
                  />
                ))
              : menuItems.map((item, index) => (
                  <FoodItemCard
                    id={item._id}
                    image={item.imageUrl}
                    name={item.name}
                    price={item.price}
                    index={index}
                    item={item}
                    key={index}
                  />
                ))}
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Menu;
