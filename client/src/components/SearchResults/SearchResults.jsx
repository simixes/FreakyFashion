import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../Global/Style.css";
import "../ProductGrid/ProductGrid.css";

function SearchResults({ products }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q") || "";

  const filteredProducts = products.filter(
    (product) =>
      product.item_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.item_description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      product.item_brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <h1 id="h1-search-results">
        Sökresultat för "<span>{searchTerm}</span>"
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="main">
          <h2 id="main-h2-nonvisible">Sökresultat</h2>
          <div className="product-grid">
            {filteredProducts.map((product) => (
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
                  <Link to={`/products/${product.item_url}`}>
                    <img
                      className="fashion-img"
                      src={product.item_image}
                      alt={product.item_name}
                    />
                  </Link>
                  <Link className="like-button-filled" to="#">
                    <img
                      className="black-heart"
                      src="/images/heart-blanc-svg.svg"
                      alt="Like"
                    />
                  </Link>
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
      ) : (
        <div className="main">
          <h2 id="main-h2-nonvisible">Inga produkter hittades</h2>
          <div className="product-grid">
            {" "}
            {/* Samma wrapper som i produktlistan */}
            <article className="main-item placeholder-item">
              <div className="main-item-img">
                <img
                  className="fashion-img"
                  src="https://placehold.co/1000x1200?text=No+item+found\nTry+Again"
                  alt="Ingen produkt"
                />
              </div>
              <div className="main-item-description">
                <h3 className="clothes-item">Ingen produkt hittades</h3>
                <span className="clothes-brand">Försök igen</span>
              </div>
            </article>
          </div>
        </div>
      )}
    </main>
  );
}

export default SearchResults;
