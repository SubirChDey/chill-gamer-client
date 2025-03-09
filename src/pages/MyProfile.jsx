import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Link } from "react-router-dom";

const MyProfile = () => {

    const { user } = useContext(AuthContext)
    const { photoURL, email, displayName } = user || {};

    return (
        <div className="px-4">
            <div
                className="hero h-[300px]"
                >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h3 className="mb-5 text-2xl">Hello</h3>
                        <h2 className="text-4xl mb-2 font-bold">{displayName}</h2>

                        <p className=" mb-4">
                            Welcome to your profile! Here, you can easily check, edit, and update your information to keep everything current.
                        </p>
                        <a href="#fullProfile" className="btn btn-primary">View Profile</a>
                    </div>
                </div>
            </div>
            <div className="md:w-10/12 lg:w-8/12 mx-auto">
                <div id="fullProfile" className="text-center justify-center items-center gap-10 my-4 py-5 md:flex shadow-2xl px-4">
                    <div className="max-w-[300px] h-[300px]">
                        <img className="w-full h-full rounded-full object-cover" src={photoURL} alt="" />
                    </div>
                    <div>
                        <p className="text-3xl mb-4"> <span className="text-gray-600">Full Name: </span>{displayName}</p>
                        <p className="text-xl"> <span className="text-gray-600">Email:</span> {email}</p>
                        <Link to={'/updateProfile'} className="btn mt-10 w-full btn-success bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"> Update Profile</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile