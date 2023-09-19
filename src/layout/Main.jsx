import { Outlet } from "react-router-dom";
import Footer from "../pages/Shard/Footer";
import Navbar from "../pages/Shard/navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;