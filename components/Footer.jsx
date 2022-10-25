import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'


const Footer = () => {
	return (
		<div className="footer-container">
			<p>2022 Dawana's Bistro All rights reserved</p>
			<p className="icons">
				<AiFillGithub />
				<AiFillLinkedin />
			</p>
		</div>
	)
}

export default Footer