import React from 'react';
import { GameCover } from '../game-cover/game-cover';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { deleteItemsFromCart } from '../../redux/cart/reducer';
import './order-item.css'

export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemsFromCart(game.id))
  }
  return (
    <div className='order-item'>
      <div className="order-item__cover">
        <GameCover image={game.image} />
      </div>
      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">
        <span>{game.price} грн.</span>
        <AiOutlineCloseCircle
          size={25}
          className='cart-item__delete-icon'
          onClick={handleClick} />
      </div>
    </div>
  )
}
