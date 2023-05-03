import React, { useEffect } from 'react';


const Recipes = () => {

    useEffect(() => { 
        fetch('http://localhost:5000/recipes')
        .then(res=> res.json())
        .then(data => console.log(data))
     }, [])
    return (
        <div>
            <h2>All the recipes</h2>
            
        </div>
    );
};

export default Recipes;