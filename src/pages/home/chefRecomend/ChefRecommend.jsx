import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import ChefRecommendCart from "./ChefRecommendCart";

const ChefRecommend = () => {

    const [chefFoods, setChefFoods] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setChefFoods(popularItems)
        })
    },[])

    return (
        <section>
            <SectionTitle
                subHeading={'should try'}
                heading={'chef recommend'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                {
                    chefFoods.map(chefFood => <ChefRecommendCart
                        key={chefFood._id}
                        chefFood={chefFood}
                    ></ChefRecommendCart>)
                }
            </div>
        </section>
    );
};

export default ChefRecommend;