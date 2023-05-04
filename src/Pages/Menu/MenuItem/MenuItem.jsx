import React from 'react';

const MenuItem = ({recipe}) => {
    console.log(recipe);
    const {recipe_name,recipe_img,about_food} = recipe;
    return (
        <div className='flex gap-6 mb-4 border rounded bg-[#2B2623] text-gray-300 hover:bg-slate-700 '>
            <img src={recipe_img} alt="" className='w-48' />
            <div className='py-6 '>
                <h2 className='text-2xl mb-4  border-b'>{recipe_name}</h2>
                <p className='italic mt-3 text-sm'>{about_food}</p>
            </div>
            
        </div>
    );
};

export default MenuItem;