import React from 'react';
import './game-page.css';
import { useSelector } from 'react-redux';
import { GameCover } from '../../components/game-cover/game-cover';
import { GameGenre } from '../../components/game-genre/game-genre';
import { GameBuy } from '../../components/game-buy/game-buy';

export const GamePage = () => {

  const gameItem = useSelector(state => state.game.currentGame);


  if (!gameItem) return null;

  return (
    <div className='game-page'>
      <h1 className="game-page__title">{gameItem.title}</h1>
      <div className='game-page__content'>
        <div className="game-page__left">
          <iframe
            width='90%'
            height='400px'
            src={gameItem.video}
            title='Youtube Video Player'
            style={{ border: '0px' }}
          >
          </iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={gameItem.image} />
          <p>{gameItem.description}</p>
          <p className="secondary-text">Popular tags for this product:</p>
          {gameItem.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
          <div className="game-page__buy-game">
            <GameBuy game={gameItem} />
          </div>
        </div>
      </div>
    </div>
  )
}
