import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import NavItems from './Components/NavItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavItems/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
