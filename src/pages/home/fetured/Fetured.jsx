import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import './Fetured.css'
const Fetured = () => {
    return (
        <div className="fetured-item bg-fixed text-white my-20">
            <div className="bg-slate-400 bg-opacity-30 pt-5">
                <SectionTitle
                    subHeading='check it out'
                    heading='form our menu'
                ></SectionTitle>
                <div className="md:flex justify-center items-center py-20 px-36">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 19, 2023</p>
                        <p className="uppercase">where can get i some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam temporibus minima deleniti sunt ad fuga libero incidunt laudantium eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem excepturi dolorem harum? Labore temporibus nostrum consectetur, pariatur odio eveniet dolor placeat enim expedita tempora aut, officia corporis ullam asperiores consequatur?</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fetured;