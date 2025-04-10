import React from "react";
import { useCart } from "../../context/CartContext.jsx";
import "./style.css";

const ProductCard = ({ name, price, image }) => {
  const { cart, increment, decrement } = useCart();
  const qty = cart[name]?.qty || 0;

  return (
    <div className="product-card">
      <div className="image">
        <img src={`/images/${image}`} alt={name} />
      </div>
      <div className="product-info">
        <p>{name}</p>
        <span>Price: ₹{price}</span>

        {qty > 0 && (
          <>
            <span>Total: {qty}</span>
            <span>Cost (INR): {qty * price}</span>
          </>
        )}

        <div className="btns">
          <button onClick={() => increment(name, price)}>+</button>
          <button onClick={() => decrement(name)} disabled={qty === 0}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
