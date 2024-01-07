import Index from "../pages/Index/Index";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Cart from "../pages/Cart/Cart";



const routes = [
    {
        path: "/",
        element: <Index/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/signup",
        element: <Signup/>,
    },
    {
        path: "/cart",
        element: <Cart/>,
    },
];

export default routes;