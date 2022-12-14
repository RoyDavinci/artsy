import React, { createContext, useContext, useEffect, useState } from "react";

export type cartContext = {
	state?: cartDetails[];
	setState: (data: cartDetails[]) => void;
	increaseQuantity: (id: number) => void;
	decreaseQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
	addItemToCart: (object: cartDetails) => void;
	emptyCart: () => void;
	quantity: number;
	sum: number;
};

export type cartDetails = {
	price: number;
	name: string;
	quantity: number;
	id: number;
};

const Context = createContext<cartContext | undefined>(undefined);

export type Provider = {
	children?: React.ReactNode;
};

const CartProvider: React.FC<Provider> = ({ children }) => {
	const [state, setState] = useState<cartDetails[]>([
		{ id: 0, name: "", quantity: 0, price: 0 },
	]);
	const [sum, setSum] = useState<number>(0);
	const [quantity, setQuantity] = useState<number>(0);

	const addItemToCart = (object: cartDetails) => {
		setState([...state, object]);
	};

	const removeFromCart = (id: number) => {
		const filterItem = state.filter((item) => item.id !== id);
		setState(filterItem);
	};

	const increaseQuantity = (id: number) => {
		const filterItem = state.filter((item) => item.id !== id);
		filterItem && filterItem[0].quantity++;
	};

	const decreaseQuantity = (id: number) => {
		const filterItem = state.filter((item) => item.id !== id);
		if (filterItem[0].quantity === 1) return;
		filterItem && filterItem[0].quantity--;
	};

	const emptyCart = () => {
		setState([]);
	};
	const calculateTotal = () => {
		let sum = 0;
		state.forEach((item) => {
			sum += Number(item.price) * item.quantity;
		});
		setSum(sum);
	};
	const calculateQuantity = () => {
		let sum = 0;
		state.forEach((item) => {
			sum += item.quantity;
		});
		setQuantity(sum);
	};

	useEffect(() => {
		calculateTotal();
		calculateQuantity();
		return () => {
			console.log("cleared");
		};
	}, [calculateQuantity, calculateTotal]);

	return (
		<Context.Provider
			value={{
				state,
				setState,
				increaseQuantity,
				decreaseQuantity,
				emptyCart,
				addItemToCart,
				removeFromCart,
				quantity,
				sum,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(Context);
};

export { Context, CartProvider };
