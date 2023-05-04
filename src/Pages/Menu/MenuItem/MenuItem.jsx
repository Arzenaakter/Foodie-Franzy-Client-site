import React from 'react';

const MenuItem = ({recipe}) => {
    console.log(recipe);
    const {recipe_name,recipe_img,about_food} = recipe;
    return (
        <div className=''>
            <div className=' flex flex-col md:flex-row gap-2 mb-4 border rounded bg-[#2B2623] text-gray-300 hover:bg-slate-700'>
            <img src={recipe_img} alt="" className='lg:w-48 w-auto' />
            <div className='py-6  px-6'>
                <h2 className='lg:text-2xl sm:text-lg mb-4  border-b '>{recipe_name}</h2>
                <p className='italic mt-3 text-sm '>{about_food}</p>
            </div>
            
        </div>
        </div>
    );
};

export default MenuItem;