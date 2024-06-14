import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import About from './components/About'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'

const App = () => {
  const location = useLocation()
  const noNavbar = location.pathname === '/signup' || location.pathname === '/'
  return (
    <>
    {
      noNavbar
      ?
        <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>

      :
        <Navbar
          content = {
            <Routes>
              <Route element={<ProtectedRoutes/>}>
                  <Route path='/home' element={<Home></Home>}></Route>
                  <Route path='/about' element={<About></About>}></Route>
              </Route>
                </Routes>
          }
        >
        </Navbar>
      }
    </>
  )
}

export default App