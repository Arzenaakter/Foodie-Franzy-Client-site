import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Header = () => {

  const {user,logOut }= useContext(AuthContext);

  // logout

  const handleLogout =()=>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error);
    })
  }





  return (
    <div className="navbar border-b-2  mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>


          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow   w-52">
            <li>
              <NavLink className={({ isActive }) => isActive ? "border-2 border-b-blue-800" : ""   } to='/'>Home</NavLink>
            </li>
          
            <li>
              <NavLink className={({ isActive }) => isActive ? "border-2 border-b-blue-800" : ""   }  to='/blog'>Blog</NavLink>
            </li>
          </ul>


        </div>


        <Link className="btn btn-ghost normal-case text-xl" to='/'>Foodie Franzy</Link>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
          <NavLink className={({ isActive }) => isActive ? " border-2 border-b-blue-800" : ""   }  to='/'>Home</NavLink>
          </li>
         
          <li>
          <NavLink className={({ isActive }) => isActive ?"border-2 border-b-blue-800" : ""   }  to='/blog'>Blog</NavLink>
          </li>
          <li>
          <NavLink className={({ isActive }) => isActive ?"border-2 border-b-blue-800" : ""   }  to='/All-recipes'>All Recipes</NavLink>
          </li>
        </ul>
      </div>


      <div className="navbar-end  gap-4">

        {user ? 
        <>
          <img className="w-12 rounded-full" title = { user.displayName} src={user.photoURL} alt="User-Profile" />  <button className="btn" onClick={handleLogout}>LogOut</button>
        </> : <Link className="btn" to='/login'>Login</Link> }
        
       
      </div>


    </div>
  );
};

export default Header;
