import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./market.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { marketPlaceImage } from "../../assets/index";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Footer, Newsletter } from "../../components";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

export const MarketPlace = () => {
	const [checkBoxShow, setCheckBoxShow] = useState<boolean>(false);
	const [showPrice, setShowPrice] = useState<boolean>(false);
	const [showArtist, setShowArtist] = useState<boolean>(false);

	const data = useGlobalContext();

	return (
		<main className='marketPlaceContainer'>
			<section className='my-10 hidden__itemContainer'>
				<form action='' className='form__market__container text-[16px]'>
					<div className='bg-[#F4F2F2] px-1 py-2 flex'>
						<SearchOutlinedIcon />
						<input
							type='search'
							placeholder='Search'
							className='bg-[#F4F2F2]'
						/>
					</div>
					<div className='results__marketplace__container flex justify-between w-full items-center '>
						<p>See 1-6 of 15 Results</p>
						<div className='flex'>
							<p>Sort By</p>
							<KeyboardArrowDownOutlinedIcon />
						</div>
					</div>
				</form>
			</section>
			<section className='grid section__market__center_container my-24'>
				<article className='section__article__market__container'>
					<h1 className=''>
						<FilterListIcon /> Filter
					</h1>
					<div className='form__category__contaioner'>
						<div className='flex items-center justify-between'>
							<p className='para__category'>By Category</p>
							{!checkBoxShow ? (
								<KeyboardArrowUpIcon
									onClick={() => setCheckBoxShow(!checkBoxShow)}
								/>
							) : (
								<KeyboardArrowDownIcon
									onClick={() => setCheckBoxShow(!checkBoxShow)}
								/>
							)}
						</div>

						<div className={checkBoxShow ? "hidden" : ""}>
							<div className='input__checkbox__container'>
								<input type='checkbox' name='' id='' />
								<label htmlFor=''>Editorials</label>
							</div>
							<div className='input__checkbox__container'>
								<input type='checkbox' name='' id='' />
								<label htmlFor=''>Fashion</label>
							</div>
							<div className='input__checkbox__container'>
								<input type='checkbox' name='' id='' />
								<label htmlFor=''>Optics</label>
							</div>
							<div className='input__checkbox__container'>
								<input type='checkbox' name='' id='' />
								<label htmlFor=''>Art and Museum</label>
							</div>
							<div className='input__checkbox__container'>
								<input type='checkbox' name='' id='' />
								<label htmlFor=''>Nature</label>
							</div>
						</div>
					</div>
					<div className='form__category__contaioner price__form__container'>
						<div className='flex items-center justify-between'>
							<p className='para__category'>By Price</p>
							{!showPrice ? (
								<KeyboardArrowUpIcon onClick={() => setShowPrice(!showPrice)} />
							) : (
								<KeyboardArrowDownIcon
									onClick={() => setShowPrice(!showPrice)}
								/>
							)}
						</div>
						{!showPrice && (
							<form action=''>
								<p>$100.00 - $150.00</p>
								<input type='range' name='' id='' min={100} max={1500} />
							</form>
						)}
					</div>
					<div className='form__category__contaioner artist__form__container'>
						<div className='flex items-center justify-between'>
							<p className='para__category'>By Artist</p>
							{!showArtist ? (
								<KeyboardArrowUpIcon
									onClick={() => setShowArtist(!showArtist)}
								/>
							) : (
								<KeyboardArrowDownIcon
									onClick={() => setShowArtist(!showArtist)}
								/>
							)}
						</div>
						{!showArtist && (
							<form action=''>
								<p>All</p>
								<p>$100.00 - $150.00</p>
								<p>$150.00 - $200.00</p>
								<p>Above $200.00</p>
							</form>
						)}
					</div>
				</article>
				<article className='items__article__marketplace__container'>
					{marketPlaceImage.map((item, index) => {
						return (
							<Link to={`/marketplace/${item.name}`} key={index}>
								<div>
									<img src={item.image} alt='' />
									<div className='mx-3'>
										<p className='my-4 text-[16px]'>{item.name}</p>
										<strong>
											<p className='font-bold	text-[20px] my-3'>${item.price}</p>
										</strong>
									</div>
								</div>
							</Link>
						);
					})}
				</article>
			</section>
			<div className='mobile__footer__container__items'>
				<Newsletter />
				<Footer />
			</div>
		</main>
	);
};
