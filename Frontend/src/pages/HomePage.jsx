import React from 'react'
import UrlForm from '../components/urlform'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
    //   <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md transition-all duration-300">
    //     <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-4 tracking-tight">URL-Shortener</h1>
    //      <p className="text-center text-gray-500 text-sm mb-6">
    //       Paste a link to make it shorter. Fast. Simple. Free.
    //     </p>
    //     <UrlForm />
    //     <div className='text-center mt-6'>
    //                 <p className='text-sm cursor-pointer text-gray-600'> Already have an account
    //                     <Link to={'/auth'} className="text-blue-500 font-semibold hover:underline">  Login</Link>
    //                 </p>
    //     </div>
    //   </div>
      
    // </div>



    //  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6">
    //   <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md transform transition-all duration-300 hover:scale-[1.01]">
    //     {/* Title + Emoji */}
    //     <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-2 tracking-tight">
    //       🔗 URL Shortener
    //     </h1>
    //     <p className="text-center text-gray-500 text-sm mb-8">
    //       Paste your long link below and shorten it instantly.
    //     </p>

    //     {/* URL Form */}
    //     <UrlForm />

    //     {/* Footer Login Link */}
    //     <div className="text-center mt-8">
    //       <p className="text-sm text-gray-600">
    //         Already have an account?{' '}
    //         <Link
    //           to="/auth"
    //           className="text-blue-500 font-semibold hover:underline hover:text-blue-700 transition-colors"
    //         >
    //           Login
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    //  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-10">
    //   <div className="bg-white shadow-2xl rounded-[2rem] p-12 w-full max-w-3xl transform transition-all duration-300 hover:scale-[1.01]">
    //     {/* Title + Emoji */}
    //     <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-4 tracking-tight leading-tight">
    //       🔗 URL Shortener
    //     </h1>
    //     <p className="text-center text-gray-600 text-lg mb-10 max-w-xl mx-auto">
    //       Quickly shorten your long links with ease. It's fast, free, and simple to use — perfect for sharing.
    //     </p>

    //     {/* URL Form */}
    //     <div className="max-w-2xl mx-auto">
    //       <UrlForm />
    //     </div>

    //     {/* Footer Login Link */}
    //     <div className="text-center mt-10">
    //       <p className="text-base text-gray-700">
    //         Already have an account?{' '}
    //         <Link
    //           to="/auth"
    //           className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-colors"
    //         >
    //           Login
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white shadow-2xl rounded-[2rem] p-12 w-full max-w-3xl transform transition-all duration-300 hover:scale-[1.01]"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-extrabold text-center text-blue-600 mb-4 tracking-tight leading-tight"
        >
          🔗 URL Shortener
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-gray-600 text-lg mb-10 max-w-xl mx-auto"
        >
          Quickly shorten your long links with ease. It's fast, free, and simple to use — perfect for sharing.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <UrlForm />
        </motion.div>

        {/* Login Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-base text-gray-700">
            Already have an account?{' '}
            <Link
              to="/auth"
              className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-colors"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )

}

export default HomePage