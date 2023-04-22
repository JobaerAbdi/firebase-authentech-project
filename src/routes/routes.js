import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: ErrorPage } = require("../components/ErrorPage");
const { default: Home } = require("../components/Home");
const { default: Profile } = require("../components/Profile");
const { default: Wallet } = require("../components/Wallet");
const { default: Login } = require("../components/Login");

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>
            },
            {
                path : '/profile',
                element : <Profile></Profile>
                
            },
            {
                path : '/wallet',
                element : <Wallet/>
                
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
        ]
    }
]);

export default router;