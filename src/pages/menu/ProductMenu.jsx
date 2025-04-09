import React from "react";
import ProductCard from "./productCard";
import feeds from "../../data/feeds.json";
import './style.css'

const ProductMenu = () => {
  console.log(feeds);
  return (
    <div className="menu-page">
      <div className="menu-grid">
      {feeds.map((item,index)=>(
        <ProductCard
        key={index}
        name={item.name}
        price={item.price}
        image={item.image}
        />
      ))}
      </div>
    </div>
  );
};

export default ProductMenu;
