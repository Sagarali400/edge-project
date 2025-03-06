import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
   
        </div>
    );
};

export default MainLayouts;