import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa"
import { Link } from "react-router-dom"
import signupimg from "../../src/assets/signup.png";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="lg:flex bg-black items-center justify-evenly w-11/12 max-w-[1340px] mx-auto rounded-2xl mt-10 shadow-lg shadow-red-800 mb-10">
            <div className="flex-1/2 m-10">
                <div className="">
                    <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                        <h1 className="text-2xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">Create Account</h1>
                        <p className="font-medium text-gray-600">Create an account today to unlock exclusive discounted coupons and enjoy amazing offers on your favorite brands.</p>
                    </div>

                    <div className="card w-11/12 mx-auto bg-base-300 lg:max-w-screen-md shrink-0 shadow-2xl relative">
                        <form className="card-body items-center">
                            <div className="flex flex-col w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter your name" className="input input-bordered w-full" required />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="Enter your display photo URL" className="input input-bordered w-full" required />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type={showPassword ? 'text' : 'password'}
                                    placeholder="password" className="input input-bordered w-full" required />

                            </div>
                            <div className="flex flex-col mt-6 w-full">
                                <button type="submit" className="btn bg-primary text-white font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Create Account</button>
                            </div>
                        </form>

                        <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-10 top-[43.2%] lg:top-[49.4%]">

                            {
                                showPassword ? <FaRegEye></FaRegEye> : <FaEyeSlash></FaEyeSlash>
                            }

                        </button>
                        <div className="divider"></div>

                        <div className="flex flex-col lg:flex-row gap-4 justify-around items-center mb-6">
                            <div className="flex flex-col justify-center">
                                <p>Already have an account ?</p>
                                <Link to='/login' className="btn text-green-800 hover:font-bold"><button>Login</button></Link>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p>Or</p>
                                <button className="btn">Continue with Google
                                    <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center text-center flex-1/2 p-10">
                <img className=" flex items-center text-center justify-center w-11/12" src={signupimg} alt="" />
            </div>
        </div>
    )
}

export default Register