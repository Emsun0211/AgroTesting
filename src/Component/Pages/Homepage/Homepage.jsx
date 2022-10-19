import React from "react";
import Navbar from "../../Navbar";
import { Header } from "./HomepageHeader";
// import { OurMarket } from "./OurMarket";
import { OurMarketing } from "./HomePageMarket";
// import { OurMarketMain } from "./OurMarketSection";

import { BrokerMan } from "./BrokerMan";
import { TopPicks} from "./TopPicks";
import { Seller } from "./BabaSeller";
import { Payment } from "./Payment";
import Footer from "../../Footer";



export const Homepage = () => {
	return(
	<div>
		 <Navbar />
      <Header />
			<OurMarketing />
			<BrokerMan />
			<TopPicks />
			<Seller />
			<Payment />
			<Footer />
  
	</div>
	)
};
