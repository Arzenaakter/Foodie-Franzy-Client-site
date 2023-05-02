import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const {user} = useContext(AuthContext)



  return (
    <div className="hero min-h-screen bg-base-200">
       

    <div className="hero-content flex-col lg:flex-row-reverse w-full gap-12">

      <div className="text-center lg:text-left ">
        
       <h1 className="text-5xl font-bold inline-block mb-10 ">Login With</h1>
        
        <div className="form-control  gap-5">
                 <button className="btn btn-outline">Gmail</button>
                <button className="btn btn-outline btn-primary">Github</button>
        </div>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered" />
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p><small>Don't have an Account ? <Link to='/signup' className="text-primary font-semibold">Sign Up</Link></small></p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
