import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaGithub, FaGoogle } from 'react-icons/fa';






const Login = () => {
  const {user,LogIn,GoogleSignIn,GithubSignIn,UpdateUserData} = useContext(AuthContext)

 const [error, setError] = useState([])
 


 const navigate = useNavigate()

  const handleLogin = event =>{
    event.preventDefault()

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('')

    LogIn(email,password)
    .then(result =>{
       const loggedUser =result.user;
       console.log(loggedUser);
       toast(" successfully LogIn",{position: "top-center",});

       navigate('/')

       form.reset()
      

    })
    .catch(error=>{
      setError(error.message)
      console.log(error);
    })


  }


  // google sign in

  const handleGoogleSign = ()=>{
    GoogleSignIn()
    .then(result =>{
       const googleUser = result.user;
       console.log(googleUser);
       toast(" successfully sign in with google",{position: "top-center",});

       UpdateUserData(googleUser.displayName,googleUser.photoURL)
     
     

    })
    .catch(error=>{
      
      console.log(error);
    })

  }


  //  github sign in

  const handleGithubSign =()=>{
    GithubSignIn()
    .then(result =>{
      const githubUser = result.user;
      console.log(githubUser);
      toast(" successfully sign in with Github",{position: "top-center",});

      UpdateUserData(githubUser.displayName,githubUser.photoURL)
      

    })
    .catch(error =>{
      console.log(error);
    })

  }



  return (
    <div className="hero min-h-screen bg-base-200">
       

    <div className="hero-content flex-col lg:flex-row-reverse w-full gap-12">

      <div className="text-center lg:text-left ">
        
       <h1 className="text-5xl font-bold inline-block mb-10 ">Login With</h1>
        
        <div className="form-control  gap-5">
                 <button className="btn btn-outline btn-error" onClick={handleGoogleSign}> <FaGoogle className=" text-2xl mr-4"/><span>Google Sign-in</span></button>
                <button className="btn btn-outline btn-primary"  onClick={handleGithubSign}><FaGithub className=" text-2xl mr-4"/><span>GitHub Sign-in</span></button>
        </div>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

        <form className="card-body" onSubmit={handleLogin}>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            
          </div>

          <label className="label">
              <span className="text-red-500">{error}</span>
            </label>


          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p><small>Don't have an Account ? <Link to='/signup' className="text-primary font-semibold">Sign Up</Link></small></p>
        </form>


      </div>
    </div>
  </div>
  );
};

export default Login;
