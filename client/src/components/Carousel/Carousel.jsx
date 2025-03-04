import '../Global/Style.css';
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Carousel = ({ products }) => {
  const [productGroups, setProductGroups] = useState([]);

  

  console.log(products);

  useEffect(() => {
    if (products && products.length > 0) {
      const shuffledProducts = shuffle(products).slice(0, 9);
      const groups = chunkArray(shuffledProducts, 3);
      
      while (groups.length < 3) {
        groups.push([]);
      }

      const completeGroups = groups.map(group => {
        while (group.length < 3) {
          group.push({
            item_image: "/images/Products/placeholder-img.png",
            item_name: "Ej tillgänglig",
            item_price: "-",
            item_brand: "-"
          });
        }
        return group;
      });

      setProductGroups(completeGroups);
    }
  }, [products]);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  return (
    <section className="carousel-part">
      <h2 id="h2-carousel">Liknande produkter</h2>
      <div className="container">
        <div className="row justify-content-center">
          {productGroups.map((group, groupIndex) => (
            <div className="col-md-4" key={groupIndex}>
              <div
                id={`carouselExample${groupIndex}`}
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {group.map((product, productIndex) => (
                    <div
                      className={`carousel-item ${productIndex === 0 ? "active" : ""}`}
                      key={productIndex}
                    >
                  <Link to={`/products/${product.item_url}`}>
                    <img
                     src={`/${product.item_image}`}
                     className="d-block w-100"
                     alt={product.item_name}
                     />
                  </Link>
                      <div className="main-item-description">
                        <h3 className="clothes-item">{product.item_name}</h3>
                        <p className="price">{product.item_price} SEK</p>
                        <p className="clothes-brand">{product.item_brand}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carouselExample${groupIndex}`}
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#carouselExample${groupIndex}`}
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
