import React, { useState } from 'react';
import "../Basket/Basket.css"
import '../../components/Global/Style.css';


function Basket() {
  
  const testProduct = [
    { id: 1, itemName: "Jeans", price: 399 },
    { id: 2, itemName: "Jacket", price: 699 }
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
  <section className="basket-section-mobile">
    <div>
      <h1>Varukorgen</h1>
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
    <div className='basket-btn-container'>
      <button className='basket-btn'>Till Kassan</button>
    </div>
  </section>

  <section className='basket-section-a640'>
    
  </section>
</main>

  );
}

export default Basket;
