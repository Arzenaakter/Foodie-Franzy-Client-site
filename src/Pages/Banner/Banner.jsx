import React from "react";


const Banner = () => {
  return (
    <div className="px-6 lg:px-0">
      <div className="carousel w-full lg:h-[550px] my-6  ">

{/* slider 1 */}
        <div id="slide1" className=" carousel-item relative w-full  ">
          <img
            src="https://img.freepik.com/premium-photo/fresh-tasty-homemade-burger-wooden-table_147620-1307.jpg?size=626&ext=jpg&ga=GA1.2.1435761111.1680237800&semt=sph"
            className="w-full opacity-90 blur-[2px]	 "
          />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 className="lg:text-3xl sm:text-xl font-bold mb-2">Delicious Burgers</h1>
                <p className="lg:text-lg sm:text-sm">Try our mouth-watering  burgers, made with the freshest ingredients and served on a wooden board.</p>
                <button className="bg-white text-black font-bold py-2 px-4 mt-4  rounded hover:bg-gray-200">Order now</button>
            </div>



          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

{/* slider 2 */}

        <div id="slide2" className="carousel-item relative w-full  ">
          <img
            src="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?size=626&ext=jpg&ga=GA1.1.1435761111.1680237800&semt=sph"
            className="w-full opacity-90 blur-[2px]"
          />


        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className=" font-bold mb-2 lg:text-3xl sm:text-xl">Delicious Chowmein</h1>
            <p className="lg:text-lg sm:text-sm">Taste the difference in our  chow mein, crafted with love and care using traditional techniques and served hot for a satisfying and delicious experience.</p>
            <button className="bg-white text-black font-bold py-2 px-4 mt-4 rounded hover:bg-gray-200">Order now</button>
        </div>


          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* slider 3 */}

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/pasta-penne-with-eggplant-pasta-alla-norma-traditional-italian-food_2829-20663.jpg?size=626&ext=jpg&ga=GA1.2.1435761111.1680237800&semt=sph"
            className="w-full opacity-90 blur-[2px]"
          />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 className=" font-bold mb-2 lg:text-3xl sm:text-xl">Delicious Pasta</h1>
                <p className="lg:text-lg sm:text-sm">Indulge in the rich and creamy flavors of our signature pasta dishes, made with the finest selection of fresh ingredients and served hot on your plate</p>
                <button className="bg-white text-black font-bold py-2 px-4 mt-4 rounded hover:bg-gray-200">Order now</button>
            </div>



          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

{/* slider 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/grilled-meat-skewers-chicken-shish-kebab-with-zucchini-tomatoes-red-onions_2829-10942.jpg?size=626&ext=jpg&ga=GA1.1.1435761111.1680237800&semt=sph"
            className="w-full  opacity-90 blur-[2px]"
          />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className=" font-bold mb-2 lg:text-3xl sm:text-xl">Delicious Grill</h1>
            <p className="lg:text-lg sm:text-sm">Try our mouth-watering homemade burgers, made with the freshest ingredients and served on a wooden board.</p>
            <button className="bg-white text-black font-bold py-2 px-4 mt-4 rounded hover:bg-gray-200">Order now</button>
        </div>



          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
