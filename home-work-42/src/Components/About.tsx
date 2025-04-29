import HeaderMenu from "./HeaderMenu.tsx";
import AboutMenu from "./AboutMenu.tsx";
import {Outlet} from "react-router";


function About() {
    document.title = "about";

    return (
        <>
            <HeaderMenu/>
            <AboutMenu/>

            <div>About us</div>

            <Outlet/>
        </>
    );
}

export default About;