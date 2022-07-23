import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {TiShoppingCart, TiHome} from 'react-icons/ti'
import { CartContext } from '../Context'

const Navbar = () => {

  const {cart} = useContext(CartContext);

  return (
    <nav className='nav'>
      <div className='container'>
        <div className="navbar">
          <Link to='/home' className='logo'><span className='logo-letter'>B</span>rand</Link>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to='/home' className='nav-link'><TiHome/></Link>
            </li>
            <li className='nav-item'>
              <Link to='cart' className='nav-link'>
                <TiShoppingCart/>
                <span>{cart.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;