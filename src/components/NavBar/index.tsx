import { NavLink } from "react-router-dom";
import "./styles.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to={"/"} className="brand">
        Mini <span>blog</span>
      </NavLink>
      <ul className="links_list">
        <li>
          <NavLink
            to={"/home"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Entrar
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/register"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Registrar
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
