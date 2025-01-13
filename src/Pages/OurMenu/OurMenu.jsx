import CoverImage from "../../Components/CoverImage/CoverImage";
import useMenu from "../../Components/Hooks/useMenu";
import SectionsTitle from "../../Components/SectionTitle/SectionsTitle";
import SectionButton from "../../Components/SharedButton/SectionButton";
import MenuCategory from "../../Layouts/OurMenu/MenuCategory/MenuCategory";
import cover from "../../assets/menu/banner3.jpg"
import sectionImg from "../../assets/home/chef-service.jpg"

const OurMenu = () => {
    const menuItems = useMenu()
    const offered = menuItems.filter(item => item.category === 'offered')
    const pizza = menuItems.filter(item => item.category === 'pizza')
    const salad = menuItems.filter(item => item.category === 'salad')
    const soup = menuItems.filter(item => item.category === 'soup')

    return (
        <div className="min-h-screen">
            <CoverImage cover={cover} title={"Our Menu"} subTitle={"Would you like to try a dish?"} />
            <SectionsTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"} />
            {/* Offered Section */}
            <MenuCategory items={offered}/>
            <SectionButton title={"Order Your Favorite Food"}/>
            {/* Pizza Section */}
            <MenuCategory cover={sectionImg} title={"Pizza"} items={pizza}/>
            <SectionButton title={"Order Your Favorite Food"}/>
            {/* Salad Section */}
            <MenuCategory cover={sectionImg} title={"Salad"} items={salad}/>
            <SectionButton title={"Order Your Favorite Food"}/>
            {/* Soup Section */}
            <MenuCategory cover={sectionImg} title={"Soup"} items={soup}/>
            <SectionButton title={"Order Your Favorite Food"}/>
            
        </div>
    );
};

export default OurMenu;