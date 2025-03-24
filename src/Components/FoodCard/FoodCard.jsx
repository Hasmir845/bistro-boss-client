import React from "react";

const FoodCard = ({item}) => {
    const {image, price, recipe, name} = item;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="img"
          className="rounded-xl"
        />
      </figure>
      <p className=" bg-slate-900 text-white absolute right-0 mr-14 mt-14 px-3 py-1">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          {recipe}
        </p>
        <div className="card-actions">
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
