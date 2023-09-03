import React from "react";
import Header from "./components/home/header/Header"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import MobileList from "./components/pages/MobilePage";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/home/Footer";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import NewsPage from "./components/pages/News";
import Cart from "./components/pages/Cart";
import { CartProvider } from "./components/pages/CartContext";


export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

render() { 
  return (
      <>
        <Router>
        <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mobiles" element={<MobileList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </CartProvider>  
        <Footer />
      </Router>  
      </>
    ) 
  }
}