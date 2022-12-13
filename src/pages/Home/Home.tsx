import React from "react";
import "./home.css";
import { Featured, Footer, Hero, Newsletter, Slider } from "../../components";
import { Link } from "react-router-dom";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

export const Home = () => {
	return (
		<div>
			<Hero />
			<Slider />
			<Featured />
			{/* <section className='section__home__container '>
				<h1 className='upcoming'>See Upcoming Auctions and Exhibitions</h1>
				<article>
					<div>
						<div
							className='round'
							style={{
								width: "15.67px",
								height: "15.67px",
								borderRadius: "50%",
								backgroundColor: "#fff",
							}}
						></div>
						<h2 style={{ fontFamily: `Bellefair, sans-serif` }}>01</h2>
					</div>
					<div>
						<h1 style={{ fontFamily: `Bellefair, sans-serif` }}>
							MONALISA REDEFINED IN STYLE.
						</h1>
						<p>Start on : 08:00 GTS . Monday </p>
						<div className='div__flex__container__home'>
							<span>
								GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
								INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
								HIGHEST AND LOWEST BIDS.
							</span>
							<div>
								<Link
									to='/'
									style={{ color: "#fff", textDecoration: "underline" }}
								>
									See more
								</Link>
								<button>Set A Reminder</button>
							</div>
						</div>
					</div>
				</article>
			</section> */}
			<main className='home__main__container'>
				<div>
					<h1>Explore Marketplace</h1>
					<ArrowRightAltOutlinedIcon />
				</div>
				<div>
					<h1>See auctions</h1>
					<ArrowRightAltOutlinedIcon />
				</div>
			</main>
			<main className='top__Creatoes__home__container relative my-20 bg-[#E2E2E2]'>
				<section>
					<article className='creators__article__container'>
						<h1>
							TOP CREATORS OF <br /> THE WEEK
						</h1>
						<div className='flex '>
							<div></div>
							<ul>
								<li>Editorials</li>
								<li>Lifestyle</li>
								<li>Fashion</li>
								<li>Blueprint</li>
							</ul>
						</div>
					</article>
					<article>
						<p>
							“Everything always looked better in black and white. Everything
							always as if it were the first time; there's always more people in
							a black and white photograph. It just makes it seem that there
							were more people at a gig, more people at a football match, than
							with colour photography. Everything looks more exciting.”– Jack
							Lowden
						</p>
					</article>
					<div className='top__Creators__imgContainer '>
						{/* <img src={Image} alt='' className='' /> */}
					</div>
				</section>
			</main>
			<Newsletter />
			<Footer />
		</div>
	);
};
