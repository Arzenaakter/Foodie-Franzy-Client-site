import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import ClientReview from '../ClientReview/ClientReview';

const Home = () => {
    return (
       <>
        <Banner></Banner>
        <Cards></Cards>
        <ClientReview></ClientReview>
       </>
    );
};

export default Home;