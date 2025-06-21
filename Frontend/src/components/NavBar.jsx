import React from "react";
import { Link } from '@tanstack/react-router'
// import logo from '../asset/'
const NavBar = () => {
    return (
        // <nav className="bg-white shadow-md py-2 px-4">
        //     <div className="  max-w-7xl mx-auto flex items-center justify-between">
        //         <div className="flex justify-between h-12">
        //             <div className="flex items-center">
        //                 <Link to="/" className="text-xl font-bold  text-gray-800">
        //                     Logout
        //                 </Link>
        //             </div>
        //             <div className="flex items-center">
        //                 {/* {isLogged ?(
        //                     <div className="space-x-4 flex items-center">
        //                         <span className="text-gray-700 "> Welcome {userName ||"User"}</span>
        //                         <button
        //                         onClick={onLogout}
        //                         className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
        //                         >Logout</button>
        //                     </div>
        //                 ):(
        //                     <Link
        //                     to="/auth"
        //                     className="bg-blue-500 hover:bg-blue-600 px-4  text-white py-2 rounded-md text-sm font-medium" 
        //                     >Login</Link>
        //                 )} */}


        //             </div>
        //         </div>

        //     </div>
        // </nav>
         <nav className="bg-gray-100  py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or App Name */}
        <div className="text-2xl font-bold text-blue-600">
          Shortening URL
        </div>

        {/* Logout Button */}
        <div>
          <Link
            to="/"
            className="text-white bg-red-600 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
    )
}

export default NavBar