import React from "react";
import "./Home.css";
import LandingPage from "../../components/landing-page/LandingPage";
import Features from "../../components/features/Features";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
