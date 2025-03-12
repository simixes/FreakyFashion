import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../BasketDetails/Basket.css"
import '../Global/Style.css';


function BasketDetails({ showButton, title, url }) {
  
  const testProduct = [
    { id: 1, itemName: "Jeans", price: 399 },
    { id: 2, itemName: "Jacket", price: 699 },
    { id: 3, itemName: "Trousers", price: 199 }
  ];


  const [quantities, setQuantities] = useState(
    testProduct.reduce((acc, product) => {
      acc[product.id] = 1; 
      return acc;
    }, {})
  );

  const updateQuantity = (id, value) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: value
    }));
  };


  const getTotalCount = () => {
    return Object.values(quantities).reduce((acc, quantity) => acc + quantity, 0);
  };


  const getTotalPrice = () => {
    return testProduct.reduce((acc, product) => {
      return acc + (quantities[product.id] * product.price);
    }, 0);
  };

  return (
<main>

  {/* --------------------------- */}
  {/* Basket section before 640px */}
  {/* --------------------------- */}

  <section className="basket-section-mobile">
    <div>
    <h1>{title}</h1>
    </div>
    <div className="basket-item-container-m">
      {testProduct.map(product => (
        <div className='basket-item-card' key={product.id}>
          <div className='basket-card-pt1'>
            <h2>{quantities[product.id]} x {product.itemName}</h2>
            <span>{product.price} SEK</span>
          </div>
          <div className='basket-card-pt2'>
            <strong>Totalt: {quantities[product.id] * product.price} SEK</strong>
            <div className="input-img-container">
              <input className='basket-input'
                type="number"
                value={quantities[product.id]}
                min="1"
                onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
              />
              <img className='trashcan-img' src="/images/trashcan-img-svg.svg" alt="Delete from basket" />
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className='basket-total-amount'>
      <h3>Produkter: {getTotalCount()} st</h3>
      <h3>Totalt: {getTotalPrice()} SEK</h3>
    </div>
    <div className="basket-btn-container">
      {showButton && (
        <Link to={url}>
          <button className="basket-btn">Till Kassan</button>
        </Link>
    )}
   </div>
  </section>

  {/* -------------------------- */}
  {/* Basket section after 640px */}
  {/* -------------------------- */}

  <section className="basket-section-a640">
  <div>
    <h1>{title}</h1>
  </div>
  <div>
    <table className="basket-table">
      <thead>
        <tr>
          <th>Produkt</th>
          <th>Antal</th>
          <th>Pris</th>
          <th>Totalt</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {testProduct.map(product => (
          <tr key={product.id}>
            <td>{product.itemName}</td>
            <td>{quantities[product.id]}</td>
            <td>{product.price} kr</td>
            <td>{quantities[product.id] * product.price} kr</td>
            <td>
              <input 
                className="basket-input"
                type="number"
                value={quantities[product.id]}
                min="1"
                onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
              />
              <img 
                className="trashcan-img"
                src="/images/trashcan-img-svg.svg" 
                alt="Delete from basket" 
                onClick={() => deleteProductFromBasket(product.id)} 
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className='basket-total-amount'>
      <h3>Produkter: {getTotalCount()} st</h3>
      <h3>Totalt: {getTotalPrice()} SEK</h3>
    </div>
  </div>
  
  <div className="basket-btn-container">
      {showButton && (
        <Link to={url}>
          <button className="basket-btn">Till Kassan</button>
        </Link>
    )}
   </div>
</section>



</main>

  );
}

export default BasketDetails;