import SectionsTitle from "../../../Components/SectionTitle/SectionsTitle";
import SectionButton from "../../../Components/SharedButton/SectionButton";
import useMenu from "../../../Components/Hooks/useMenu";
import MenuCategory from "../../OurMenu/MenuCategory/MenuCategory";

const PopularMenu = () => {
    const menuItems = useMenu()
    const popular = menuItems.filter(item => item.category === 'popular')

    return (
        <div className="my-10 p-4">
            <SectionsTitle subHeading="Check it out" heading="From Our Menu" />
            <MenuCategory items={popular} />
            <div className="text-center my-10">
            <SectionButton title="View Full Menu" />
            </div>
        </div>
    );
};

export default PopularMenu;