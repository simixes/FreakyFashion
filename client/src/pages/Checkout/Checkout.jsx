import React, { useState } from 'react';
import BasketDetails from '../../components/BasketDetails/BasketDetails';
import CostumerDetails from '../../components/Checkout/CostumerDetails';

const showButton = false;

function Checkout() {
    return (
      <main className="main-grid">
        <BasketDetails showButton={showButton} />
        <CostumerDetails />
      </main>
    );
  }
  
  export default Checkout;