import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";

function Products({ products }) {
  let params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${params.item_url}`)
      .then((resp) => resp.json())
      .then((product) => {
        setProduct(product);
        document.title = product.item_name || "Laddar produkt...";
      })
      .catch((error) => {
        console.error("Error fetching product:", error); 
      });
  }, [params.item_url]);

  return product ? (
    <main className="main-grid">
      <ProductDetails product={product} />

      <Carousel products={products}/>

    </main>
  ) : (
    "Laddar..."
  );
}

export default Products;