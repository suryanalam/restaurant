import React, { useContext } from "react";
import axios from "axios";
import "./CategoryCard.css";
import { CustomContext } from "./../../contexts/CustomContext";

const CategoryCard = ({ title, id }) => {
  const { setFilteredMenu } = useContext(CustomContext);

  const handleFetchByCategory = async (e) => {

    let category = e.target.value.replaceAll(" ", "").toLowerCase();

    const filteredData = await axios.get(
      `https://notes-app-0wxo.onrender.com/food/categories/${category}`
    );

    if (filteredData.data.data.length > 0) {
      setFilteredMenu(filteredData.data.data);
    } 
    else {
      setFilteredMenu([]);
    }
    
  };
  return (
    <div className="category-card-bg" key={id}>
      <button onClick={handleFetchByCategory} value={title}>
        {title}
      </button>
    </div>
  );
};

export default CategoryCard;
