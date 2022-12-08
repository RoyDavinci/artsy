import "./App.css";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { Auction, Drop, Home, MarketPlace } from "./pages";

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/auctions' element={<Auction />}></Route>
				<Route path='/marketplace' element={<MarketPlace />}></Route>
				<Route path='/drop' element={<Drop />}></Route>
			</Routes>
		</div>
	);
}

export default App;
