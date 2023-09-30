import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { image, recipe, name, price, _id } = item;
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();

    const handelAddToCart = item => {
        console.log(item);

        if (user && user.email) {
            const orderItem = {menuItm: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'food add to the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to the add food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {form: location}})
                }
            })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white ">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title capitalize">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handelAddToCart(item)} className="btn btn-outline uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;