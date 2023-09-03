import React, { useContext }  from "react"
import { CartContext } from "./pages/CartContext";


const Mobile = ({ mobile }) => {
    const { addToCart } = useContext(CartContext);
  
    const handleAddToCart = () => {
      addToCart(mobile);
    };
  
    return (
      <div className="Mobile">
        <div className="MobileImage">
          <img src={mobile.image} alt={mobile.title} />
          
        </div>
        <h3 className="MobileTitle">{mobile.title}</h3>
        <div className="MobilePrice">{mobile.price} e</div>
        <div className="MobileButton">
          <button className="AddToCart" onClick = { handleAddToCart }>
            Add to cart
          </button>
        </div>
      </div>
    );
  };
  
  export default Mobile;