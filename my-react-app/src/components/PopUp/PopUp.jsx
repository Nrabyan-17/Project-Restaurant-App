import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const PopUp = ({ showPopUp, setShowPopUp }) => {
    return (
        <>
          {showPopUp && (
            <div>
                <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 bacdrop-blur-sm">
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]">

                        {/* PopUp */}
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-2xl font-bold text-dark">Login</h1>
                            </div>
                            <div>
                                <IoCloseOutline className="text-2xl cursor-pointer" onClick={() => setShowPopUp(false)}/>
                            </div>
                        </div>

                        {/* Login Form Section */}
                        <div className="mt-4">
                            <input type="email" placeholder="Enter your Email" className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"/>
                            <input type="password" placeholder="Enter your Password" className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"/>
                        </div>

                        {/* Login Form Section */}
                        <div>
                            <button className="w-full text-white bg-rose-600 rounded-md p-2" onClick={() => setShowPopUp(false)}>Login</button>
                        </div>

                        {/* Social Icon */}
                        <div className="mt-4 text-center">
                            <p>or login with</p>

                            <div className="flex justify-center gap-3 mt-4">
                                <FaFacebook className="text-3xl hover:text-blue-500 duration-200 cursor-pointer"/>
                                <FaGoogle className="text-3xl hover:text-blue-500 duration-200 cursor-pointer"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
          )}
        </>
    )
}

export default PopUp;