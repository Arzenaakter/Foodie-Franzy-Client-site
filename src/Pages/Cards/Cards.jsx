import React, { useState } from 'react';

import { useEffect } from 'react';
import { useContext } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Card from '../Card/Card';

const Cards = () => {
    const [chefsInfo, setChefsInfo] = useState([])

    const {loading} = useContext(AuthContext);

   

useEffect(()=>{
    fetch('https://foodie-franzy-server-site.vercel.app/chefs')
    .then(res =>res.json())
    .then(data => setChefsInfo(data))
},[])
if(loading){
    return <div className='flex justify-center'>
        <RotatingLines
    strokeColor="red"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
  />
    </div>
}

    return (
        <div className='mt-10  '>
            <h2 className='text-center font-bold text-3xl border-b-2 w-36 mx-auto mb-12'> Our Chefs</h2>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-0'>
           {
                chefsInfo.map(chef => <Card
                key={chef.id}
                chef={chef}
                ></Card>)
            }
           </div>
            
            
        </div>
    );
};

export default Cards;