import React, { useState } from 'react';
import BasketDetails from '../../components/BasketDetails/BasketDetails';

const showButton = true;

const title = "Varukorgen";

function Basket() {
    return (
      <main className="main-grid">
        <BasketDetails showButton={showButton} title={title} />
      </main>
    );
  }
  
  export default Basket;