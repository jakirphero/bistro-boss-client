import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Manageitems = () => {

    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handelDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('axios data menu delte', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })

            }
        })
    }

    const updateItems = item => {

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | Manage Items</title>
            </Helmet>
            <SectionTitle heading='manage all items' subHeading='hurry up'></SectionTitle>
            <h3 className="text-center text-2xl my-4">Total Items: {menu.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.category}</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-start">${item.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xl">
                                    <FaEdit></FaEdit>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handelDelete(item)} className="btn btn-ghost btn-xl">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manageitems;