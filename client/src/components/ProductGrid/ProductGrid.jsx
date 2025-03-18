import React from "react";
import { Link } from "react-router-dom";
import '../Global/Style.css';
import '../ProductGrid/ProductGrid.css';

function ProductList({ products, getSQLiteTimestamp }) {

  const newProductBanner = (product, getSQLiteTimestamp) => {
    let isNew = false;

    const productDate = new Date(product.created_at);  
    const currentDate = new Date(getSQLiteTimestamp());

    const diffInMs = currentDate - productDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    if (diffInDays <= 7) {
        isNew = true;
    }

    return isNew; 
  };


  const isProductDateInFuture = (product) => {
    const productDate = new Date(product.created_at);
    const currentDate = new Date(getSQLiteTimestamp());
    return productDate > currentDate; 
  };

  const validProducts = products.filter(product => !isProductDateInFuture(product));

  const placeholderCount = Math.max(0, 8 - validProducts.length);
  const fillerProducts = Array(placeholderCount).fill(null);

  const displayProducts = [...validProducts, ...fillerProducts];

  return (
    <div className="main">
      <h2 id="main-h2-nonvisible">Our products</h2>
      <div className="product-grid">
        {displayProducts.slice(0, 8).map((product, index) => {
          if (!product) {
            return (
              <article className="main-item" key={`placeholder-${index}`}>
                <div className="main-item-img placeholder"></div>
                <div className="main-item-description placeholder"></div>
              </article>
            );
          }

          const isNew = newProductBanner(product, getSQLiteTimestamp); 

          return (
            <article className="main-item" key={product.id}>
              <div className="main-item-img">
                {isNew ? (
                  <div className="new-icon">
                    <p>Nyhet!</p>
                  </div>
                ) : (
                  <div className="new-icon-hidden">
                    <p>Nyhet!</p>
                  </div>
                )}
                <Link to={`/products/${product.item_url}`}>
                  <img className="fashion-img" src={product.item_image} alt={product.item_name} />
                </Link>
                <Link className="like-button-filled" to="#">
                  <img className="black-heart" src="/images/heart-blanc-svg.svg" alt="Like" />
                </Link>
              </div>
              <div className="main-item-description">
                <h3 className="clothes-item">{product.item_name}</h3>
                <span className="price">{product.item_price} SEK</span>
                <span className="clothes-brand">{product.item_brand}</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;

