import Home from "../Pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Error from "../Pages/ErrorPage/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'blog',
                element:<Blog></Blog>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/signup',
                element:<Registration></Registration>
            },
        ]
      },
      {
        path:'/*',
        element:<Error></Error>
      }

])
export default router;