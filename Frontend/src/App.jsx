import React from 'react'
import HomePage from './pages/HomePage'
import Loginform from './components/Loginform'
import Authpage from './pages/authpage'
import Registerform from './components/Registerform'
import { Outlet } from '@tanstack/react-router'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
    {/* <NavBar/> */}
    <Outlet/>
    {/* <Registerform/> */}
    {/* <Authpage/> */}
    {/* <Loginform/> */}
    
    {/* <HomePage></HomePage> */}
    </>
  )
}

export default App