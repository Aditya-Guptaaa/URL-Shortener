import React from 'react'
import { loginUser } from '../api/user.api'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/slice/authslice.js'
import { useNavigate } from '@tanstack/react-router';
import { motion } from 'framer-motion'
const Loginform = ({ state }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)


    const Submithandler = async () => {
        setLoading(true)
        setError('')

        try {
            const data = await loginUser(password, email)

            dispatch(login(data.user))

            navigate({ to: '/dashboard' })
            setLoading(false)


        } catch (err) {
            setLoading(false)
            setError(err.message || 'Log in failed please check your credentials')
        }
    }
    return (
        // <div className='w-full max-w-md mx-auto'>
        //     <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        //         <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
        //         {error && (
        //             <div className='mb-4 p-3 bg-red-100 text-red-700 rounded-md'>{error}</div>
        //         )}
        //         <div className='mb-4'>
        //             <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
        //             <input
        //                 type="email"
        //                 id='email'
        //                 placeholder='Email'
        //                 value={email}
        //                 required
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
        //         </div>
        //         <div className='mb-6'>
        //             <label htmlFor="Password" className=' mt-2 block text-gray-700 text-sm font-bold mb-2'>Password</label>
        //             <input 
        //                 type="password"
        //                 id='password'
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 placeholder='Password'
        //                 required
        //                 className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        //         </div>

        //         <div className='flex items-center justify-between '>
        //             <button
        //                 onClick={Submithandler}
        //                 className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        //                 type='submit'
        //                 disabled={loading}
        //             >
        //                 {loading ? 'Signing in...' : 'Sign in'}
        //             </button>
        //         </div>
        //         <div className='text-center mt-4'>
        //             <p className='text-sm cursor-pointer text-gray-600'> Don't have an account?
        //                 <span onClick={() => state(false)} className="text-blue-500 hover:text-blue-700"> Register</span>
        //             </p>
        //         </div>
        //     </div>
        // </div>

    //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6">
    //   <motion.div
    //     initial={{ opacity: 0, y: 40 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6, ease: 'easeOut' }}
    //     className="bg-white shadow-2xl rounded-[2rem] p-10 w-full max-w-md"
    //   >
    //     <motion.h2
    //       initial={{ opacity: 0, scale: 0.95 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ delay: 0.1, duration: 0.5 }}
    //       className="text-3xl font-extrabold text-center text-blue-600 mb-6"
    //     >
    //       Login to your Account
    //     </motion.h2>

    //     {error && (
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ delay: 0.1 }}
    //         className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-md"
    //       >
    //         {error}
    //       </motion.div>
    //     )}

    //     <div className="mb-4">
    //       <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
    //         Email
    //       </label>
    //       <input
    //         id="email"
    //         type="email"
    //         placeholder="Enter your email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
    //         required
    //       />
    //     </div>

    //     <div className="mb-6">
    //       <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
    //         Password
    //       </label>
    //       <input
    //         id="password"
    //         type="password"
    //         placeholder="Enter your password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
    //         required
    //       />
    //     </div>

    //     <motion.button
    //       whileHover={{ scale: 1.03 }}
    //       whileTap={{ scale: 0.97 }}
    //       onClick={Submithandler}
    //       disabled={loading}
    //       className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-colors ${
    //         loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
    //       }`}
    //     >
    //       {loading ? 'Signing in...' : 'Sign in'}
    //     </motion.button>

    //     <div className="text-center mt-6">
    //       <p className="text-sm text-gray-600">
    //         Don&apos;t have an account?{' '}
    //         <span
    //           onClick={() => state(false)}
    //           className="text-blue-500 font-semibold hover:underline cursor-pointer"
    //         >
    //           Register
    //         </span>
    //       </p>
    //     </div>
    //   </motion.div>
    // </div>

    //  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6">
    //   <motion.div
    //     initial={{ opacity: 0, y: 40 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6, ease: 'easeOut' }}
    //     className="bg-white shadow-2xl rounded-[2rem] p-12 w-full max-w-2xl"
    //   >
    //     <motion.h2
    //       initial={{ opacity: 0, scale: 0.95 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ delay: 0.1, duration: 0.5 }}
    //       className="text-4xl font-extrabold text-center text-blue-600 mb-8"
    //     >
    //       Login to your Account
    //     </motion.h2>

    //     {error && (
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ delay: 0.1 }}
    //         className="mb-4 p-4 bg-red-100 text-red-700 text-sm rounded-md"
    //       >
    //         {error}
    //       </motion.div>
    //     )}

    //     <div className="mb-6">
    //       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
    //         Email
    //       </label>
    //       <input
    //         id="email"
    //         type="email"
    //         placeholder="Enter your email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         className="w-full border rounded-lg px-5 py-3 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
    //         required
    //       />
    //     </div>

    //     <div className="mb-8">
    //       <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
    //         Password
    //       </label>
    //       <input
    //         id="password"
    //         type="password"
    //         placeholder="Enter your password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         className="w-full border rounded-lg px-5 py-3 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
    //         required
    //       />
    //     </div>

    //     <motion.button
    //       whileHover={{ scale: 1.03 }}
    //       whileTap={{ scale: 0.97 }}
    //       onClick={Submithandler}
    //       disabled={loading}
    //       className={`w-full bg-blue-600 text-white py-3 px-6 text-base rounded-xl font-semibold shadow-md transition-colors ${
    //         loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
    //       }`}
    //     >
    //       {loading ? 'Signing in...' : 'Sign in'}
    //     </motion.button>

    //     <div className="text-center mt-6">
    //       <p className="text-sm text-gray-600">
    //         Don&apos;t have an account?{' '}
    //         <span
    //           onClick={() => state(false)}
    //           className="text-blue-500 font-semibold hover:underline cursor-pointer"
    //         >
    //           Register
    //         </span>
    //       </p>
    //     </div>
    //   </motion.div>
    // </div>
     <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white shadow-2xl rounded-[2rem] p-12 w-[100%] max-w-3xl"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-blue-600 mb-8"
        >
          Login to your Account
        </motion.h2>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 p-4 bg-red-100 text-red-700 text-sm rounded-md"
          >
            {error}
          </motion.div>
        )}

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-5 py-3 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
            required
          />
        </div>

        <div className="mb-8">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-5 py-3 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={Submithandler}
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-3 px-6 text-base rounded-xl font-semibold shadow-md transition-colors ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </motion.button>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <span
              onClick={() => state(false)}
              className="text-blue-500 font-semibold hover:underline cursor-pointer"
            >
              Register
            </span>
          </p>
        </div>
      </motion.div>
    </div>
    )
}

export default Loginform