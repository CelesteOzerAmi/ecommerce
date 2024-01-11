import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <section className="navbar">
            <Link to="/" className="brand">
                <img src="../img/mikelogo.png" alt="" />
            </Link>
            <ul>
                <li>
                    <Link to="/categorias/vestimenta">vestimenta</Link>
                </li>
                <li>
                    <Link to="/categorias/calzado">calzado</Link>
                </li>
                <li>
                    <Link to="/categorias/articulos">artículos de deporte</Link>
                </li>
            </ul>
            <CartWidget />
        </section>
    );
};

export default NavBar;