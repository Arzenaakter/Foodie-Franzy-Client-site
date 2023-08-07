import React, { useEffect } from "react";
import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
  const [recipes, setRecipes] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(true);
  };

  useEffect(() => {
    fetch("https://foodie-franzy-server-site.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="bg-base-100 mt-10">
      <h2 className="text-3xl font-bold text-center border-b-2 w-72 mx-auto pt-10 pb-2  mb-10">
        Our Menus
      </h2>

      <div className="px-6 lg:px-0">
        {seeMore
          ? recipes.map((recipe) => (
              <MenuItem key={recipe.id} recipe={recipe}></MenuItem>
            ))
          : recipes
              .slice(0, 3)
              .map((recipe) => (
                <MenuItem key={recipe.id} recipe={recipe}></MenuItem>
              ))}

        {/* {recipes.map((recipe) => (
          <MenuItem key={recipe.id} recipe={recipe}></MenuItem>
        ))} */}
      </div>

      <div className="text-center pb-10 my-10">
        {seeMore || recipes.length <= 3 ? (
          " "
        ) : (
          <button
            className="btn bg-[#2B2623] text-white"
            onClick={handleSeeMore}>
            More
          </button>
        )}
      </div>
    </div>
  );
};

export default Menu;
