import React from 'react'
import { registerUser } from '../api/user.api'
import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authslice';
import { motion } from 'framer-motion';
const Registerform = ({ state }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const Submithandler = async (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password must be atleast 6 character long')
            return
        }
        setLoading(true)
        setError('')

        try {
            const data = await registerUser(name, password, email)
            setLoading(false)
            dispatch(login(data.user))
            navigate({ to: '/dashboard' })


        }
        catch (err) {
            setLoading(false)
            setError(err.message || 'Registration failed')
        }
    }
    return (
        // <div className='w-full max-w-md mx-auto'>
        //     <div onSubmit={Submithandler} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        //         <h2 className='text-2xl font-bold text-center mb-6'>Create an Account</h2>
        //         {error && (
        //             <div className='mb-4 p-3 bg-red-100 text-red-700 rounded-md'>{error}</div>
        //         )}
        //         <div className='mb-4'>
        //             <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Full name</label>
        //             <input
        //                 type="text"
        //                 id='name'
        //                 placeholder='Full name'
        //                 value={name}
        //                 required
        //                 onChange={(e) => setName(e.target.value)}
        //                 className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
        //         </div>
        //           <div  className='w-full max-w-md mx-auto'>     
        //             <label htmlFor="email" className=' mt-2 block text-gray-700 text-sm font-bold mb-2'>email</label>
        //             <input type="email"
        //                 id='email'
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 placeholder='Email'
        //                 required
        //                 className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        //     </div>
        //     <div  className='w-full max-w-md mx-auto'>
        //             <label htmlFor="Password" className=' mt-2 block text-gray-700 text-sm font-bold mb-2'>password</label>
        //             <input type="password"
        //                 id='password'
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 placeholder='Password'
        //                 required
        //                 minLength={6}
        //                 className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

        //         </div>

        //         <div className='flex items-center justify-between '>
        //             <button
        //                 onClick={Submithandler}
        //                 className={`bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        //                 type='submit'
        //                 disabled={loading}
        //             >
        //                 {loading ? 'Creating Account...' : 'Create Account'}
        //             </button>
        //         </div>
        //         <div className='text-center mt-4'>
        //             <p className='text-sm cursor-pointer text-gray-600'> Already have an account?
        //                 <span onClick={() => state(true)} className="text-blue-500 hover:text-blue-700">  Login</span>
        //             </p>
        //         </div>
        //     </div>
        // </div>
    //      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
    //   <motion.div
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5 }}
    //     className="bg-white shadow-xl rounded-2xl px-10 py-8 w-full max-w-md"
    //   >
    //     <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Create an Account</h2>

    //     {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}

    //     <form onSubmit={Submithandler}>
    //       <div className="mb-4">
    //         <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
    //         <input
    //           type="text"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //           placeholder="John Doe"
    //           required
    //           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
    //         />
    //       </div>

    //       <div className="mb-4">
    //         <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           placeholder="you@example.com"
    //           required
    //           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
    //         />
    //       </div>

    //       <div className="mb-6">
    //         <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
    //         <input
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           placeholder="At least 6 characters"
    //           minLength={6}
    //           required
    //           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         disabled={loading}
    //         className={`w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-all ${
    //           loading ? 'opacity-50 cursor-not-allowed' : ''
    //         }`}
    //       >
    //         {loading ? 'Creating Account...' : 'Create Account'}
    //       </button>
    //     </form>

    //     <div className="text-center mt-5 text-sm text-gray-600">
    //       Already have an account?{' '}
    //       <span
    //         onClick={() => state(true)}
    //         className="text-blue-500 cursor-pointer hover:underline"
    //       >
    //         Login
    //       </span>
    //     </div>
    //   </motion.div>
    // </div>

    // <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
    //   <motion.div
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5 }}
    //     className="w-full max-w-sm bg-white shadow-xl rounded-2xl px-8 py-10"
    //   >
    //     <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">
    //       Create an Account
    //     </h2>

    //     {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}

    //     <form onSubmit={Submithandler}>
    //       <div className="mb-4">
    //         <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
    //         <input
    //           type="text"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //           placeholder="John Doe"
    //           required
    //           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
    //         />
    //       </div>

    //       <div className="mb-4">
    //         <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           placeholder="you@example.com"
    //           required
    //           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
    //         />
    //       </div>

    //       <div className="mb-6">
    //         <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
    //         <input
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           placeholder="At least 6 characters"
    //           minLength={6}
    //           required
    //           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         disabled={loading}
    //         className={`w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-all ${
    //           loading ? 'opacity-50 cursor-not-allowed' : ''
    //         }`}
    //       >
    //         {loading ? 'Creating Account...' : 'Create Account'}
    //       </button>
    //     </form>

    //     <div className="text-center mt-5 text-sm text-gray-600">
    //       Already have an account?{' '}
    //       <span
    //         onClick={() => state(true)}
    //         className="text-blue-500 cursor-pointer hover:underline"
    //       >
    //         Login
    //       </span>
    //     </div>
    //   </motion.div>
    // </div>

      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl px-12 py-10"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create an Account
        </h2>

        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}

        <form onSubmit={Submithandler}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              minLength={6}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-all ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="text-center mt-5 text-sm text-gray-600">
          Already have an account?{' '}
          <span
            onClick={() => state(true)}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login
          </span>
        </div>
      </motion.div>
    </div>
    )
}

export default Registerform