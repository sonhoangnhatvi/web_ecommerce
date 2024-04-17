import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ImgBanner from "../assets/images/banner1.jpg";
import classes from "./LoginComponent.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { showProductDetailActions } from "../store";

const LoginComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modeLogin = searchParams.get("mode") === "login";

  const banner = {
    backgroundImage: `url(${ImgBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any form submission actions here (e.g., sending data to a server)

    // Show a confirmation prompt to the user
    if (window.confirm("Do you want to submit the form?")) {
      // User clicked "OK" in the prompt, proceed with the form submission

      // Get userArr from localStorage
      const userArr = JSON.parse(localStorage.getItem("userArr"))
        ? JSON.parse(localStorage.getItem("userArr"))
        : [];

      // Mode is sign up
      if (!modeLogin) {
        // Email will not be matched with existing accounts.
        if (
          userArr.filter((user) => user.email === formData.email).length > 0
        ) {
          toast.error("Email will not be matched with existing accounts!", {
            position: "top-center",
            autoClose: 5000, // 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        // When sign up, Password must be more than 8 characters.
        else if (formData.password.length <= 8) {
          toast.error("Password must be more than 8 characters!", {
            position: "top-center",
            autoClose: 5000, // 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          userArr.push(formData);
          localStorage.setItem("userArr", JSON.stringify(userArr));

          // Show notification after successful form submission
          toast.success("Sign up successfully!", {
            position: "top-center",
            autoClose: 5000, // 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          // Reset the form data after submission (if needed)
          setFormData({
            fullName: "",
            email: "",
            password: "",
            phone: "",
          });

          navigate("/login?mode=login");
        }
      }
      // Mode is login
      else {
        // Retrieve the user that matches the login information
        const userLoginInfo = userArr.filter(
          (user) =>
            user.email === formData.email && user.password === formData.password
        )[0];

        // Check user input name and password with userArr in localStorage
        if (userLoginInfo !== undefined) {
          // Notification login success
          toast.success("Login successfully!", {
            position: "top-center",
            autoClose: 5000, // 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          // Change isLogged to true
          dispatch(showProductDetailActions.ON_LOGIN());

          // Save current user to localStorage
          localStorage.setItem("currentUser", JSON.stringify(userLoginInfo));

          // navigate to home page
          navigate("/");
        } else {
          // Notification login error
          toast.error("Login error!", {
            position: "top-center",
            autoClose: 5000, // 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          // Reset the form data after submission (if needed)
          setFormData({
            fullName: "",
            email: formData.email,
            password: "",
            phone: "",
          });
        }
      }
    } else {
      // User clicked "Cancel" in the prompt, do nothing
    }
  };

  return (
    <div style={banner} className={classes.signin}>
      <div className={classes.container}>
        <p>{modeLogin ? "SIGN IN" : "SIGN UP"}</p>
        <form className={classes.form_signin} onSubmit={handleSubmit}>
          {!modeLogin && (
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            ></input>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          ></input>
          {!modeLogin && (
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            ></input>
          )}
          <button type="submit" className={classes.btn_signin}>
            {modeLogin ? "SIGN IN" : "SIGN UP"}
          </button>
        </form>
        <div className={classes.message_signup}>
          {modeLogin && <p>Create an account?</p>}
          <Link
            to={`?mode=${modeLogin ? "signup" : "login"}`}
            className={classes.signup_p}
          >
            {modeLogin ? "Sign up" : "Sign in"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
