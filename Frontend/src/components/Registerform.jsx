import React from 'react'
import { registerUser } from '../api/user.api'
import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authslice';
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
        <div className='w-full max-w-md mx-auto'>
            <div onSubmit={Submithandler} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='text-2xl font-bold text-center mb-6'>Create an Account</h2>
                {error && (
                    <div className='mb-4 p-3 bg-red-100 text-red-700 rounded-md'>{error}</div>
                )}
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Full name</label>
                    <input
                        type="text"
                        id='name'
                        placeholder='Full name'
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
                </div>
                  <div  className='w-full max-w-md mx-auto'>     
                    <label htmlFor="email" className=' mt-2 block text-gray-700 text-sm font-bold mb-2'>email</label>
                    <input type="email"
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        required
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            </div>
            <div  className='w-full max-w-md mx-auto'>
                    <label htmlFor="Password" className=' mt-2 block text-gray-700 text-sm font-bold mb-2'>password</label>
                    <input type="password"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                        minLength={6}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

                </div>

                <div className='flex items-center justify-between '>
                    <button
                        onClick={Submithandler}
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type='submit'
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </div>
                <div className='text-center mt-4'>
                    <p className='text-sm cursor-pointer text-gray-600'> Already have an account?
                        <span onClick={() => state(true)} className="text-blue-500 hover:text-blue-700">  Login</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Registerform