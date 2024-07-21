import React from "react";

const ProductCards = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h2>{product.category.toUpperCase()}</h2>
        <span className="rating">Rating: {product.rating.rate}</span>
        <span className="stock">Stock: {product.rating.count}</span>
        <span className="price">Price: ${product.price}</span>
    </div>
  );
};

export default ProductCards;
