// import './App.css';
<<<<<<< HEAD
import CreateAccount from './Component/Pages/Createaccount/CreateAccount';
import FAQ from './Component/Pages/FAQ/FAQ';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Hom />} />
        <Route path="about" element={<About />} />
        <Route path="about" element={<FAQ /> } />
        <Route path="about" element={<CreateAccount />} />
        {/* <Route path="about" element={<Pay />} /> */}
      </Routes>
    </>
  );
=======
// import CreateAccount from './Component/Pages/Createaccount/CreateAccount';

import { Homepage } from "./Component/Pages/Homepage/Homepage";
// import { PaymentRender } from "./Component/Pages/Payment/PaymentRender";

// import './Component/Footer'
// import './style.css'

// import { Contact } from './Component/Pages/Contact/Contact'

// import Footer from './Component/Footer'
// import Navbar from './Component/Navbar'

function App() {
  // return <Contact />
  return <Homepage />;
>>>>>>> 1f8788857211d72f81028a3ee777f3c78bfc8003
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
