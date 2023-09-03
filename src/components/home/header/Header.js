import React, { useState, useEffect, useContext  } from "react";
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import { Link } from "react-router-dom";
import { CartContext } from "../../pages/CartContext";

const Header = () => {
    const [sidebar, setSidebar] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const { cart } = useContext(CartContext);

    window.addEventListener("scroll", function () {
       const header = document.querySelector(".header")
       header.classList.toggle("active", window.screenY > 200)
    })

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      const itemsInCart = () => {
        let total = 0;
        for (let item of cart.values()) {
          total += item.quantity;
        }
        return total;
      };

    return (
       <header className="header">
        <div className="container flex">
            <div className="logo">
               <p>MobileShop</p>
            </div>
            <div className="nav">
          {isMobile && (
            <button
              className="navbar-items-icon" onClick={() => setSidebar(!sidebar)}
            >
              {sidebar ? <CloseIcon /> : <MenuIcon />}
            </button>
          )}
          <ul className={sidebar ? "nav-links-sidebar" : "nav-links"}
            onClick={() => setSidebar(false)}> 
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/mobiles">Mobiles</a>
                    </li>
                    <li>
                        <a href="/news">News</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/about">About us</a>
                    </li>
                    <li className="icon"></li>
                    <li className="buttonCart"> 
                        <Link to="/cart">Cart({itemsInCart()})</Link>
                    </li>
                </ul>
            </div>
        </div>
       </header>
    )
}
export default Header