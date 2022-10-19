// import './App.css';
// import CreateAccount from './Component/Pages/Createaccount/CreateAccount';
import FAQ from "./Component/Pages/FAQ/FAQ";
import CreateAccount from "./Component/Pages/Createaccount/CreateAccount";
import { Contact } from "./Component/Pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Component/Pages/Homepage/Homepage";
import { Login } from "./Component/Pages/Login/Login";
import { AgroEducation } from "./Component/Pages/AgroEducation/AgroEducation";
import { About } from "./Component/Pages/About/About";

// import { Payment } from './Component/Pages/Homepage/Payment';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='Contact' element={<Contact />} />
				<Route path='Createaccount' element={<CreateAccount />} />
				<Route path='FAQ' element={<FAQ />} />
				<Route path='Login' element={<Login />} />
				<Route path='AgroEducation' element={<AgroEducation />} />
        <Route path='About' element={<About />} />

				{/* 
        <Route path="about" element={<Payment />} /> */}
				{/* <Route path="about" element={< />} />  */}
			</Routes>
		</>
	);
}

{
	/* <PaymentRender />; */
}
// <div className="App">
//   <Navbar />

//   <Footer />

/* <CreateAccount/> */

// </div>

export default App;
