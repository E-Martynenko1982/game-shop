import React from 'react'
import "./game-buy.css"
import { ButtonCustom } from '../button-custom/button-custom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemsFromCart, setItemsInCart } from '../../redux/cart/reducer';

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart);
  const isItemInCart = items.some(item => item.id === game.id);
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemsFromCart(game.id))
    } else {
      dispatch(setItemsInCart(game));
    }

  }

  return (
    <div className='game-buy'>
      <span className='game-buy__price'>{game.price} грн.</span>
      <ButtonCustom
        type={isItemInCart ? 'secondary' : 'primary'}
        onClick={handleClick}
      >
        {isItemInCart ? 'Delete from cart' : 'Add to cart'}
      </ButtonCustom>
    </div>
  )
}
