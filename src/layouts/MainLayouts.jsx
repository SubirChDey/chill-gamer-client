import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayouts = () => {
    return (
        <div className="">
            <div className="min-w-full sticky top-0 z-50"><NavBar></NavBar></div>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;