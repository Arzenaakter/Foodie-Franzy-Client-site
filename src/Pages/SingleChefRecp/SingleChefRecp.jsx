import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import RecipeInfo from '../RecipeInfo/RecipeInfo';

const SingleChefRecp = () => {

    const {id} = useParams()

    const singeChefRecipe = useLoaderData();


    const {chefName,chefPicture,likes,numRecipes,shortBio,yearsOfExperience,recipes } = singeChefRecipe;
    // console.log("from singgle",singeChefRecipe);


    return (



        <div className='bg-base-100 border mt-10 mb-20'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                <img src={chefPicture} alt="chef picture" className='p-6 w-[800px] h-[400px] ' />
                <div className='p-6 text-center '>
                    <h2 className='text-4xl font-bold mb-10'> <span className='text-5xl font-semibold italic text-gray-300 	'>Chef</span><hr /> <br /><span>{chefName}</span></h2>
                    <p className='mb-2 '>{shortBio}</p> <hr />
                    <p className='my-2  text-xl'> <span className='font-bold'>Years Of Experience:</span> {yearsOfExperience}</p>
                    <p className='mb-2 text-xl'> <span className='font-bold'>NumBer of Recipes:</span> {numRecipes}</p>
                    <div className=' flex items-center justify-center gap-3'>
                 <span className='text-xl font-bold '>Likes:</span>  {likes}   <FaThumbsUp className='text-2xl text-blue-400'/></div>

                </div>
              </div>
              <h2 className='my-10 text-4xl font-bold text-center'>Recipes</h2>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center px-4'>
                {
                    recipes.map(recipe => <RecipeInfo
                        recipe={recipe}
                    ></RecipeInfo>)

                }
               
            </div>
      
        </div>
    );
};

export default SingleChefRecp;