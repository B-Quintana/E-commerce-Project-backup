import React from "react";
import { Switch, Route } from "react-router-dom";
//include images into your bundle
import "./app.css";
//import { Cart } from "../Products/Cart";
import { addCart } from "../Products/addCart";
import { Default } from "../Others/Default";
import Login from "../Account/Login";
import { Details } from "../Products/Details";
import { Navbar } from "../../component/Navbar";
import Checkout from "../Checkout/Checkout";
import { ProductList } from "../Products/ProductList";
import { Modal } from "../../component/Modal";

//create your first component
export function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={ProductList} />
				<Route path="/details" component={Details} />
				<Route path="/cart" component={addCart} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/login" component={Login} />
				<Route component={Default} />
			</Switch>
			<Modal />
		</React.Fragment>
	);
}
