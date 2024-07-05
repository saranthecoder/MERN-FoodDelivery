import React, { useEffect, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");


  useEffect(() => {
    // Add the no-scroll class to the body when the component is mounted
    document.body.classList.add("no-scroll");

    // Remove the no-scroll class from the body when the component is unmounted
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState !== "Login" ? <input type="text" placeholder="Your name" required /> : <></> }

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>i agree the terms of use & privacy policy</p>
        </div>
        {
            currState==="Login"
            ? <p>Create a new account? <span onClick={()=> setCurrState("Sign Up")}>Click here</span></p>
            : <p>Already have a account? <span onClick={()=> setCurrState("Login")}>Login here</span></p>
        }
        
      </form>
    </div>
  );
};

export default LoginPopup;
