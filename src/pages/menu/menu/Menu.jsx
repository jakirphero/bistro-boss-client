import { Helmet } from 'react-helmet-async';
import Cover from '../../Shard/cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuCategory from '../menuCategory/MenuCategory';
const Menu = () => {

    const [menus] = useMenu();
    const pizza = menus.filter(item => item.category === 'pizza')
    const soup = menus.filter(item => item.category === 'soup')
    const salad = menus.filter(item => item.category === 'salad')
    const offered = menus.filter(item => item.category === 'offered')
    const desserts = menus.filter(item => item.category === 'dessert')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover 
            img={menuImg}
            title={"our menu"}
            ></Cover>
            {/* main cover */}
            <SectionTitle
                subHeading="don't miss"
                heading="today's offers"
            ></SectionTitle>
            {/* offered items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* Dessert */}
            <MenuCategory
                items={desserts}
                title="dessert"
                img={dessertImg}
            >
            </MenuCategory>
            {/* pizza */}
            <MenuCategory
                items={pizza}
                title="pizzas"
                img={pizzaImg}
            ></MenuCategory>
            {/* salad */}
            <MenuCategory
                items={salad}
                title="salads"
                img={saladImg}
            ></MenuCategory>
            {/* soup */}
            <MenuCategory
                items={soup}
                title="soups"
                img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;