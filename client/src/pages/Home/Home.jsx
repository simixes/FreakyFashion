import React from "react";
// import "./Home.css";
import Hero from "../../components/Hero/Hero";         // Rätt relativ sökväg
import Spots from "../../components/Spots/Spots";       // Rätt relativ sökväg
import ProductGrid from "../../components/ProductGrid/ProductGrid"; // Rätt relativ sökväg

function Home({ products }) {
  return (
    <main className="main-grid">
      {/* Hero-sektionen */}
      <Hero />

      {/* Spots-sektionen */}
      <Spots />

      {/* Produkter */}
        <ProductGrid products={products} />
    </main>
  );
}

export default Home;
