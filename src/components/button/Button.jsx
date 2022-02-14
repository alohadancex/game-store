import React from 'react'

import classNames from 'classnames'

import './button.css'

export const Button = ({ onCLick, type, children, size = 's' }) => {
	const btnClass = classNames({
		btn: true,
		'btn--secondary': type === 'secondary',
		'btn--primary': type === 'primary',
		'btn--small': type === 's',
		'btn--medium': type === 'm',
	})
	return (
		<button className={btnClass} onClick={onCLick}>
			{children}
		</button>
	)
}
