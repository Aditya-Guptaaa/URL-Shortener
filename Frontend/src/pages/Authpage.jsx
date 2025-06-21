import React from 'react'
import Loginform from '../components/Loginform'
import Registerform from '../components/Registerform'
import { useState } from 'react'

const Authpage = () => {
  const [login, setLogin] = useState(true)
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      {login ? <Loginform state={setLogin} /> : <Registerform state={setLogin} />}
    </div>
  )
}

export default Authpage