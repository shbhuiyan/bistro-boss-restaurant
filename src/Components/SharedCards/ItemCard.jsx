/* eslint-disable react/prop-types */

import SectionButton from "../SharedButton/SectionButton";

const ItemCard = ({item}) => {


    const {name , recipe , image , price} = item

  return (
    <div className="card shadow-xl bg-base-200 group ">
      <figure>
        <img
          className="group-hover:scale-110 transition relative duration-500"
          src={image}
          alt={name}
        />
      </figure>
      <span className="bg-neutral w-16 text-center font-semibold absolute right-4 top-4 text-white">${price}</span>
      <div className="card-body space-y-2 items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-center text-orange-700">
          <SectionButton title="ADD TO CART" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
