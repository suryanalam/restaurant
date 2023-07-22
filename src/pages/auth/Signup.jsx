import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    mail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("form data", user);
    try {
      const userData = await axios.post(
        `https://notes-app-0wxo.onrender.com/signup`,
        user
      );

      if (userData.data.data) {
        console.log("user data from response", userData.data.data);
        navigate("/");
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <div className="form-div-bg">
      <form className="form">
        <h3>Signup</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Eg: John Smith"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Eg: abc@gmail.com"
            name="mail"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Eg: 6 digit(s) password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-lg-btn" onClick={handleSignup}>
          Signup
        </button>
        <p>
          Already have an account ?
          <NavLink to="/" className="form-link">
            &nbsp;login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Signup;
