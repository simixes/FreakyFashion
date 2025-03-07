import React, { useState } from 'react';
import BasketDetails from '../../components/BasketDetails/BasketDetails';

const showButton = true;

function Basket() {
    return (
      <main className="main-grid">
        <BasketDetails showButton={showButton} />
      </main>
    );
  }
  
  export default Basket;