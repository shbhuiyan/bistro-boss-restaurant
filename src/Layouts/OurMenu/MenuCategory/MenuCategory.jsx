/* eslint-disable react/prop-types */
import CoverImage from "../../../Components/CoverImage/CoverImage";
import MenuCard from "../../../Components/SharedCards/MenuCard";

const MenuCategory = ({items , cover , title}) => {
    


    return (
        <div className="space-y-10">
            {title && <CoverImage cover={cover} title={title} subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nemo!"}/>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default MenuCategory;