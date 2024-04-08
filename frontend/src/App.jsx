import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Login2 from './pages/Login2'
import Register from './pages/Register'

import Profile from './pages/Profile';
import Ride from './pages/Ride';
import Home from './pages/Home';
import Rides from './pages/Rides';



// import Home from './pages/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login2' element={<Login2/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/ride' element={<Ride/>}/>
      <Route path='/rides/:rideid' element={<Rides/>}/>

    
    </Routes>
    
    </BrowserRouter>
 
    </>
  )
}

export default App
