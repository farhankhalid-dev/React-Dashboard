import "./Styling/App.css";
import Layout from "./components/Layout.jsx";
import P_Cards from "./components/ProductCards.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Orders from "./pages/Orders.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import D_Default from "./pages/DashboardDefault.jsx";
import Customers from "./pages/Customers.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<D_Default />} />
              <Route path="customers" element={<Customers />} />
              <Route path="orders" element={<Orders />} />
              <Route path="products" element={<Products />} />
            </Route>
            <Route path="about" element={<About />} />
          </Route>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
