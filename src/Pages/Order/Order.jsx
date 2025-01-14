import { useState } from "react";
import CoverImage from "../../Components/CoverImage/CoverImage";
import orderImg from "../../assets/shop/banner2.jpg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import useMenu from "../../Components/Hooks/useMenu";

const Order = () => {
    const categories = ["dessert" , "pizza" , "salad" , "soup"]
    const {category} = useParams()
    const defaultTabIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(defaultTabIndex);


    const foodItems = useMenu()
    const dessert = foodItems.filter(item => item.category === "dessert")
    const pizza = foodItems.filter(item => item.category === "pizza")
    const salad = foodItems.filter(item => item.category === "salad")
    const soup = foodItems.filter(item => item.category === "soup")
    const drinks = foodItems.filter(item => item.category === "drinks")


    return (
        <div className="min-h-screen">
            <CoverImage cover={orderImg} title={"Order Now"} subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptas."} />
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                  <Tab>Dessert</Tab>
                  <Tab>Pizza</Tab>
                  <Tab>Salads</Tab>
                  <Tab>Soups</Tab>
                  <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab foods={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderTab foods={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTab foods={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTab foods={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTab foods={drinks} />
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;