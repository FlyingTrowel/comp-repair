import Index from "../pages/Index/Index";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";


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
    }
];

export default routes;