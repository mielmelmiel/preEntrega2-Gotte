//import CartWidget from "./CartWidget";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const navigate = useNavigate();

  //<CartWidget icon="icono" number={5} />
  return (
    <header className="header">
      <Link to="/">
        <h1>{props.nombre}</h1>
      </Link>

      <nav className="navbar">
        <NavLink to="/clothing">ropa</NavLink>

        <NavLink to="/jewelery">jewelery</NavLink>

        <NavLink to="/cart">carrito</NavLink>

        <button onClick={() => navigate("/cart")}>carrito</button>
      </nav>
    </header>
  );
};

export default NavBar;
