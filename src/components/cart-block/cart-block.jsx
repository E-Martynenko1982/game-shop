import React, { useCallback, useState } from 'react';
import './cart-block.css';
import { BsCartCheckFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { CartMenu } from '../cart-menu/cart-menu';
import { calcTotalPrice } from '../utils';
import { ItemsInCart } from '../items-in-cart/items-in-cart';
import { useNavigate } from 'react-router-dom';

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate('/order');
  }, [navigate])
  return (
    <div className='cart-block'>
      <ItemsInCart quantity={items.length} />
      <BsCartCheckFill size={25} className='cart-block__icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
      {totalPrice > 0 ? (<span className='cart-block__total-price'>{totalPrice} грн</span>) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  )
}
