import React from "react";
import "./featured.css";
import User from "../../assets/jpg/pexels-tuấn-kiệt-jr-1386604.jpg";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

import { items } from "../../assets/index";

export const Featured = () => {
	return (
		<div className='featured__items__containerr lg:mx-32'>
			{items.map((item, index) => {
				return index % 2 === 0 ? (
					<div
						className='featured__items__container__div grid lg:grid-cols-2 gap-10'
						key={index}
					>
						<img src={item.image} alt='' />
						<div className='featured__items__container__div__content'>
							<h2>{item.title}</h2>
							<p>{item.description}</p>
							<div className='flex justify-between items-center'>
								<div className='rounded__images'>
									<img src={User} alt='' />
									<img src={User} alt='' />
									<img src={User} alt='' />
									<img src={User} alt='' />
									<img src={User} alt='' />
									<p className='mx-6'>{item.content}</p>
								</div>
								<ArrowRightAltOutlinedIcon />
							</div>
						</div>
					</div>
				) : (
					<div
						className='featured__items__container__div grid lg:grid-cols-2 gap-10'
						key={index}
					>
						<div className='featured__items__container__div__content'>
							<h2>{item.title}</h2>
							<p>{item.description}</p>
							<div className='flex justify-between items-center'>
								<div className='rounded__images'>
									<img src={User} alt='' />
									<img src={User} alt='' />
									<img src={User} alt='' />
									<img src={User} alt='' />
									<img src={User} alt='' />
									<p className='mx-6'>{item.content}</p>
								</div>
								<ArrowRightAltOutlinedIcon />
							</div>
						</div>
						<img src={item.image} alt='' />
					</div>
				);
			})}
		</div>
	);
};
