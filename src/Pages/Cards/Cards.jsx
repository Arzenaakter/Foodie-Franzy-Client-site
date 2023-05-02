import React, { useState } from 'react';

import { useEffect } from 'react';
import Card from '../Card/Card';

const Cards = () => {

    const [chefsInfo, setChefsInfo] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/chefs')
    .then(res =>res.json())
    .then(data => setChefsInfo(data))
},[])

    return (
        <div className='mt-10'>
            <h2 className='text-center font-bold text-3xl border-b-2 w-36 mx-auto mb-12'> Our Chefs</h2>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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