import React from "react";
import "./FeatureCard.css";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PaidIcon from "@mui/icons-material/Paid";

const FeatureCard = ({ id, icon, name, desc }) => {
  return (
    <>
      <section className="feature-card-bg">
        <div className="feature-icons-div">
          <RocketLaunchIcon
            className="feature-icons"
            sx={{ color: "orange", fontSize: 50 }}
          />
        </div>
        <h4 className="feature-name">Fast Delivery</h4>
        <p>we deliver your order in 30 minutes</p>
      </section>
      <section className="feature-card-bg">
        <div className="feature-icons-div">
          <RestaurantMenuIcon
            className="feature-icons"
            sx={{ color: "orange", fontSize: 50 }}
          />
        </div>
        <h4 className="feature-name">Fresh Food</h4>
        <p>we serve you with the best and fresh food</p>
      </section>
      <section className="feature-card-bg">
        <div className="feature-icons-div">
          <PaidIcon
            className="feature-icons"
            sx={{ color: "orange", fontSize: 50 }}
          />
        </div>
        <h4 className="feature-name">Feasible Prices</h4>
        <p>we mimize your budget and maximize your taste</p>
      </section>
    </>
  );
};

export default FeatureCard;
