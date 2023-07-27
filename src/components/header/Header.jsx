import "./Header.css";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const navigate = useNavigate();
  let tokenData = localStorage.getItem("token");
  let payload;
  if (tokenData) {
    payload = JSON.parse(atob(tokenData.split(".")[1]));
  }

  const cartData = JSON.parse(localStorage.getItem("cartData"));
  const handleLogout = async () => {
    await localStorage.removeItem("token");
    toast.success("Logged out successfully");
    console.log("token from localstorage", localStorage.getItem("token"));
    navigate("/login");
  };

  return (
    <header className="header-bg">
      <section className="header-logo-div">
        <h3 className="logo-name">
          HUNGER
          <br />
          BURNERS
        </h3>
      </section>
      <nav className="nav">
        <NavLink className="nav-links" to="/">
          Home
        </NavLink>
        <NavLink className="nav-links" to="/menu">
          Menu
        </NavLink>
      </nav>
      <section className="header-profile-div">
        <p>Welcome,{payload.name}</p>
        <div className="header-cart-icon">
          <IconButton aria-label="cart">
            <Badge badgeContent={cartData?.length} sx={{color:'var(--white)'}} >
              <ShoppingCartIcon
                sx={{ fontSize: 25, color: "var(--white)" }}
                onClick={() => navigate("/cart")}
              />
            </Badge>
          </IconButton>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </section>
    </header>
  );
};

export default Header;
