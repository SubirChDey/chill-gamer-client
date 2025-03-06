import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { manageProfile, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
  
    const handleSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;

        manageProfile(name, photo)
            .then(() => {
                setUser((prev) => {
                    return { ...prev, displayName: name, photoURL: photo }
                })
                toast.success('Successfully Updated Your Profile.')
                navigate('/profile');
            })
            .catch(error => toast.error(error.message))

    }

    return (
        <div className="my-4">
            <div className="text-center py-4">
                <h3 className="text-3xl text-violet-800 font-bold">Update your profile</h3>
            </div>
            <div className="max-w-2xl mx-auto shadow-2xl p-6 my-6">
                <form onSubmit={handleSubmit} action="">
                    <div className="flex flex-col w-full mb-3">
                        <label className="label py-2">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your name" className="input input-bordered w-full" required />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="label py-2">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter your photo link" className="input input-bordered w-full" required />
                    </div>
                    <div className="mt-6 mb-2">
                        <button className="btn btn-success w-full text-white">Update</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default UpdateProfile