import React from "react";
import { useCart } from "../../context/CartContext"; // Uncomment this line
import "./style.css";

import { useNavigate } from "react-router-dom";


const Popup = ({ onClose }) => {
    const navigate = useNavigate()
  const { cart, increment, decrement } = useCart();

  // Convert cart object to array of items with qty > 0
  const items = Object.entries(cart).filter(([_, item]) => item.qty > 0);

  // Calculate total
  const total = items.reduce(
    (sum, [_, item]) => sum + item.qty * item.price,
    0
  );

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3 className="page-heading">Order Summary</h3>

        {items.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          items.map(([name, item]) => (
            <div className="cart-popup" key={name}>
              <p className="productName">{name}:</p>
              <span className="qty">{item.qty}</span>
              <div className="btns">
                <button
                  onClick={() => increment(name, item.price)}
                  className="increment btn"
                >
                  +
                </button>
                <button
                  onClick={() => decrement(name)}
                  className="decrement btn"
                >
                  -
                </button>
              </div>
            </div>
          ))
        )}

        <p>Total (INR): ₹{total}</p>

        <div className="popup-buttons">
          <button
            className="checkout-btn"
            onClick={() => {
              onClose();
              navigate("/thankyou");
            }}
          >
            Save and Checkout
          </button>

          <button onClick={onClose} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
