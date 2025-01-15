/* eslint-disable react/prop-types */

import axios from "axios";
import useAuthContext from "../Hooks/useAuthContext";
import SectionButton from "../SharedButton/SectionButton";
import { toast } from "react-toastify";
import useCart from "../Hooks/useCart";

const ItemCard = ({item}) => {
  const {user} = useAuthContext()
  const {refetch} = useCart()
    const {name , recipe , image , price , _id} = item

    const handleAddTOCart = () => {
      const addToCart = {
        email:user.email,
        itemId: _id,
        name,
        image,
        price,
      }
      if(user && user?.email){
        axios.post('http://localhost:5000/cart' , addToCart)
        .then(res => {
          if(res.data.insertedId){
            toast.success('add to cart your item' , {position:'top-center'})
            refetch()
          }
        })
      }
    }

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
        <div onClick={handleAddTOCart} className="card-actions justify-center text-orange-700">
          <SectionButton title="ADD TO CART" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
