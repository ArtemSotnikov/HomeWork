import HeaderMenu from "./HeaderMenu.tsx";


function About() {
    document.title = "about";

    return (
        <>
            <HeaderMenu/>
            <div>About us</div>
        </>
    );
}

export default About;