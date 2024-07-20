import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/Header.css";

const Header = () => {
  return (
    <header className="Header-cta">
      <div className="Header-logo">Example XYZ</div>
      <nav className="Header_Nav-cta">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Sign in</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
