import React, { createContext, useState } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [quantities, setQuantities] = useState({});

  return (
    <BasketContext.Provider value={{ quantities, setQuantities }}>
      {children}
    </BasketContext.Provider>
  );
};