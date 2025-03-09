import { Link, NavLink } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserTie } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const [showSpacs, setShowSpacs] = useState(false);
    const spacsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (spacsRef.current && !spacsRef.current.contains(event.target)) {
                setShowSpacs(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                            <NavLink to={'/'} className={({ isActive }) => ` flex items-center text-lg gap-1 hover:text-red-400 hover:underline-red-800 px-2 rounded ${isActive ? "active underline text-red-700" : ""}`}> Home</NavLink>
                            <NavLink to={'/reviews'} className={({ isActive }) => ` flex items-center text-lg gap-1 hover:text-red-400 hover:underline-red-800 px-2 rounded ${isActive ? "active underline text-red-700" : ""}`}> All Reviews</NavLink>
                            {
                            user && user?.email ? <div className="relative" ref={spacsRef}>
                                <button onClick={() => setShowSpacs(!showSpacs)} className="flex items-center text-lg gap-1 hover:text-red-400 hover:underline-red-800 px-2 rounded">
                                    My Spacs
                                </button>
                                {showSpacs && (
                                    <div className="absolute bg-white shadow-md rounded mt-1 py-2 w-40">
                                        <NavLink to={'/addReview'} className={({ isActive }) => `block px-4 py-2 text-lg hover:bg-gray-200 ${isActive ? "text-red-700 underline" : ""}`}> Add Review</NavLink>
                                        <NavLink to={'/myReviews'} className={({ isActive }) => `block px-4 py-2 text-lg hover:bg-gray-200 ${isActive ? "text-red-700 underline" : ""}`}> My Reviews</NavLink>
                                        <NavLink to={'/watchlist'} className={({ isActive }) => `block px-4 py-2 text-lg hover:bg-gray-200 ${isActive ? "text-red-700 underline" : ""}`}> Watchlist</NavLink>
                                        <NavLink to={'/profile'} className={({ isActive }) => `block px-4 py-2 text-lg hover:bg-gray-200 ${isActive ? "text-red-700 underline" : ""}`}> My Profile</NavLink>
                                        
                                    </div>
                                )}
                            </div> : ''
                        }

                            <Link className="flex items-center text-xl gap-1 hover:text-red-400 hover:underline-red-800 px-2 rounded"><MdOutlineDarkMode /></Link>
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
                        <NavLink to={'/contact'} className={({ isActive }) => ` flex items-center text-lg gap-1 hover:text-red-400 hover:underline-red-800 px-2 rounded ${isActive ? "active underline text-red-700" : ""}`}> Contact </NavLink>

                        {
                            user && user?.email ? <div className="relative" ref={spacsRef}>
                                <button onClick={() => setShowSpacs(!showSpacs)} className="flex items-center text-lg gap-1 hover:text-red-400 hover:underline-red-800 px-2 rounded">
                                    My Spacs
                                </button>
                                {showSpacs && (
                                    <div className="absolute bg-white shadow-md rounded mt-1 py-2 w-40">
                                        <NavLink to={'/addReview'} className={({ isActive }) => `block px-4 py-2 text-lg hover:bg-gray-200 ${isActive ? "text-red-700 underline" : ""}`}> Add Review</NavLink>
                                        <NavLink to={'/myReviews'} className={({ isActive }) => `block px-4 py-2 text-lg hover:bg-gray-200 ${isActive ? "text-red-700 underline" : ""}`}> My Reviews</NavLink>
                                        <NavLink to={'/myWatchlist'} className={({ isActive }) => `block px-4 py-2 text-lg hover:bg-gray-200 ${isActive ? "text-red-700 underline" : ""}`}> Watchlist</NavLink>
                                        <NavLink to={'/profile'} className={({ isActive }) => `block px-4 py-2 text-lg hover:bg-gray-200 ${isActive ? "text-red-700 underline" : ""}`}> My Profile</NavLink>
                                        
                                    </div>
                                )}
                            </div> : ''
                        }                        

                        <Link className="flex items-center text-xl gap-1 hover:text-red-400 hover:underline-red-800 px-2 rounded"><MdOutlineDarkMode /></Link>
                        
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user && user?.email ? <div className="flex gap-2 items-center"> <img className="rounded-full w-10 h-10 hidden md:block" data-tooltip-id="tooltip-settings"
                        data-tooltip-content={`Hi ${user.displayName || 'User'}! `}  src={user?.photoURL} alt="" /> <Link to='/' className="btn btn-success text-white" onClick={logOut}> Log Out</Link></div> : <div className="flex gap-2 items-center"><FaUserTie className="w-10 h-10 hidden md:block"></FaUserTie> <Link to='/login' className="btn btn-success text-white">Login</Link></div>
                    }                   
                    <Tooltip id="tooltip-settings" place="bottom" effect="solid" />

                </div>
            </div>

        </div>
    );
};

export default NavBar;