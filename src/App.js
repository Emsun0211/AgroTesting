// import './App.css';
// import CreateAccount from './Component/Pages/Createaccount/CreateAccount';
// import FAQ from './Component/Pages/FAQ/FAQ';
import { Routes, Route } from "react-router-dom";
import { Homepage } from './Component/Pages/Homepage/Homepage';
// import { Payment } from './Component/Pages/Homepage/Payment';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="About" element={<About />} /> */}
        {/* <Route path="about" element={<FAQ /> } />
        <Route path="about" element={<CreateAccount />} />
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
