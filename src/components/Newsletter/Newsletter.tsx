import React from "react";
import "./newsletter.css";

export const Newsletter = () => {
	return (
		<div className='newsletter__top__container px-6 my-10'>
			<div className='newsletter__container'>
				<h1>NEWSLETTER</h1>
				<h2>Subscribe to get daily updates on new drops & exciting deals </h2>
				<form action=''>
					<input type='email' name='' id='' placeholder='ENTER YOUR EMAIL' />
					<button>SUBSCRIBE</button>
				</form>
			</div>
		</div>
	);
};
