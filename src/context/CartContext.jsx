import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const increment = (name, price) => {
    setCart((prev) => {
      const existing = prev[name] || { qty: 0, price };
      return {
        ...prev,
        [name]: {
          qty: existing.qty + 1,
          price: existing.price,
        },
      };
    });
  };

  const decrement = (name) => {
    setCart((prev) => {
      const existing = prev[name];
      if (!existing) return prev;

      const newQty = existing.qty - 1;
      if (newQty <= 0) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [name]: {
          ...existing,
          qty: newQty,
        },
      };
    });
  };

  return (
    <CartContext.Provider value={{ cart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
