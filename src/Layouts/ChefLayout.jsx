import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ChefLayout = () => {
    return (
        <div className='container m-auto'>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
            
        </div>
    );
};

export default ChefLayout;