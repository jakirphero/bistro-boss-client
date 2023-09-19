import { Helmet } from "react-helmet-async";
import Boss from "../../Shard/boss/Boss";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import ChefRecommend from "../chefRecomend/ChefRecommend";
import Fetured from "../fetured/Fetured";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonial from "../testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Boss></Boss>
            <PopularMenu></PopularMenu>
            <ChefRecommend></ChefRecommend>
            <Fetured></Fetured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;