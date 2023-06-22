import { useForm } from 'react-hook-form';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const { signIn } = useContext(AuthContext);
    const onSubmit = data => {
        signIn(data.email, data.password)
        
        .then(result =>{
            const loggedUser =result.user
            navigate(from, { replace: true })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User login successful.',
                showConfirmButton: false,
                timer: 1500
              })
        })
    };
    return (
        <div>
            <div className="pt-10 my-10 bg-fixed bgImage">

                <div className="min-h-screen bg-opacity-25 hero bg-slate-800">
                    <div className="flex-col hero-content lg:flex-row-reverse">
                        <div className="text-center text-orange-600 lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>

                        <div className="flex-shrink-0 w-full max-w-sm bg-opacity-50 shadow-2xl bg-slate-800 card">

                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-orange-600 label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="Email" className="border-0 border-b-4 input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-orange-600 label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="Password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                    <label className="label">
                                        <a href="#" className="text-orange-600 label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="mt-6 form-control">
                                    <button className="text-orange-600 btn btn-neutral">Login</button>
                                </div>
                                <div>
                                <p><small className='text-orange-600'>New Here? <Link className='text-orange-400' to="/signup">Create an account</Link> </small></p>
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Login;