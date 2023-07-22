import React, { createContext, useState } from "react";

export const CustomContext = createContext();

export const CustomProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  return (
    <CustomContext.Provider
      value={{
        isLogin,
        setIsLogin,
        menuItems,
        setMenuItems,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};
