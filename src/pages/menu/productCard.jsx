import React from "react";
import { useCart } from "../../context/CartContext.jsx";
import "./style.css";

const ProductCard = ({ name, price, image }) => {
  const { cart, increment, decrement } = useCart();
  const count = cart[name] || 0;

  return (
    <div className="product-card">
      <div className="image">
        <img src={`/images/${image}`} alt={name} />
      </div>
      <div className="product-info">
        <p>{name}</p>
        <span>Price: ₹{price}</span>

        {count > 0 && (
          <>
            <span>Total: {count}</span>
            <span>Cost (INR): {count * price}</span>
          </>
        )}

        <div className="btns">
          <button onClick={() => increment(name)} className="increment btn">+</button>
          <button onClick={() => decrement(name)} className="decrement btn">-</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
