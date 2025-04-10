import React, { useState } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import logoIcon from '../../assets/restaurant_48px.svg';
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../../context/CartContext.jsx";
import Popup from "../summaryPopup/Popup.jsx";

const Navbar = () => {
  const location = useLocation();
  const showAuthLinks = location.pathname === '/' || location.pathname === '/Register';
  const { cart } = useCart();
  const totalUniqueItems = Object.values(cart).filter(item => item.qty > 0).length;


  const [showpopup, setshowpopup] = useState(false);

  const cartHandle = () => {
    setshowpopup(prev => !prev); // Toggle popup visibility
  };
  

  return (
    <div>
      <div className="navbar-wrapper">
        <Link to="Home" className="logo">
          <img src={logoIcon} alt="logo" className="logo-icon" />
          <span>Foot's Restaurant</span>
        </Link>

        <nav>
          {showAuthLinks && (
            <ul className="nav-container">
              <li>
                <Link to="Register">Sign</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>
          )}
        </nav>

        {totalUniqueItems > 0 && (
          <div onClick={cartHandle} className="cartIcon">
            <FaCartShopping size={22} color="#fff" />
            <span
              style={{
                background: "gray",
                border: "1px solid white",
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff"
              }}
            >
              {totalUniqueItems}
            </span>
          </div>
        )}
      </div>

      {showpopup && <Popup onClose={() => setshowpopup(false)} />}
    </div>
  );
};

export default Navbar;
