import React from "react";
import "./slider.css";

import { homepage } from "../../assets/index";

export const Slider = () => {
	return (
		<div className='slider__container'>
			{homepage.map((item, index) => {
				return <img src={item} key={index} alt='' />;
			})}
		</div>
	);
};
