import React from "react";
import "./Cart.css";
import { useCart } from "react-use-cart";
import { AiOutlineDelete, AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import CartLogo from "../../Assets/logo.png";

const Cart = () => {
  const { items, removeItem, updateItemQuantity, cartTotal } = useCart();
  const freeDelivery = 3000;

  // const description = (num, str) => {
  //   if (str.length > num) {
  //     return str.slice(0, num);
  //   } else {
  //     return str;
  //   }
  // };

  return (
    <div className="cart-component">
      <div className="cart-products">
        <h2 className="cart-title">Cart</h2>
        {!items.length ? (
          <div className="empty">
            <img src={CartLogo} alt="" />
            <p>Your cart is empty!</p>
            <p>Browse our category and start shopping</p>
            <Link to="/shop-products" className="empty-btn">
              Start Shopping
            </Link>
          </div>
        ) : (
          items.map((item, i) => (
            <div className="cart-product" key={i}>
              <div className="cart-values">
                <img src={item.image.url} alt="product" />
                <p style={{fontWeight: "700", textTransform: "capitalize"}}>{item.title}</p>
              </div>
              <div className="cart-buttons">
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2rem",
                  }}
                  className="delete-btn"
                  onClick={() => removeItem(item._id)}
                >
                  <AiOutlineDelete /> Remove
                </p>
                <div className="updateButtons">
                  <AiOutlineMinus
                    className="cart-add-btns"
                    onClick={() =>
                      updateItemQuantity(item._id, item.quantity - 1)
                    }
                  />
                  <p>{item.quantity}</p>
                  <IoMdAdd
                    className="cart-add-btns"
                    onClick={() =>
                      updateItemQuantity(item._id, item.quantity + 1)
                    }
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-checkout">
        <h2>Cart Summary</h2>
        <div className="totals">
          <p>Sub Total</p>
          <p>Kshs. {cartTotal}</p>
        </div>
        {cartTotal >= freeDelivery ? (
          <p>You are eligiable for free delivery!</p>
        ) : (
          <p>Missing Kshs. {freeDelivery - cartTotal} to reach free delivery!</p>
        )}
        <button className="checkout">Check out (Kshs. {cartTotal})</button>
      </div>
    </div>
  );
};

export default Cart;
