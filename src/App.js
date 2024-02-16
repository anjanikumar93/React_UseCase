import "./App.css";
import Logo from "./components/Logo";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
