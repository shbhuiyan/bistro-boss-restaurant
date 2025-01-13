/* eslint-disable react/prop-types */

const MenuCard = ({item}) => {

    const {name , recipe , price , image} = item

    return (
        <div className="flex items-center gap-10">
            <img style={{borderRadius: "0 300px 300px 300px"}} className="w-24" src={image} alt="" />
            <div className="font-inter text-gray-500">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-cinzel">{name} ----------------------</h1>
                    <p className="text-orange-500 font-medium">${price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuCard;