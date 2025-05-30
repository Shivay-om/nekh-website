import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/nav/Navbar'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative'>
      <div className='absolute w-full top-0 z-50'><Header /></div>
      
      {/* <Navbar/> */}
      <Home />
      <Footer />
    </div>
  )
}

export default App
