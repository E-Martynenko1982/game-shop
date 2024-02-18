import React from 'react'
import "./game-buy.css"
import { ButtonCustom } from '../button-custom/button-custom'
export const GameBuy = ({game}) => {
  return (
    <div className='game-buy'>
      <span className='game-buy__price'>{game.price} грн.</span>
      <ButtonCustom 
        type='primary'
        onClick={() => null}
      >
        Add to cart
</ButtonCustom>
    </div>
  )
}
