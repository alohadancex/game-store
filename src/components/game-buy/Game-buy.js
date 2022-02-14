import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'

import { Button } from '../button/Button'

import './game-buy.css'

export const GameBuy = ({ game }) => {
	const dispatch = useDispatch()
	const items = useSelector(state => state.cart.itemsInCart)
	const isItemsInCart = items.some(item => item.id === game.id)

	const handleClick = e => {
		e.stopPropagation()
		if (isItemsInCart) {
			dispatch(deleteItemFromCart(game.id))
		} else {
			dispatch(setItemInCart(game))
		}
	}

	return (
		<div className='game-buy'>
			<span className='game-buy__price'>{game.price} руб.</span>
			<Button
				onCLick={handleClick}
				type={isItemsInCart ? 'secondary' : 'primary'}
			>
				{isItemsInCart ? 'Убрать из корзины' : 'В корзину'}
			</Button>
		</div>
	)
}
