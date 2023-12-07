import { Link } from "react-router-dom";
import "../assets/images/logo.jpg";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="assets\images\logo.jpg" alt="two hands exchanging plants" />
      </div>
      <p> LA FOIRE AUX PLANTES</p>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/advert">Annonces</Link>
        </li>
        <li>
          <Link to="/backoffice">Espace membre</Link>
        </li>
        <li>
          <Link to="/register">S'enregistrer</Link>
        </li>
        <li>
          <Link to="/login">Se connecter</Link>
        </li>
      </ul>
    </nav>
  );
}
