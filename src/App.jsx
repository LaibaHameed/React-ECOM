import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import NavItem from './Components/NavItem'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavItem/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
