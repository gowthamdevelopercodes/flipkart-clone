import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import { removeCart } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const [active, setActive] = useState(1);
  const cartItems = useSelector((state) => state.cartData.cart);
  const user = useSelector((state) => state.userData.user);
  console.log(cartItems);
  // console.log(user);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <div className="Cart">
      <div className="Cart-tabs">
        <p
          className={`flipkart ${active === 0 ? "active" : ""}`}
          onClick={() => setActive(0)}
        >
          Flipkart
        </p>
        <p
          className={`grocery ${active === 1 ? "active" : ""}`}
          onClick={() => setActive(1)}
        >
          Grocery
        </p>
      </div>
      {user ? (
        <div className="Cart-items">
          <div className="Cart-container">
            {cartItems.map((cart, index) => {
              return (
                <div key={index} className="cart-item">
                  <div className="cart-item--left">
                    <img src={cart?.url} alt="" />
                  </div>
                  <div className="cart-item--right">
                    <h3>{cart.Product}</h3>
                    <p>
                      {cart.Display}, {cart.Descripition}
                    </p>
                    <p>{cart.Sellingprice} </p>
                    <button
                      className="Cart-item-button"
                      onClick={() => removeFromCart(cart.id)}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="Cart-items">
          <div className="CartitemsNull">
            <img
              src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
              alt=""
              className="CartitemsNull-img"
            />
            <div className="CartitemsNull-title">Missing Cart items</div>
            <p className="CartitemsNull-des">
              Login to see the items you added previously
            </p>
            <button className="CartitemsNull-btn">Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
