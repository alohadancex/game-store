import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

import { BiCartAlt } from 'react-icons/bi'

import './cart-block.css'
import { calcTotalPrice } from '../../utils'
import { CartMenu } from '../cart-menu/Cart-menu'
import { ItemsInCart } from '../items-in-cart/ItemsInCart'
import { useHistory } from "react-router-dom";

export const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
	const items = useSelector(state => state.cart.itemsInCart)
	const totalPrice = calcTotalPrice(items)
	const history = useHistory()

	const handleClick = useCallback(() => {
		setIsCartMenuVisible(false)
		history.push('/order')
	}, [history])


	return (
		<div className='cart-block'>
			<ItemsInCart quantity={items.length} />
			<BiCartAlt
				size={25}
				className='cart-block__icon'
				onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
			/>
			{totalPrice > 0 ? (
				<span className='cart-block__total-price'>{totalPrice} руб.</span>
			) : null}
			{isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
		</div>
	)
}
