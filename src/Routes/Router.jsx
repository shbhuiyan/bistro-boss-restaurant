import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";



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
            }
        ]
    }
])