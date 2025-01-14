import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";



export const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children: [
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/menu",
                element:<OurMenu />
            },
            {
                path:"/order/:category",
                element:<Order />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            },
        ]
    }
])