import useMenu from "../../../Components/Hooks/useMenu";
import SectionsTitle from "../../../Components/SectionTitle/SectionsTitle";
import ItemCard from "../../../Components/SharedCards/ItemCard";

const RecommendsFood = () => {
    const foodItems = useMenu()
    const recommendFoods = foodItems.filter(item => item.category === "offered")

    return (
        <div>
            <SectionsTitle subHeading="Should try" heading="CHEF RECOMMENDS" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {
                    recommendFoods.map(item => <ItemCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default RecommendsFood;