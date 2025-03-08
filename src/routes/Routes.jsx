import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import MainLayouts from "../layouts/MainLayouts";
import EasyMode from "../components/EasyMode";
import HighestScore from "../components/HighestScore";
import Medium from "../components/Medium";
import Hard from "../components/Hard";
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
            },
            {
                path:'/medium',
                element:<Medium></Medium>
            },
            {
                path:'/hard',
                element:<Hard></Hard>
            },
            {
                path:'/word_learn',
                element:<HighestScore></HighestScore>
            },
            
        ]
        
    },
    {
        path:'/',
        element:<Home></Home>,
                
    },
])
export default routes;