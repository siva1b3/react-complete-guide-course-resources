/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from "react";
import { CartContext } from "../strore/ShoppingCartContext";

function Product({ id, image, title, price, description }) {
  const { onAddToCart } = useContext(CartContext);
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button type="button" onClick={() => onAddToCart(id)}>
            Add to Cart
          </button>
        </p>
      </div>
    </article>
  );
}

export default Product;
