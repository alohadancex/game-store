import React from 'react'
import { Button } from '../button/Button'

import './game-buy.css'

export const GameBuy = ({ game }) => {
	return (
		<div className='game-buy'>
			<span className='game-buy__price'>{game.price} руб.</span>
			<Button onCLick={() => null} type='primary'>
				В корзину
			</Button>
		</div>
	)
}
