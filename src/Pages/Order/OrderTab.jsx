import ItemCard from "../../Components/SharedCards/ItemCard";

/* eslint-disable react/prop-types */
const OrderTab = ({foods}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {foods.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
