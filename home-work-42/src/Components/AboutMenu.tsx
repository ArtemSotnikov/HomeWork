import {NavLink} from "react-router";

function AboutMenu() {
    return (
        <ul className={"header-about"}>
            <li><NavLink to="/about/team">Team</NavLink></li>
            <li><NavLink to="/about/history">Company history</NavLink></li>
        </ul>
    );
}

export default AboutMenu;