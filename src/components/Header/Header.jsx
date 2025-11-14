import { CURRENT_USER } from "../../userStorage";
import "./Header.css";
function Header() {
  return <header><h1>NORTHCODERS NEWS</h1> <span>Logged in as: {CURRENT_USER} </span> </header>;
}

export default Header;
