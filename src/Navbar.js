import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
    <img src='' alt='logo'/>
      <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/birdList'>Birds</Link>
      </div>
    </div>
  )
}

export default Navbar
