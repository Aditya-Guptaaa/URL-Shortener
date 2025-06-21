import React from 'react'
import UrlForm from '../components/urlform'
import UserUrl from '../components/UserUrl'
import NavBar from '../components/NavBar'

const DashboardPage = () => {
  return (
    <div className='min-h-screen bg-gray-100 '>
      <NavBar/>
     <div className='flex flex-col items-center justify-center p-4'>
       <div className='bg-white mt-8 p-8 rounded-lg shadow-md w-full max-w-4xl'>
        <h1 className='text-2xl font-bold text-center mb-6'>URL-Shortener</h1>
        <UrlForm />
        <UserUrl />
      </div>
     </div>
    </div>
  )
}

export default DashboardPage