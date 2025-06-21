import React from "react";
import { Link, useNavigate } from '@tanstack/react-router'
import { useDispatch } from 'react-redux'
import { logout } from "../store/slice/authslice";
import { motion } from "framer-motion";
// import logo from '../asset/'
const NavBar = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate({ to: '/' })
  }
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


    // <nav className="bg-gray-100  py-3 px-6">
    //   <div className="max-w-7xl mx-auto flex items-center justify-between">
    //     {/* Logo or App Name */}
    //     <div className="text-2xl font-bold text-blue-600">
    //       Shortening URL
    //     </div>

    //     {/* Logout Button */}
    //     <div>
    //       <button
    //         onClick={handleLogout}
    //         className="text-white bg-red-600 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   </div>
    // </nav>

     <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md py-4 px-6 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* App Name */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl font-extrabold text-blue-600 tracking-tight"
        >
          Shortening URL
        </motion.div>

        {/* Logout Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md transition-all duration-300"
        >
          Logout
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default NavBar