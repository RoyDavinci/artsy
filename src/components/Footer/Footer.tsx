import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export const Footer = () => {
	return (
		<footer className='footer__main__container my-16 '>
			<div className='grid footer__div__container'>
				<h1 className='hide'>ARTSY.</h1>
				<ul className='hide'>
					<li>
						<Link to='/home'>Home</Link>
					</li>
					<li>
						<Link to='/home'>Marketplace</Link>
					</li>
					<li>
						<Link to='/home'>Auctions</Link>
					</li>
					<li>
						<Link to='/home'>Drops</Link>
					</li>
				</ul>
				<ul className='hide'>
					<li>
						<Link to='/'>Blog</Link>
					</li>
					<li>
						<Link to='/'>Wallets</Link>
					</li>
					<li>
						<Link to='/'>Rates</Link>
					</li>
					<li>
						<Link to='/'>High Bids</Link>
					</li>
				</ul>
				<h1 className='header__hide'>REACH US</h1>
				<ul className='details__list__container'>
					<li className='flex my-4'>
						<EmailOutlinedIcon />
						<p className='mx-4'>artsystudios@gmail.com</p>
					</li>
					<li className='flex'>
						<LocationOnOutlinedIcon /> <p className='mx-4'> Lagos, Nigeria.</p>
					</li>
				</ul>
			</div>
			<p className='footer__paragraph my-6 hide'>
				Artsystudios © 2022. All Rights Reserved.
			</p>
		</footer>
	);
};
