import React from "react";
import { Link } from "react-router-dom"; // Importera Link från react-router-dom
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

  return (
    <div className="main">
      <h2 id="main-h2-nonvisible">Our products</h2>
      <div className="product-grid">
        {products.slice(0, 8).map((product) => {
          const isNew = newProductBanner(product, getSQLiteTimestamp); // 🔥 Anropa funktionen här!

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
