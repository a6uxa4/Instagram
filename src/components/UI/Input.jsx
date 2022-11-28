import React, { useState } from 'react'
import styled from 'styled-components'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'

function Input({ placeholder, type, onChange, value }) {
	const [state, setState] = useState(false)
	function handleClick() {
		setState((item) => !item)
	}
	return (
		<>
			{type === 'text' ? (
				<StyledInput
					placeholder={placeholder}
					type='text'
					onChange={onChange}
					value={value}
				/>
			) : (
				<div>
					<StyledInputPassword
						onChange={onChange}
						placeholder={placeholder}
						value={value}
						type={state ? 'text' : 'password'}
					/>
					<StyledIcon onClick={handleClick}>
						{state ? <VscEye /> : <VscEyeClosed />}
					</StyledIcon>
				</div>
			)}
		</>
	)
}
const StyledInput = styled.input`
	width: 333px;
	height: 44px;
	border-radius: 5px;
	background: #fafafa;
	border: 0.5px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	color: #262626;
	padding-left: 10px;
	outline: none;
`
const StyledInputPassword = styled.input`
	width: 333px;
	height: 44px;
	border-radius: 5px;
	background: #fafafa;
	border: 0.5px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	color: #262626;
	padding-left: 10px;
	outline: none;
	position: relative;
`
const StyledIcon = styled.div`
	width: 15px;
	height: 15px;
	color: gray;
	position: relative;
	top: -30px;
	left: 315px;
`
export default Input
