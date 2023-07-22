import React from "react";
import './LandingPage.css'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <section className="landing-page-bg">
      <section className="left-div">
        <h2>
          Get your food, <br />
          <span className="title-span" data-text="fresh and tasty !!">
            fresh and tasty ...
          </span>
        </h2>
        <p className="desc-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="logout-btn" 
        onClick={()=>navigate('/menu')}
        >
          Order Now
        </button>
      </section>
      <section className="right-div">
        <img
          src={process.env.PUBLIC_URL + "assets/images/home-img.png"}
          alt="home-img"
        />
      </section>
    </section>
  );
};

export default LandingPage;
