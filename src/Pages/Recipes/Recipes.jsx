import React, { useState, useEffect } from 'react';
import AllRecipe from '../AllRecipe/AllRecipe';



const Recipes = () => {
     const [recipe, setRecipe] = useState([])
    //  console.log(recipe);

    useEffect(() => { 
        fetch('https://foodie-franzy-server-site.vercel.app/recipes')
        .then(res=> res.json())
        .then(data => setRecipe(data))
     }, [])
    return (
        <div className='my-10'>
            <h2 className='my-10 text-2xl font-bold'>All the recipes</h2>

            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    recipe.map(re => <AllRecipe
                    key={re.id}
                        re={re}>

                    </AllRecipe>)
                }
            </div>
            
        </div>
    );
};

export default Recipes;