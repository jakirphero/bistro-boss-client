import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../Shard/menuItems/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [menus] = useMenu();
    const popular = menus.filter(item => item.category === 'popular')

    // const [menus, setMenus] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenus(popularItems);
    //     })
    // },[])

    return (
        <section className="mb-12">
            <SectionTitle
                subHeading="popular items"
                heading="from our menu"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center my-10">
                <button className="btn btn-outline uppercase border-0 border-b-4">view full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;