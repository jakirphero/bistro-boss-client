import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useCart from '../../../hooks/useCart';
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handelLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.log(error))
    }

    const navOption = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order/salad">Order Now</Link></li>
        <li><Link to="/secrete">Secrete</Link></li>
        {
            user ?
                <>
                    <button onClick={handelLogOut} className="btn btn-ghost">LogOut</button>
                </>
                :
                <>
                    <li><Link to="/login">Login</Link></li>
                </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 max-w-screen-xl bg-slate-700 bg-opacity-20 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 bg-opacity-80 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className=" btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    < p > <span className='text-pink-50 font-bold border-y-2 mr-2 px-1'>{user?.displayName}</span></p>
                    <li>
                        <Link to="dashboard/myCart">
                            <button className="btn">
                                <FaShoppingCart className='text-purple-800'></FaShoppingCart>
                                <div className="badge badge-secondary">+{cart?.length || 0}</div>
                            </button>
                        </Link>
                    </li>
                </div>
            </div >
        </>
    );
};

export default Navbar;