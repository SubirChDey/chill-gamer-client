import { Link, NavLink } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)

    return (
        <div className="w-11/12 max-w-[1340px] mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink> Home</NavLink>
                            <NavLink> All Reviews</NavLink>
                        </ul>
                    </div>
                    {/* <Link to={'/'} className="btn btn-ghost text-xl"><i>Chill Gamer</i></Link> */}
                    <Link to={'/'} className=" hover:font-bold font-semibold text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        <i>Chill Gamer</i>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <NavLink to={'/'} className={({ isActive }) => ` flex items-center text-lg gap-1 hover:text-red-400 hover:underline-red-800 px-2 rounded ${isActive ? "active underline text-red-700" : ""}`}> Home</NavLink>
                        <NavLink to={'/reviews'} className={({ isActive }) => ` flex items-center text-lg gap-1 hover:text-red-400 hover:underline-red-800 px-2 rounded ${isActive ? "active underline text-red-700" : ""}`}> All Reviews</NavLink>
                        <NavLink to={'/register'} className={({ isActive }) => ` flex items-center text-lg gap-1 hover:text-red-400 hover:underline-red-800 px-2 rounded ${isActive ? "active underline text-red-700" : ""}`}> More</NavLink>
                        <Link className="flex items-center text-xl gap-1 hover:text-red-400 hover:underline-red-800 px-2 rounded"><MdOutlineDarkMode /></Link>

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>

        </div>
    );
};

export default NavBar;