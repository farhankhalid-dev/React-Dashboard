import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const SubmitHandler = () => {
    alert("This is a placeholder");
  };
  return (
    <div className="Sign--cta">
      <div className="Form-cta">
        <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="email@example.com" />
        <input type="password" placeholder="password" />
        <button onClick={SubmitHandler}>Sign Up</button>
      </form>
      </div>
      <NavLink to="/" style={{ color: "black" }}>Return to Home</NavLink>
    </div>
  );
};

export default SignUp;
