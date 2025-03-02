import React from "react";
import '../Global/Style.css';

function App() {

  const spots = [
    { id: 1, title: "Modeval med känsla", image: "/images/Products/spot-img1.jpg" },
    { id: 2, title: "Vår kollektion förenar komfort och elegans", image: "/images/Products/spot-img2.jpg" },
    { id: 3, title: "Sofistikerad och självsäker design", image: "/images/Products/spot-img3.jpg" },
  ];

  return (
    <main className="main-grid">
      {/* Hero-sektionen */}
      <section className="hero">
        <div className="hero-item" id="hero-img">
          <img src="/images/Products/hero-img.jpg" alt="placeholder" />
        </div>
        <div className="hero-item" id="hero-text">
          <h1>Upptäck stilens hjärta från FreakyFashion!</h1>
          <p>
            Våra kollektioner kombinerar modern elegans med tidlös design, perfekt för dig som vill sticka ut.
            Utforska premiumkvalitet och exklusiva plagg, inspirerade av storstadens pulserande energi.
            Välkommen till din nya garderob, där varje plagg speglar självsäkerhet och sofistikering.
          </p>
        </div>
      </section>

      {/* Spots-sektionen */}
      <section className="spots">
        {spots.map((spot) => (
          <div className="spots-item" key={spot.id}>
            <a href="#" className="spots-link">
              <h2>{spot.title}</h2>
              <img src={spot.image} alt={`spot${spot.id}`} />
            </a>
          </div>
        ))}
      </section>

      {/* Produktsektionen */}
      <section className="main">
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
      </section>
    </main>
  );
}

export default App;