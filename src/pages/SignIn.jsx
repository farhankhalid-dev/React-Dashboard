import React from "react";
import "../Styling/SignIn.css";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const SubmitHandler = () => {
    alert("This is a placeholder");
  };
  return (
    <div className="SI--cta">
      <div className="Form-cta">
        <h2>Log In</h2>
      <form>
        <input type="email" placeholder="email@example.com" />
        <input type="password" placeholder="password" />
        <button onClick={SubmitHandler}>Log In</button>
      </form>
      </div>
      <NavLink to="/" style={{ color: "black" }}>Return to Home</NavLink>
    </div>
  );
};

export default SignIn;
