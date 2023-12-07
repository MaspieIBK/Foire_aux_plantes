import { Link } from "react-router-dom";
import "../assets/images/logo.jpg";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="assets\images\logo.jpg" alt="two hands exchanging plants" />
      </div>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/advert">Annonces</Link>
        </li>
      </ul>
    </nav>
  );
}
