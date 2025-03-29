import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../BasketDetails/Basket.css";
import '../Global/Style.css';

function BasketDetails({ showButton, title, url }) {
  const [basketItems, setBasketItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  document.title = "Varukorg";
  
  useEffect(() => {
    fetch(`http://localhost:8000/api/basket`, {
      credentials: "include" 
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        return resp.json();
      })
      .then((data) => {
        const basket = data.basket || [];
        setBasketItems(basket);
  
        
        const initialQuantities = {};
        basket.forEach(item => {
          initialQuantities[item.product.id] = item.quantity;
        });
        setQuantities(initialQuantities);
  
      })
      .catch((error) => {
        console.error("Error fetching basket:", error);
      });
  }, []);

  const updateQuantity = (id, value) => {
    
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: value
    }));
  
    fetch(`http://localhost:8000/api/basket/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: value }),
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Kvantitet uppdaterad:', data);
      })
      .catch(error => {
        console.error('Error updating quantity:', error);
      });
  };

  const getTotalCount = () => {
    return Object.values(quantities).reduce((acc, quantity) => acc + quantity, 0);
  };

  const getTotalPrice = () => {
    return basketItems.reduce((acc, item) => {
      const quantity = quantities[item.product.id] || 1;
      return acc + (item.product.item_price * quantity);
    }, 0);
  };

  const deleteProductFromBasket = (productId) => {
    fetch(`http://localhost:8000/api/basket/${productId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Produkt borttagen:', data);
  
        
        setBasketItems(prevItems => {
          const updatedItems = prevItems.filter(item => item.product.id !== productId);
          
          
          setQuantities(prevQuantities => {
            const updatedQuantities = { ...prevQuantities };
            delete updatedQuantities[productId]; 
            return updatedQuantities;
          });
  
          return updatedItems;
        });
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <main>
      {/* Basket section before 640px */}
      <section className="basket-section-mobile">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="basket-item-container-m">
          {basketItems.map(item => (
            <div className='basket-item-card' key={item.product.id}>
              <div className='basket-card-pt1'>
                <h2>{quantities[item.product.id]} x {item.product.item_name}</h2>
                <span>{item.product.item_price} SEK</span>
              </div>
              <div className='basket-card-pt2'>
                <strong>Totalt: {quantities[item.product.id] * item.product.item_price} SEK</strong>
                <div className="input-img-container">
                  <input 
                    className='basket-input'
                    type="number"
                    value={quantities[item.product.id]}
                    min="1"
                    onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                  />
                  <img 
                    className='trashcan-img' 
                    src="/images/trashcan-img-svg.svg" 
                    alt="Delete from basket"
                    onClick={() => deleteProductFromBasket(item.product.id)}
                  />
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

      {/* Basket section after 640px */}
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
              {basketItems.map(item => (
                <tr key={item.product.id}>
                  <td>{item.product.item_name}</td>
                  <td>{quantities[item.product.id]}</td>
                  <td>{item.product.item_price} kr</td>
                  <td>{quantities[item.product.id] * item.product.item_price} kr</td>
                  <td>
                    <input 
                      className="basket-input"
                      type="number"
                      value={quantities[item.product.id]}
                      min="1"
                      onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                    />
                    <img 
                      className="trashcan-img"
                      src="/images/trashcan-img-svg.svg" 
                      alt="Delete from basket"
                      onClick={() => deleteProductFromBasket(item.product.id)}
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
