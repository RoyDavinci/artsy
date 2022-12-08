import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const Header = () => {
	const links = ["Home", "Marketplace", "Auctions", "Drop"];
	const [indexValue, setIndexValue] = useState<number>(0);

	const handleIndex = (value: number) => {
		setIndexValue(value);
	};

	return (
		<header className='header__container lg:mx-32'>
			<nav className='flex justify-between items-center'>
				<h1>ARTSY</h1>
				<ul className='flex'>
					{links.map((item, index) => {
						return (
							<li key={index}>
								<Link
									to={
										item.toLowerCase() === "home"
											? "/"
											: `/${item.toLowerCase()}`
									}
									className={`${indexValue === index ? "padding" : ""}`}
									onClick={() => handleIndex(index)}
								>
									{item}
								</Link>
							</li>
						);
					})}
				</ul>
				<ul className='flex'>
					<li>
						<SearchOutlinedIcon />
					</li>
					<li>
						<ShoppingCartOutlinedIcon />
					</li>
					<li>
						<NotificationsOutlinedIcon />
					</li>
				</ul>
			</nav>
		</header>
	);
};
