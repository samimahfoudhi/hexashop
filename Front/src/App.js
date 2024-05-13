import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import About from "./Components/About";
import Oneproduct from "./Components/Oneproduct";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/productDetails" element={<Oneproduct />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/myCard" element={<Cart />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
