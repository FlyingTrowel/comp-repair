import Index from "../pages/Index/Index";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Cart from "../pages/Cart/Cart";
import { Navigate } from "react-router-dom";
import { isAuth } from "./token";



const routes = [
    {
        path: "/",
        element: <Index/>,
    },
    {
        path: "/login",
        element: !isAuth() ? <Login/> : <Navigate to={"/"}/>,
    },
    {
        path: "/signup",
        element: !isAuth() ? <Signup/> : <Navigate to={"/"}/>,
    },
    {
        path: "/cart",
        element: <Cart/>,
    },
];

export default routes;