import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  

    return (
        <div className='  m-auto text-center'>
            <img src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif" alt="404 error"  className='mx-auto rounded-md h-96 mt-10 '/>

            <div className='text-center '>
                <h2 className='font-bold text-4xl text-[#4e4c4c]'>

                    404 <br />
                    Page not found
                </h2><br />
               
            </div>

            <Link className='btn' to='/'>Back to home</Link>
        </div>
    );
};

export default Error;
