import React from 'react'
import './cart-block.css';
import { BsCartCheckFill } from 'react-icons/bs';

export const CartBlock = () => {
  return (
    <div className='cart-block'>
      <BsCartCheckFill size={25} className='cart-block__icon' />
      <span className='cart-block__total-price'>1400 грн</span>
    </div>
  )
}
