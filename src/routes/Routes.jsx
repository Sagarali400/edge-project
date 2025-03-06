import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import MainLayouts from "../layouts/MainLayouts";
import EasyMode from "../components/EasyMode";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/easy',
                element:<EasyMode></EasyMode>
            }
        ]
    }
])
export default routes;