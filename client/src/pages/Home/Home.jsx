import React from "react";
import Hero from "../../components/Hero/Hero";         
import Spots from "../../components/Spots/Spots";       
import ProductGrid from "../../components/ProductGrid/ProductGrid"; 
import { useEffect } from "react";

function Home({ products }) {

  useEffect(() => {
    document.title = "FreakyFashion"; 
  }, []); 

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
