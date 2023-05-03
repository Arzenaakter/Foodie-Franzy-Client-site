import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleChefRecp = () => {

    const {id} = useParams()

    const singeChefRecipe = useLoaderData();


    console.log("singeChefRecipe",singeChefRecipe)
    return (
        <div>
           {
            singeChefRecipe.map(chef => <p>{chef.chefName}</p>)
           }
           
        </div>
    );
};

export default SingleChefRecp;