import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        
            <div className="hero min-h-screen ">
      <div className="hero-content ">
        <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-500 ">
          <div className="card-body 	">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text" name='name'
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text" name='photo'
                placeholder="Your Photo URl"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email" name='email'
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password" name='password'
                placeholder="password"
                className="input input-bordered"
              />
             
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Confirm Password</span>
              </label>
              <input
                type="password" name='confirm'
                placeholder="Confirm Password"
                className="input input-bordered"
              />
             
            </div>


            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p><small>Allready have an Account ?<Link to='/login' className='text-primary font-bold'>login</Link></small></p>
          </div>
        </div>
      </div>
    </div>
        
    );
};

export default Registration;