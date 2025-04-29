import {Link} from "react-router";

function HeaderMenu() {
    return (
        <ul className={"header"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    );
}

export default HeaderMenu;