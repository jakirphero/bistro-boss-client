import { Link } from "react-router-dom";
import Cover from "../../Shard/cover/Cover";
import MenuItem from "../../Shard/menuItems/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">

            {title && <Cover img={img} title={title}></Cover>}

            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center my-10">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline uppercase border-0 border-b-4">order now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;