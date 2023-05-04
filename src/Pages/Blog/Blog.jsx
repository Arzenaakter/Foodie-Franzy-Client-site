import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto container mt-20 px-10 lg:px-0'>
           <div className='border border-blue-400 rounded-lg p-4 mb-10'>
            <h2 className='text-2xl font-bold'> The differences between uncontrolled and controlled components.</h2>
            <p>
                 In React, components can be classified as either controlled or uncontrolled based on how they handle state. <br />

               * Controlled components are fully controlled by React, while uncontrolled components are managed by the  component itself. <br />

                * In controlled components, the state is managed by React and the value is passed down via props, while in uncontrolled components, the state is managed by the component itself and the value is not passed down via props. <br />

                *  Controlled components can only be updated by changing the state, while uncontrolled components can be updated at any time.

            </p>

           </div>
           <div className='border border-blue-400 rounded-lg p-4 mb-10'>
            <h2 className='text-2xl font-bold'> How to validate React props using PropTypes</h2>
            <p>
            In React, PropTypes is a library that provides a way to validate the props that are passed to a component. It helps to catch errors earlier in the development process by ensuring that the props passed to a component match the expected data type and format.

            </p>
                 

           </div>
           <div className='border border-blue-400 rounded-lg p-4 mb-10'>
            <h2 className='text-2xl font-bold'>The difference between nodejs and express js.</h2>
            <p>

            Node.js is a server-side JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient, allowing it to handle a large number of simultaneous connections with high throughput. <br /><br />

            Express.js, on the other hand, is a web application framework built on top of Node.js that provides a set of features and tools for building web applications and APIs. It simplifies the process of creating and managing routes, handling HTTP requests and responses, and integrating with databases and other third-party services.
                    
            </p>
                 

           </div>
           <div className='border border-blue-400 rounded-lg p-4 mb-10'>
            <h2 className='text-2xl font-bold'>What is a custom hook, and why will you create a custom hook?</h2>
            <p>
        In React, a custom hook is a JavaScript function that starts with the word use and can call other React hooks inside of it. It allows you to extract reusable logic from your components and share it across different parts of your application.

        Creating custom hooks can be useful in a few different scenarios. For example: <br />
        1. Code reuse: If you find yourself writing the same code over and over again in different components, you can extract that code into a custom hook and reuse it wherever you need it. <br />
        2. Abstraction: If you have a complex piece of functionality that involves several different hooks and state variables, you can abstract that functionality into a custom hook that provides a simpler interface for other developers to use. <br />
        3. Testing: If you have code that is difficult to test because it relies on complex state or is tightly coupled to other parts of your application, you can extract that code into a custom hook that can be tested independently.
                            
            </p>
                 

           </div>
           
        </div>
    );
};

export default Blog;