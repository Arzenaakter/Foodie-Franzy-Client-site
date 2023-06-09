import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Card = ({chef}) => {

    const {chefName,chefPicture,likes,numRecipes,shortBio,yearsOfExperience,id} = chef;
    

    // console.log("card",chef);
    return (
        <>
        <div className="card w-full bg-base-100 shadow-2xl ">
        <figure>
                <LazyLoad height={230} offset={300} threshold={0.95} onContentVisible={() => {console.log('loaded!')}} >
                 <img src={chefPicture} className='lg:w-80  h-60  pt-10  ' alt="chef picture" />  
     
               </LazyLoad>
               </figure>
              

                <div className="card-body">
                    <h2 className="card-title">
                         {chefName}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>Years of experience : {yearsOfExperience}</p>
                    <p>Numbers of recipes : {numRecipes}</p>
                    <div className="card-actions justify-between mt-4 items-center">
                    <div className="flex items-center	gap-4"><FaThumbsUp className='text-blue-500 text-2xl'/>   {likes}</div>
                    <Link  className="btn btn-outline" to={`/chef-recipe/${id}`}>View Recipes</Link>
                    </div>
                </div>
        </div>

            
        </>
    );
};

export default Card;