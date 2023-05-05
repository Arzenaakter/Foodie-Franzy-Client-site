import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Registration = () => {

   const [error, setError] = useState([])

  const {SignUp,UpdateUserData} = useContext(AuthContext);



  const handleSignUp = event =>{
    event.preventDefault()
   const form = event.target;
   const name = form.name.value;
   const photo = form.photo.value;
   const email = form.email.value;
   const password = form.password.value;
   const confirm = form.confirm.value;


   setError( '')

   console.log(name,photo,email,password,confirm);

        if(password != confirm){
           setError("Password doesn't match")
           return;
        }


        if(password.length<6){
           setError("Password length must be 6 ");
           return;
        }



          //  authentication
          SignUp(email,password)
          .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser);

            toast("Registration has been successfully completed",{position: "top-center",});
            form.reset()
            userData(result.user,name,photo)

           
        })
        .catch(error =>{
            console.log(error);
            setError(error.message)
        });


        

        
  // updateUser data 

     const userData =()=>{
      UpdateUserData(name,photo)
      .then(()=>{
        console.log('user name updated');
      })
      .catch(error =>{
        console.log(error);

      })

    
  };



  }






    return (
        
            <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse w-full gap-12 ">

   

        <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-500 ">

          <form className="card-body " onSubmit={handleSignUp}>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text" name='name'
                placeholder="Your Name"
                className="input input-bordered" required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text" name='photo'
                placeholder="Your Photo URl"
                className="input input-bordered" required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email" name='email'
                placeholder="email"
                className="input input-bordered" required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password" name='password'
                placeholder="password"
                className="input input-bordered" required
              />
             
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text"> Confirm Password</span>
              </label>
              <input
                type="password" name='confirm'
                placeholder="Confirm Password"
                className="input input-bordered" required
              />



             <label className="label">
                <span className=" text-red-500 font-semibold">{error}</span>
              </label>
             
            </div>


            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>

            <p><small>Allready have an Account ?<Link to='/login' className='text-primary font-bold'>login</Link></small></p>
          </form>


        </div>
      </div>
    </div>
        
    );
};

export default Registration;