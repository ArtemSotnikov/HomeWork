import {NavLink} from "react-router";
import "../assets/styles/HeaderMenu.css";

function HeaderMenu() {
    return (
        <ul className={"header"}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    );
}

export default HeaderMenu;