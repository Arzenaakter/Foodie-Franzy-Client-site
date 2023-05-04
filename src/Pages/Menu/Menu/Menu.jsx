import React, { useEffect } from 'react';
import { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';


const Menu = () => {
  const[recipes,setRecipes]=  useState([])
    useEffect(() => { 
        fetch('http://localhost:5000/recipes')
        .then(res =>res.json())
        .then(data=>setRecipes(data))
     }, [])



    return (
        <div className='bg-base-100 mt-10'>
                <h2 className="text-3xl font-bold text-center border-b-2 w-72 mx-auto pt-10 pb-2  mb-10">
                      Our Menus
                  </h2>


        <div className='px-6 lg:px-0'>
            {
                recipes.map(recipe =><MenuItem
                key={recipe.id}
                recipe={recipe}
                ></MenuItem>)

            }

        </div>
            
        </div>
    );
};

export default Menu;