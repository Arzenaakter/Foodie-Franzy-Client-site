import React, { useState } from 'react';

import { FaHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AllRecipe = ({re}) => {
    const [disable, setDisable] = useState(false)
    const [reating, setRating] = useState(0)

    const handleFav =()=>{
        toast('Added to favorites',{position: "top-center",});
        setDisable(true)
    
    }

    console.log(re);
    const {recipe_name,cooking_method, ingredients,rating,recipe_img} = re;


    return (
        
        <div className="card w-full bg-base-100 shadow-2xl">
        <figure><img src={recipe_img} alt="food" className='h-56 w-full' /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">
          {recipe_name}
            
          </h2>
          <p className=' mb-6'><span className='font-bold'>Cooking Method :</span> <br />{cooking_method}</p>
          <p className=''> <span className='font-bold'>Ingredients :</span>
            {ingredients.map(ingre => <li>{ingre}</li> )}
            </p>
          <div className="card-actions justify-between mt-6">
            <button onClick={handleFav} disabled={disable}><FaHeart className={disable?'text-2xl text-gray-600': 'text-2xl text-red-600' }/></button>
            <div className=" flex items-center">
            <Rating style={{ maxWidth: 130 }} value={rating}  onChange={setRating} readOnly /> {rating}

            </div>
          </div>
        </div>
      </div>


    );
};

export default AllRecipe;