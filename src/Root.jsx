import { Outlet } from "react-router-dom";
import Navbar from "./Layouts/Navbar/Navbar";
import Footer from "./Layouts/Footer/Footer";

const Root = () => {
    return (
        <div className="container sm:w-11/12 mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;