import React from 'react'
import { loginUser } from '../api/user.api'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/slice/authslice.js'
import { useNavigate } from '@tanstack/react-router';

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
        <div className='w-full max-w-md mx-auto'>
            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
                {error && (
                    <div className='mb-4 p-3 bg-red-100 text-red-700 rounded-md'>{error}</div>
                )}
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
                    <input
                        type="email"
                        id='email'
                        placeholder='Email'
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
                </div>
                <div className='mb-6'>
                    <label htmlFor="Password" className=' mt-2 block text-gray-700 text-sm font-bold mb-2'>Password</label>
                    <input 
                        type="password"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>

                <div className='flex items-center justify-between '>
                    <button
                        onClick={Submithandler}
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type='submit'
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </div>
                <div className='text-center mt-4'>
                    <p className='text-sm cursor-pointer text-gray-600'> Don't have an account?
                        <span onClick={() => state(false)} className="text-blue-500 hover:text-blue-700"> Register</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Loginform