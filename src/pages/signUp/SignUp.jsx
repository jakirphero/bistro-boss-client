import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const {createUser} = useContext(AuthContext);


    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    }

    // console.log(watch("example"));

    return (
        <>
            <Helmet>
                <title>Bistro boss | Sign up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-warning">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-warning">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/

                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "minLength" && (
                                    <span className="text-warning">password must be 6 characters</span>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <span className="text-warning">password less then 20 characters</span>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <span className="text-warning">password have one number, one special characters, one lowercase and one uppercase</span>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center">Already have an Account? <span className="text-purple-600 hover:underline"><Link to="/login">Login</Link></span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;