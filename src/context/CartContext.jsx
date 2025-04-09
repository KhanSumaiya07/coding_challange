import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({}); // { "burger": 2, "pizza": 1, ... }

  const increment = (productName) => {
    setCart((prev) => ({
      ...prev,
      [productName]: (prev[productName] || 0) + 1,
    }));
  };

  const decrement = (productName) => {
    setCart((prev) => {
      const current = prev[productName] || 0;
      if (current <= 0) return prev;
      return {
        ...prev,
        [productName]: current - 1,
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
