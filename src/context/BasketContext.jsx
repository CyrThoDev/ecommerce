/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const coucou = "salut";
  return (
    <BasketContext.Provider value={{ basket, setBasket, coucou }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketContext;
