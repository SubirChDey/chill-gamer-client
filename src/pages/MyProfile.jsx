import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Link } from "react-router-dom";

const MyProfile = () => {

    const { user } = useContext(AuthContext)
    const { photoURL, email, displayName } = user || {};

    return (
        <div>
            <div
                className="hero h-[400px]"
                style={{
                    backgroundImage: "url(./background1.png)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h3 className="mb-5 text-3xl font-bold">Hello</h3>
                        <h2 className="text-5xl">{displayName}</h2>

                        <p className="m-5">
                            Welcome to your profile! Here, you can easily check, edit, and update your information to keep everything current.
                        </p>
                        <a href="#fullProfile" className="btn btn-primary">View Profile</a>
                    </div>
                </div>
            </div>
            <div className="w-8/12 mx-auto">
                <div id="fullProfile" className="text-center justify-center items-center gap-10 my-4 py-5 md:flex shadow-2xl">
                    <div className="max-w-[300px] h-[300px]">
                        <img className="w-full h-full rounded-full object-cover" src={photoURL} alt="" />
                    </div>
                    <div>
                        <p className="text-3xl mb-4"> <span className="text-gray-600">Full Name: </span>{displayName}</p>
                        <p className="text-xl"> <span className="text-gray-600">Email:</span> {email}</p>
                        <Link to={'/updateProfile'} className="btn mt-10 w-full btn-success"> Update Profile</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile