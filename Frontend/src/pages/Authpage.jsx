import React, { useEffect } from 'react'
import Loginform from '../components/Loginform'
import Registerform from '../components/Registerform'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/slice/authslice'



const Authpage = () => {
  const [login, setLogin] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    // Clear any leftover authenticated state on entering /auth
    dispatch(logout())
  }, [dispatch])

  // const [login, setLogin] = useState(true)
  return (
    <div className='h-screen bg-gray-100 flex flex-col items-center justify-center'>
      {login ? <Loginform state={setLogin} /> : <Registerform state={setLogin} />}
    </div>
  )
}

export default Authpage