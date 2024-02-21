import React from 'react';
import { ButtonCustom } from '../button-custom/button-custom';
import { calcTotalPrice } from '../utils';
import './cart-menu.css';
import { CartItem } from '../cart-item/cart-item';


export const CartMenu = ({ items, onClick }) => {
  return (
    <div className='cart-menu'>
      <div className='cart-menu__games-list'>
        {items.length > 0 ? items.map((game) => (
          <CartItem
            key={game.title}
            price={game.price}
            title={game.title}
            id={game.id}
          />
        ))
          : 'Cart is empty'}
      </div>
      {items.length > 0 ? (
        <div className='cart-menu__arrange'>
          <div className="cart-menu__total-price">
            <span>Total:</span>
            <span>{calcTotalPrice(items)} грн.</span>
          </div>
          <ButtonCustom type='primary' size='m' onClick={onClick}>
            Check out
          </ButtonCustom>

        </div>
      ) : null}


    </div>
  );
};
