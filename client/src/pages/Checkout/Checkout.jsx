import React, { useEffect, useState } from 'react';
import BasketDetails from '../../components/BasketDetails/BasketDetails';
import CostumerDetails from '../../components/Checkout/CostumerDetails';

const showButton = false;
const title = "Kassan";

function Checkout() {

  useEffect(() => {
    document.title = "Kassan"; 
  }, []); 

  return (
    <main className="main-grid">
      <BasketDetails showButton={showButton} title={title} />
      <CostumerDetails />
    </main>
  );
}

export default Checkout;
