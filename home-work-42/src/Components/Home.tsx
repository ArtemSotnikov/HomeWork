import HeaderMenu from "./HeaderMenu.tsx";


function Home() {
    document.title = "home";

    return (
        <>
            <HeaderMenu/>
            <div> It is home page </div>
        </>

    );
}

export default Home;