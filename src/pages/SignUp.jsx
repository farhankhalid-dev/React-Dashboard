import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const SubmitHandler = () => {
    alert("This is a placeholder");
  };
  return (
    <div className="SU--ctn">
      <form>
        <input type="email" />
        <input type="password" />
        <button onClick={SubmitHandler}>Submit</button>
      </form>
      <NavLink to="/">Return to Home</NavLink>
    </div>
  );
};

export default SignUp;
