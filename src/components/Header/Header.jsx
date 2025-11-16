import { NavLink } from "react-router-dom";
import { CURRENT_USER } from "../../userStorage";
import "./Header.css";
function Header() {
  return <header ><NavLink className={({ isActive }) =>
          isActive ? "homePage active-tab" : "homePage"
        } to="/">Home</NavLink><h1 id="mainHeader">NORTHCODERS NEWS</h1> <span>Logged in as: {CURRENT_USER} </span> </header>;
}

export default Header;