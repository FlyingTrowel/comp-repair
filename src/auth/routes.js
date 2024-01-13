import Index from "../pages/Index/Index";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Cart from "../pages/Cart/Cart";
import { Navigate } from "react-router-dom";
import { isAuth, isTempRepair } from "./token";
import Repair from "../pages/Repair/Repair";
import Store from "../pages/Store/Store";
import RepairConfirm from "../pages/Repair/RepairConfirm";
import RepairHistory from "../pages/Repair/RepairHistory";
import RepairAction from "../pages/Repair/RepairAction";



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
    {
        path: "repair",
        element: <Repair/>,
    },
    {
        path: "repair-confirm",
        element: isAuth() && isTempRepair() ? <RepairConfirm/> : <Navigate to={"/login"}/>,
    },
    {
        path: "repair-action/:id",
        element: isAuth() ? <RepairAction/> : <Navigate to={"/login"}/>,
    },
    {
        path: "repair-history",
        element: isAuth()? <RepairHistory/> : <Navigate to={"/login"}/>,
    },
    {
        path: "store",
        element: <Store/>,
    },
];

export default routes;