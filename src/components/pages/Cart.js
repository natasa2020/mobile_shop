import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, decreaseQuantity ,removeFromCart ,calculateTotalPrice, increaseQuantity } = useContext(CartContext);


  const handleDecreaseQuantity = (mobileId) => {
    decreaseQuantity(mobileId);
  };

  const handleRemoveItem = (mobileId) => {
    removeFromCart(mobileId);
  };

  const handleIncreaseItem = (mobileId) => {
    increaseQuantity(mobileId);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          <ul className="cartUl">
            {cartItems.map((item) => (
              <li className="cartLi" key={item.id}>
                <div className="cartImageContainer">
                  <img src={item.image} alt={item.title} className="cartImg" />
                </div>
                <div>
                  <p>{item.title}</p>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => handleDecreaseQuantity(item.id)} className="cartBtn">
                    -
                  </button>
                  <button onClick={() => handleIncreaseItem(item.id)} className="cartBtn">
                    +
                  </button>
                  <button onClick={() => handleRemoveItem(item.id)} className="cartBtn">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total Price: {totalPrice} e</p> 
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;