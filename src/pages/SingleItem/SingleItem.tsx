import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./singleItem.css";
import { marketPlaceImage } from "../../assets/index";
import DiamondIcon from "@mui/icons-material/Diamond";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import StartIcon from "@mui/icons-material/Start";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const SingleItem = () => {
	const { name } = useParams();
	const [items, setItems] = useState<
		{ name: string; image: string; price: number }[]
	>([]);
	const [data, setData] = useState<string>();
	const [quantity, setQuantity] = useState<number>(1);
	console.log(items);

	const checkData = () => {
		if (name) {
			const filterItem = marketPlaceImage.filter((item) =>
				item.name.includes(name)
			);
			setItems(filterItem);
		}
		return;
	};

	useEffect(() => {
		setData(name);
		checkData();
		return () => {
			console.log("cleared");
		};
	}, [name]);
	return (
		<div className='singleITem__container text-2xl'>
			<h2 className='my-16 flex'>
				{" "}
				<p className='text-[#BCB7B7] flex'>Home/MarketPlace/Editorials/</p>{" "}
				<strong>{data}</strong>
			</h2>
			<main>
				<section className='grid lg:grid-cols-2 single__market__placeContainer'>
					<article className='p-4'>
						<img src={items[0]?.image} alt='' />
					</article>
					<article>
						<div className='first__div__singleItemContainer div-borders flex justify-between items-center'>
							<h1>{items[0]?.name}</h1>
							<div className='flex justify-between items-center'>
								<DiamondIcon />
								<p>{items[0]?.price}</p>
							</div>
						</div>
						<div className='creator__divContainer__singleItem div-borders'>
							<h2 className='my-6'>
								Creator: <Link to='/'>Ambrose Ali</Link>
							</h2>
							<p className='my-6'>Made In Italy</p>
							<h2 className='my-6'>Total Views: 1.7k</h2>
							<div>
								<div className='flex items-center my-3'>
									<button>
										<AddOutlinedIcon
											onClick={() => {
												setQuantity((quantity) => (quantity += 1));
											}}
										/>
									</button>
									<p className='mx-4'>{quantity}</p>
									<button>
										<RemoveOutlinedIcon
											onClick={() => {
												if (quantity <= 1) {
													return;
												} else {
													setQuantity((quantity) => (quantity -= 1));
												}
												console.log("clicked");
											}}
										/>
									</button>
								</div>
								<button className='bg-[#3341C1] px-14 py-6 text-white my-6'>
									Add To Cart <StartIcon />
								</button>
							</div>
						</div>
						<div className='singleItemDetails__container div-borders'>
							<div>
								<h2>Description</h2>
								<KeyboardArrowDownIcon />
							</div>
							<div>
								<h2>Listings</h2>
								<KeyboardArrowDownIcon />
							</div>
							<div>
								<h2>Status</h2>
								<KeyboardArrowDownIcon />
							</div>
						</div>
					</article>
				</section>
			</main>
		</div>
	);
};
