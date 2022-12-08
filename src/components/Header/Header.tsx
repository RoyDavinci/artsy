import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export const Header = () => {
	const links = ["Home", "Marketplace", "Auctions", "Drop"];
	const [indexValue, setIndexValue] = useState<number>(0);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);

	const handleIndex = (value: number) => {
		setIndexValue(value);
	};

	//choose the screen size
	const handleResize = () => {
		if (window.innerWidth < 860) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	// create an event listeners
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isMobile]);

	return (
		<header className='header__container lg:mx-32'>
			{!isMobile ? (
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
			) : (
				<>
					<div className='flex justify-between items-center mobile-nav'>
						<div onClick={() => setShow(!show)}>
							<MenuIcon />
						</div>
						<h1>ARTSY.</h1>
						<div>
							<ul className='flex'>
								<li>
									<SearchOutlinedIcon />
								</li>
								<li>
									<ShoppingCartOutlinedIcon />
								</li>
							</ul>
						</div>
					</div>
					<div
						className={
							!show
								? "sidebar__header__container p-6 absolute sidebar__header__container__close"
								: "sidebar__header__container p-6 absolute"
						}
					>
						<div className='flex justify-between items-center'>
							<h1>ARTSY</h1>
							<div
								className='close__header__icon'
								onClick={() => setShow(!show)}
							>
								<CloseIcon />
							</div>
						</div>
						<ul className=''>
							{links.map((item, index) => {
								return (
									<li key={index}>
										<Link
											to={
												item.toLowerCase() === "home"
													? "/"
													: `/${item.toLowerCase()}`
											}
											className='text-2xl'
											onClick={() => handleIndex(index)}
										>
											{item}
										</Link>
									</li>
								);
							})}
						</ul>
						<div className='header__chat__container'>
							<ChatBubbleIcon />
						</div>
					</div>
				</>
			)}
		</header>
	);
};
