import React from 'react'
import UrlForm from '../components/urlform'
import UserUrl from '../components/UserUrl'
import NavBar from '../components/NavBar'
import { motion } from 'framer-motion'

const DashboardPage = () => {
  return (
    // <div className='min-h-screen '>
    //   <NavBar/>
    //  <div className='flex flex-col items-center justify-center p-4'>
    //    <div className='bg-white mt-8 p-8 rounded-lg shadow-md w-full max-w-4xl'>
    //     <h1 className='text-2xl font-bold text-center mb-6'>URL-Shortener</h1>
    //     <UrlForm />
    //     <UserUrl />
    //   </div>
    //  </div>
    // </div>

     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100">
      <NavBar />
      <div className="flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white mt-10 p-10 rounded-2xl shadow-xl w-full max-w-4xl"
        >
          <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
            🔗 URL Shortener Dashboard
          </h1>
          <UrlForm />
          <UserUrl />
        </motion.div>
      </div>
    </div>
  )
}

export default DashboardPage