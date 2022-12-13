import React, { useEffect, useState } from "react";
import "./hero.css";

export const Hero = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	//choose the screen size
	const handleResize = () => {
		if (window.innerWidth < 860) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	// create an event listener
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			console.log("cleared on unmount");
		};
	}, [isMobile, window.innerWidth]);
	console.log(isMobile);
	return (
		<section className='hero__container__items flex flex-col justify-center items-center text-center lg:my-10'>
			<h1 className={isMobile ? "mobileScreenHeader" : "largeScreenHeader"}>
				Photography is poetry & beautiful untold stories
			</h1>
			<p
				className={isMobile ? "mobileScreenParagraph" : "largeScreenParagraph"}
			>
				Flip through more than 10,000 vintage shots, old photograghs, historic{" "}
				{isMobile ? "" : <br />}
				images and captures seamlessly in one place. Register to get top access.
			</p>
		</section>
	);
};
