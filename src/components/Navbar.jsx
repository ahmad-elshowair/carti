import React from 'react'
import { Link } from 'react-router-dom'
import {TiShoppingCart, TiHome} from 'react-icons/ti'
const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <div className="navbar">
          <Link to='/' className='logo'><span className='logo-letter'>B</span>rand</Link>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'><TiHome/></Link>
            </li>
            <li className='nav-item'>
              <Link to='cart' className='nav-link'><TiShoppingCart/></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;