import HeaderMenu from "./HeaderMenu.tsx";
import AboutMenu from "./AboutMenu.tsx";

function Team() {
    document.title = "team";

    return (
        <>
            <HeaderMenu/>
            <AboutMenu/>
            <div>Meet our team</div>
        </>
    );
}

export default Team;