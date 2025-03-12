import React, { useEffect, useState } from 'react';
import BasketDetails from '../../components/BasketDetails/BasketDetails';

const showButton = true;
const title = "Varukorgen";

function Basket() {

  useEffect(() => {
    document.title = "Varukorg";
  }, []); 

  return (
    <main className="main-grid">
      <BasketDetails showButton={showButton} title={title} />
    </main>
  );
}

export default Basket;
