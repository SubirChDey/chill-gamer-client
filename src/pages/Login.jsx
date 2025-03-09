import { useContext, useEffect, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../src/assets/signup.png";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { userLogin, setUser, googleLogin } = useContext(AuthContext)    
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => toast.error('Input valid login info'));
        // .catch(error => showError(error));           

    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => toast.error('Login Failed'));
    };

    return (
        <div className="lg:flex items-center w-11/12 max-w-[1340px] mx-auto rounded-2xl mt-10 bg-black shadow-lg shadow-red-800 mb-10">
            <div className="flex-1/2">
                <div className="py-5">
                    <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 ">
                        <h1 className="text-2xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Login</h1>
                        <p className="font-medium text-gray-600 my-4">Login today to unlock exclusive reviews, insights, and recommendations for your favorite games.</p>
                    </div>

                    <div className="card w-11/12 mx-auto bg-base-300 lg:max-w-screen-md shrink-0 items-center">
                        <form onSubmit={handleSubmit} className="card-body w-full">
                            <div className="flex flex-col w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                            </div>

                            <div className="flex flex-col">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="password" className="input input-bordered w-full" required />

                                <label className="label">
                                    <Link to='/reset' className="label-text-alt link link-hover">Forget password?</Link>
                                </label>
                            </div>
                            <div className="flex flex-col mt-6">
                                <button type="submit" className="btn bg-primary text-white font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Login</button>
                            </div>
                        </form>

                        <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-10 top-[26%] lg:top-[30.5%]">
                            {
                                showPassword ? <FaRegEye></FaRegEye> : <FaEyeSlash></FaEyeSlash>
                            }
                        </button>
                        <div className="divider"></div>

                        <div className="flex flex-col lg:flex-row gap-4 justify-around items-center mb-6">
                            <div className="flex flex-col justify-center">
                                <p>Do not have an account ?</p>
                                <Link to='/register' className="btn"><button>Register</button></Link>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p>Or</p>
                                <button onClick={handleGoogleLogin} className="btn">Continue with Google
                                    <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1/2 items-center text-center p-10">
                <img className=" flex items-center text-center justify-center w-10/12" src={loginImg} alt="" />

            </div>
        </div>
    )
}

export default Login