// import './App.css';
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
}

export default App;
