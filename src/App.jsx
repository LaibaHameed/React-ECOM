import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import NavItem from './Components/NavItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavItem/>
      <Outlet/>
    </>
  )
}

export default App
