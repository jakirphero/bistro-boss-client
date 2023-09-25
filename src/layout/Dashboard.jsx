import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaCalendarAlt, FaWallet, FaShoppingBag} from 'react-icons/fa';
import useCart from "../hooks/useCart";
const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full text-base-content uppercase">
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome>user home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>reservation</NavLink></li>
                    <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet>payment history</NavLink></li>
                    <li><NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart> my cart 
                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                    </NavLink></li>
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