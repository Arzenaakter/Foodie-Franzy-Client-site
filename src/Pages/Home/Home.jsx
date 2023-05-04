import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import ClientReview from '../ClientReview/ClientReview';
import Menu from '../Menu/Menu/Menu';

const Home = () => {
    return (
       <>
        <Banner></Banner>
        <Cards></Cards>
        <Menu></Menu>
        <ClientReview></ClientReview>
       </>
    );
};

export default Home;