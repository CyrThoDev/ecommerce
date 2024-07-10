/* eslint-disable react/prop-types */

import { useContext } from "react";
import BasketContext from "../context/BasketContext";

export default function Basket() {
  const { basket } = useContext(BasketContext);

  // console.log("DEPUIS MON COMPOSANT BASKET", basket);
  return (
    <>
      <h1>Panier - composant basket</h1>
      <ul>
        {basket.map((article) => (
          <li key={article.id}>
            {article.model} - {article.price}€
          </li>
        ))}
      </ul>
      <h2>
        Total : {basket.reduce((sum, product) => sum + product.price, 0)}€
      </h2>
    </>
  );
}
