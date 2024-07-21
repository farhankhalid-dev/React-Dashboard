import React from "react";
import Header from "./Header.jsx";
// import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import "../Styling/Layout.css";

const Layout = () => {
  return (
    <div className="Layout-cta">
      <Header />
      <main className="Main-cta">
        <Outlet />
      </main>
     {/* <footer className="Footer-cta"> <Footer /> </footer> */}
    </div>
  );
};

export default Layout;
