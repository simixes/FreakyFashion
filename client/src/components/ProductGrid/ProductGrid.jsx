import React from "react";
import '../Global/Style.css';
import '../ProductGrid/ProductGrid.css'

function ProductList({ products }) {
  return (
    <div className="main">
      <h2 id="main-h2-nonvisible">Our products</h2>
      <div className="product-grid">
        {products.slice(0, 8).map((product) => (
          <article className="main-item" key={product.id}>
            <div className="main-item-img">
              {product.newItem ? (
                <div className="new-icon">
                  <p>Nyhet!</p>
                </div>
              ) : (
                <div className="new-icon-hidden">
                  <p>Nyhet!</p>
                </div>
              )}
              <a href={`/products/${product.item_url}`}>
                <img className="fashion-img" src={product.item_image} alt={product.item_name} />
              </a>
              <a className="like-button-filled" href="#">
                <img className="black-heart" src="/images/heart-blanc-svg.svg" alt="Like" />
              </a>
            </div>
            <div className="main-item-description">
              <h3 className="clothes-item">{product.item_name}</h3>
              <span className="price">{product.item_price} SEK</span>
              <span className="clothes-brand">{product.item_brand}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ProductList;