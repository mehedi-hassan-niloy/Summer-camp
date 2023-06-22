import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import './SignUp.css'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import { savedUser } from "../../api/auth";



const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser,  updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {

            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile (data.name, data.PhotoUrl)
            .then(()=>{
                savedUser(result.user)
                reset()
                navigate('/')
               
                
            })
        })
    };
    return (
        <div className="pt-8 my-10 bg-fixed bgImage">
            <div className="min-h-screen pt-10 hero bg-tranpsrent">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="text-center text-orange-600 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="flex-shrink-0 w-full max-w-sm bg-opacity-50 shadow-2xl card bg-slate-800">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-orange-600 label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-orange-600 label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-orange-600 label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-orange-600 label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-orange-600 label-text">Confirm Password</span>
                                </label>
                                <input type="password"  {...register("confirmPassword", {
                                    required: true,
                                    minLength: 6,
                                 
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <div className="mt-6 form-control">
                                <input className="text-orange-600 btn btn-neutral" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p><small className="text-orange-600">Already have an account ? <Link to="/login" className="text-orange-400">Login</Link></small></p>
                        <SocialLogin/>
                    </div>
                    
                </div>
               
            </div>
        </div>
    );
};

export default SignUp;