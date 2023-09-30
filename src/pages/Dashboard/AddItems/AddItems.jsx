import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const hosting_img = import.meta.env.VITE_UPLOD_IMAGE_TOKEN;
const AddItems = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();

    const hosting_img_url = `https://api.imgbb.com/1/upload?key=${hosting_img}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(hosting_img_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after menu item postin', data.data);
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item add successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    };

    return (
        <div className="w-full px-10 py-8">
            <Helmet>
                <title>Bistro Boss || Add Item</title>
            </Helmet>
            <SectionTitle subHeading='whats new?' heading='add an item'></SectionTitle>
            <div className="bg-base-200 p-6 rounded">
                <form onSubmit={handleSubmit(onSubmit)} className="capitalize">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">recipi name*</span>
                        </label>
                        <input type="text" name="name" placeholder="Recipi-Name" className="input input-bordered w-full " {...register("name", { required: true, maxLength: 120 })} />
                    </div>
                    <div className="flex my-2">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">category*</span>
                            </label>
                            <select defaultValue='pick one' className="select select-bordered" {...register("category", { required: true })}>
                                <option disabled>pick one</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soups</option>
                                <option>drinks</option>
                                <option>dessert</option>
                            </select>
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">price*</span>
                            </label>
                            <input type="number" name="price" placeholder="Type here" className="input input-bordered w-full " {...register("price", { required: true, maxLength: 120 })} />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">recipe details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Details" {...register("recipe", { required: true, maxLength: 120 })}></textarea>
                    </div>
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">item image*</span>
                        </label>
                        <input type="file" name="image" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true, maxLength: 120 })} />
                    </div>
                    <input type="submit" className='btn btn-sm mt-4 bg-slate-400' value="add item" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;