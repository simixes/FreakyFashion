import React from "react";
import '../Global/Style.css';

function ProductDetails({ product }) {
  return (
    <section className="product">
        <div className="product-item" id="product-img">
          <img
            id="actual-product-img"
            src={`/${product.item_image}`}
            alt={product.item_name}
          />
          <a className="product-button-heart" href="#">
            <img
              className="product-heart"
              src="/images/heart-blanc-svg.svg"
              alt="Like"
            />
          </a>
        </div>
        <div className="product-item" id="product-text">
          <h1>{product.item_name}</h1>
          <p className="clothes-brand">{product.item_brand}</p>
          <p id="description-item1">{product.item_description}</p>
          <p className="price">{product.item_price} SEK</p>
          <button className="basket-button1">Lägg i varukorg</button>
        </div>
    </section>
  );
}

export default ProductDetails;
