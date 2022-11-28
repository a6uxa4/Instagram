import React from 'react'
import styled from 'styled-components'

function Button({ children, dannyi, onClick }) {
	return (
		<>
			<StyledButton onClick={onClick} dannyi={dannyi}>
				{children}
			</StyledButton>
		</>
	)
}
const StyledButton = styled.button`
	width: 343px;
	height: 44px;
	border-radius: 5px;
	background-color: ${(item) => (item.dannyi ? '#0095f6' : '#47afff')};
	border: none;
	font-family: 'SF Pro Text';
	color: white;
	font-size: 14px;
`

export default Button
