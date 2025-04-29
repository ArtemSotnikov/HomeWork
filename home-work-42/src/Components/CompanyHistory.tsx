import HeaderMenu from "./HeaderMenu.tsx";
import AboutMenu from "./AboutMenu.tsx";


function CompanyHistory() {
    document.title = "history";

    return (
        <>
            <HeaderMenu/>
            <AboutMenu/>
            <div>Our history</div>
        </>
    );
}

export default CompanyHistory;