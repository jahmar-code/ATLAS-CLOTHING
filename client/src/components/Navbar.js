import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShopping} from 'react-icons/ai'

import { Cart } from './'
import { useStateContext } from '../context/StateContext'

export default function Navbar() {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='navbar-container'>
        <p className='logo'>
            <Link to="/">ATLAS CLOTHING</Link>
        </p>

        <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className='cart-item-qty'>{totalQuantities}</span>


        </button>
        {showCart && <Cart />}
    </div>
  )
}
