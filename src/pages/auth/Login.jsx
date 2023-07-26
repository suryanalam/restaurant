import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [loginCredentials, setLoginCredentials] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("form data", loginCredentials);

    try {
      const loginData = await axios.post(
        `https://notes-app-0wxo.onrender.com/login`,
        loginCredentials
      );

      console.log("login data from response", loginData);

      if (loginData?.data.token) {
        console.log("token from response", loginData.data.token);
        localStorage.setItem("token", loginData.data.token);
        toast.success("Logged in successfully");
        console.log("token from localstorage", localStorage.getItem("token"));
        navigate("/");
      } else {
        toast.warning("Enter mail and password !!");
      }
    } catch (err) {
      //alert(err.response.data.message);
      toast.error(err.response.data.message);
    }
  };
  return (
    <div className="form-div-bg">
      <form className="form">
        <h3>Login</h3>
        <div className="form-group">
          <label htmlFor="mail">Email</label>
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
            id="password"
            placeholder="Eg: 6 digit(s) password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-lg-btn" onClick={handleLogin}>
          Login
        </button>
        <p>
          Don't have an account? &nbsp;
          <NavLink to="/signup" className="form-link">
            Signup
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
