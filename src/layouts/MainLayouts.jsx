import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-6 relative mb-10 min-h-[calc(90vh-132px)]">
            
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;