import React from "react";
import { Link } from "react-router-dom"; // Importera Link från react-router-dom
import '../Global/Style.css';

function ProductDetails({ product }) {

  const addToBasket = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8000/api/basket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId: product.id }),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <section className="product">
        <div className="product-item" id="product-img">
          <img
            id="actual-product-img"
            src={`/${product.item_image}`}
            alt={product.item_name}
          />
          <Link className="product-button-heart" to="#">
            <img
              className="product-heart"
              src="/images/heart-blanc-svg.svg"
              alt="Like"
            />
          </Link>
        </div>
        <div className="product-item" id="product-text">
          <h1>{product.item_name}</h1>
          <p className="clothes-brand">{product.item_brand}</p>
          <p id="description-item1">{product.item_description}</p>
          <p className="price">{product.item_price} SEK</p>
          <form onSubmit={addToBasket}>
            <input type="hidden" name="productId" value={product.id} />
            <button type="submit" className="basket-button1">
            Lägg i varukorg
            </button>
    </form>
          
        </div>
    </section>
  );
}

export default ProductDetails;
