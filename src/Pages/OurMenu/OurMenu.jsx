import CoverImage from "../../Components/CoverImage/CoverImage";
import useMenu from "../../Components/Hooks/useMenu";
import SectionsTitle from "../../Components/SectionTitle/SectionsTitle";
import MenuCategory from "../../Layouts/OurMenu/MenuCategory/MenuCategory";
import cover from "../../assets/menu/banner3.jpg"
import sectionImg from "../../assets/home/chef-service.jpg"
import { Link } from "react-router-dom";

const OurMenu = () => {
    const menuItems = useMenu()
    const offered = menuItems.filter(item => item.category === 'offered')
    const dessert = menuItems.filter(item => item.category === 'dessert')
    const pizza = menuItems.filter(item => item.category === 'pizza')
    const salad = menuItems.filter(item => item.category === 'salad')
    const soup = menuItems.filter(item => item.category === 'soup')

    return (
        <div className="min-h-screen">
            <CoverImage cover={cover} title={"Our Menu"} subTitle={"Would you like to try a dish?"} />
            <SectionsTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"} />
            {/* Offered Section */}
            <MenuCategory items={offered}/>
            <div className='text-center my-10'>
            <Link to={'/order'}>
                <button className='uppercase btn btn-outline border-0 text-center border-b-4'>Order Your Favorite Food</button>
            </Link>
            </div>
            {/* Dessert Section */}
            <MenuCategory cover={sectionImg} title={"Dessert"} items={dessert}/>
            <div className='text-center my-10'>
            <Link to={`/order/dessert`}>
                <button className='uppercase btn btn-outline border-0 text-center border-b-4'>Order Your Favorite Food</button>
            </Link>
            </div>
            {/* Pizza Section */}
            <MenuCategory cover={sectionImg} title={"Pizza"} items={pizza}/>
            <div className='text-center my-10'>
            <Link to={`/order/pizza`}>
                <button className='uppercase btn btn-outline border-0 text-center border-b-4'>Order Your Favorite Food</button>
            </Link>
            </div>
            {/* Salad Section */}
            <MenuCategory cover={sectionImg} title={"Salad"} items={salad}/>
            <div className='text-center my-10'>
            <Link to={`/order/salad`}>
                <button className='uppercase btn btn-outline border-0 text-center border-b-4'>Order Your Favorite Food</button>
            </Link>
            </div>
            {/* Soup Section */}
            <MenuCategory cover={sectionImg} title={"Soup"} items={soup}/>
            <div className='text-center my-10'>
            <Link to={`/order/soup`}>
                <button className='uppercase btn btn-outline border-0 text-center border-b-4'>Order Your Favorite Food</button>
            </Link>
            </div>
            
        </div>
    );
};

export default OurMenu;