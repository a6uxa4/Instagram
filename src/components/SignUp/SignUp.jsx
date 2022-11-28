import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Input from '../UI/Input'
import Button from '../UI/Button'

function SignUp() {
	const [nick, setNick] = useState('')
	const [password, setPassword] = useState('')
	const [colorButton, setColorButton] = useState(false)

	async function handleClick() {
		if (!nick.trim()) return setColorButton(false)
		if (!password.trim()) return setColorButton(false)
		await fetch(
			'https://instagram-ace5e-default-rtdb.firebaseio.com/user.json',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					Password: password,
					Nick: nick,
				}),
			},
		)
		setNick('')
		setPassword('')
	}
	function handleValue(e) {
		setPassword(e.target.value)
	}
	useEffect(() => {
		if (nick === '') {
			setColorButton(false)
		} else {
			if (password === '') {
				setColorButton(false)
			} else {
				setColorButton(true)
			}
		}
	}, [handleValue])

	return (
		<SignUpContainer>
			<StyledSignUpMain>
				<StyledMainLogo src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2a%2FInstagram_logo.svg%2F1200px-Instagram_logo.svg.png&f=1&nofb=1&ipt=7ce61561f10d1348e507710457bb768909da8265876be6581893a12c0785128c&ipo=images' />
				<StyledContainer>
					<Input
						onChange={(e) => setNick(e.target.value)}
						value={nick}
						placeholder='Телефон, имя пользователя или эл. адрес'
						type='text'
					/>
					<Input
						placeholder='Пароль'
						onChange={handleValue}
						value={password}
					/>
					<Button dannyi={colorButton} onClick={handleClick}>
						Войти
					</Button>
				</StyledContainer>
			</StyledSignUpMain>
		</SignUpContainer>
	)
}
const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const StyledContainer = styled.div`
	width: 466px;
	height: 220px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`
const StyledSignUpMain = styled.div`
	width: 466px;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`
const StyledMainLogo = styled.img`
	width: 150px;
`
export default SignUp
