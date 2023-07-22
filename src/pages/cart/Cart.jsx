import React,{useContext} from "react";
import "./Cart.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { CustomContext } from "../../contexts/CustomContext";

const Cart = () => {
  let CartData = JSON.parse(localStorage.getItem("CartData"));
  const {cartItems, setCartItems} = useContext(CustomContext);
  
  const handleRemove = (e) => {
    console.log(e.target.id);
    const itemID = e.target.id;
    const updatedCart = cartItems.filter((item) => item._id !== itemID);
    console.log(updatedCart, 'from updated cart');
    setCartItems(updatedCart)
    localStorage.setItem("CartData", JSON.stringify(cartItems));
  }

  return (
    <>
      <Header />
      <div className="cart-bg">
        {CartData.length <= 0 ? (
          <div className="cart-empty-div">
            <img
              src={process.env.PUBLIC_URL + "assets/images/empty-cart.png"}
              alt="cart-empty-img"
            />
            <h1>Your cart is empty</h1>
          </div>
        ) : (
          <div className="cart-bg-div">
            <div className="cart-items-div-bg">
              {CartData.map(({ image, name, price, quantity, _id }) => (
                <div className="cart-item-div" key={_id}>
                  <div className="cart-item-img-div">
                    <img src={image} alt={"product-img"} />
                  </div>
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">Name: {name}</h4>
                    <p className="cart-item-price">Price: ${price}</p>
                    <p className="cart-item-quantity">Quantity: {quantity}</p>
                    <button className="remove-btn" id ={_id} onClick={handleRemove}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <aside className="cart-summary-bg">
              <div className="cart-summary-div">
                <h3 className="cart-summary-title">Cart Summary</h3>
                <div className="cart-summary-details-div">
                  <div className="order-details">
                    No. of Items:<span>{CartData.length}</span>
                  </div>
                  <div className="order-details">
                    Subtotal:<span>$550</span>
                  </div>
                  <div className="order-details">
                    Delivery Charges:<span>$5</span>
                  </div>
                  <div className="order-details">
                    Total Price:<span>$550</span>
                  </div>
                </div>
                <button className="form-lg-btn">Pay Now</button>
              </div>
            </aside>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
