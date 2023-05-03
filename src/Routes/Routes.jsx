import Home from "../Pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Error from "../Pages/ErrorPage/Error";
import Recipes from "../Pages/Recipes/Recipes";
import ChefLayout from "../Layouts/ChefLayout";
import SingleChefRecp from "../Pages/SingleChefRecp/SingleChefRecp";

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
            {
                path:'/All-recipes',
                element:<Recipes></Recipes>
            }
        ]
      },
      {
        path:'/*',
        element:<Error></Error>
      },
      {
        path: '/chef-recipe',
        element: <ChefLayout></ChefLayout>,
        children:[
           { 
            path:':id',
            element: <SingleChefRecp></SingleChefRecp>,
            loader:({params}) => fetch(` http://localhost:5000/chefs/${params.id}`)


           
        }

        ]
      },

])
export default router;