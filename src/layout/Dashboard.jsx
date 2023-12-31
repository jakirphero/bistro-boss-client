import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaCalendarAlt, FaWallet, FaShoppingBag, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
    const [cart] = useCart();

    //TODO: load data from the server to have dynamic isAdmin base data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>admin home</NavLink></li>
                            <li><NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils>add an item</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems">manage items</NavLink></li>
                            <li><NavLink to="/"><FaBook></FaBook>booking items (note implement)</NavLink></li>
                            <li><NavLink to="/dashboard/users"><FaUsers></FaUsers>all users</NavLink></li>

                        </> : <>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome>user home</NavLink></li>
                            <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt>reservation(not implement)</NavLink></li>
                            <li><NavLink to="/"><FaWallet></FaWallet>payment history (not implement)</NavLink></li>
                            <li><NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart> my cart
                                <span className="badge inl badge-secondary">{cart?.length || 0}+</span>
                            </NavLink></li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>home</NavLink></li>
                    <li><NavLink to="/menu">menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag></FaShoppingBag>shope</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;