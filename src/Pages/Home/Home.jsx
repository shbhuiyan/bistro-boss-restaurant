import Banner from "../../Layouts/Home/Banner/Banner";
import Categories from "../../Layouts/Home/Categories/Categories";
import PopularMenu from "../../Layouts/Home/PopularMenu/PopularMenu";
import RecommendsFood from "../../Layouts/Home/Recommends/RecommendsFood";

const Home = () => {
    return (
        <>
            <Banner />
            <Categories />
            <PopularMenu />
            <RecommendsFood />
        </>
    );
};

export default Home;