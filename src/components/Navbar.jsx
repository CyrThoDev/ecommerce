import { useBasket } from "../hooks/useContext";

export default function Navbar() {
  const { basket } = useBasket();
  return (
    <nav>
      <img src="https://pbs.twimg.com/media/CyGXXiZWEAEznfZ.png" alt="" />
      <ul>
        <li>Accueil</li>
        <li>Nos produits</li>
        <li>Contactez nous</li>
      </ul>
      <p>
        {basket.length
          ? `Il y a ${basket.length} article dans votre panier`
          : "Votre panier est vide"}
      </p>
    </nav>
  );
}
