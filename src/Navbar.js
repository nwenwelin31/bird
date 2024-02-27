import React from 'react'
import { Link } from 'react-router-dom'
import birdLogo from './birdlogo.avif'
const Navbar = () => {
  return (
    <div className='navbar'>
    <img src={birdLogo} alt='logo' style={{ width: '10rem' }}/>
      <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/birdList'>Birds</Link>
      </div>
      <div>
        <Link to='/' className='btn btn-secondary'>Let's Fly</Link>
      </div>
    </div>
  )
}

export default Navbar
