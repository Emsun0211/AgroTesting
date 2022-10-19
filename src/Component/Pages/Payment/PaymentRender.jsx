import React from "react";
import { Progress } from "../../Progress";
// import { Oderreview } from "./Oderreview";
// import { Payment } from "./Payment";
 import { Shipping } from "./Shipping";
import "./Shipping.css";
import "./Review.css";
import { Buyernav } from "../../Buyernav";
import "../../../style.css";
import Footer from "../../Footer";
import { PaymentProcess } from "./PaymentProcess";
import { OrderSuccessful } from "./OrderSuccessful";

export const PaymentRender = () => {
	return (
		<>
			<Buyernav />
			<div class='shipping-container'>
				{/* 
				
				<Payment />
				<Oderreview /> */}
				{/* <Progress />
				<PaymentProcess /> */}
				{/* <OrderSuccessful /> */}
				<Progress />
				<Shipping />
			</div>
			<Footer />
		</>
	);
};
