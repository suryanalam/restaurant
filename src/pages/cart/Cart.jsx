import React,{useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { CustomContext } from "../../contexts/CustomContext";
import { toast } from "react-toastify";

const Cart = () => {

  const navigate = useNavigate();
  const [finalPrice, setFinalPrice] = useState(0);
  const {cartItems, setCartItems} = useContext(CustomContext);
  const cartData = JSON.parse(localStorage.getItem('cartData'));
  console.log(cartData, 'cartData in cart')

  const handleRemove = (e) => {
      console.log(e.target.id,'id of item to be removed')
      const removeId = e.target.id;
      let updatedCart = cartItems.filter((item)=>{
        if(item._id !== removeId){
          return item;
        }
        return null;
      })
      console.log(updatedCart,'updatedCart after removing item')
      setCartItems(updatedCart);
      localStorage.setItem('cartData',JSON.stringify(updatedCart));
      toast.success('Item removed from cart');
  }

  const handleIncrement = (e) => {
    console.log(e.target.id,'id of item to be incremented')
    const incrementId = e.target.id;
    let updatedCart = cartItems.map((item)=>{
      if(item._id === incrementId){
        item.quantity = item.quantity + 1;
        return item;
      }
      return item;
    })
    console.log(updatedCart,'updatedCart after incrementing item')
    setCartItems(updatedCart);
    localStorage.setItem('cartData',JSON.stringify(updatedCart));
  }


  const handleDecrement = (e) => {
    console.log(e.target.id,'id of item to be decremented')
    const decrementId = e.target.id;
    let updatedCart = cartItems.map((item)=>{
      if(item._id === decrementId){
        if(item.quantity > 1){
          item.quantity = item.quantity - 1;
          return item;
        }
      }
      return item;
    })
    console.log(updatedCart,'updatedCart after decrementing item')
    setCartItems(updatedCart);
    localStorage.setItem('cartData',JSON.stringify(updatedCart));
  }



  const calcTotalPrice = async () => {
    let prices = await cartData.map((currentProduct) => {
      const { price, quantity } = currentProduct;
      return quantity*price;
    })

    const totalPrice = prices.reduce((sum, price) => sum + price, 0);
    console.log(totalPrice,'finalPrice')
    setFinalPrice(totalPrice)
  }
  
  
  const handlePay = () => {
    localStorage.removeItem('cartData');
    toast.success('Payment done successfully');
    navigate('/menu')
  }

  useEffect(()=>{
    if(cartData){
      calcTotalPrice();
    }
  })

  return (
    <>
      <Header />
      <div className="cart-bg">
        <button className="logout-btn" onClick={()=>navigate('/menu')}>Go to Menu</button>
        { !cartData?.length > 0 ? (
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
              {cartData.map(({ _id, imageUrl, name, price, quantity}) => (
                <div className="cart-item-div" key={_id}>
                  <div className="cart-item-img-div">
                    <img src={imageUrl} alt={"product-img"} />
                  </div>
                  <div className="cart-item-details-div">
                    <h4 className="cart-item-name">Name: {name}</h4>
                    <p className="cart-item-price">Price: ${price}</p>
                    <div className="cart-item-quantity-div">Quantity: 
                    <button onClick={handleDecrement} id={_id}>-</button>
                    <span> {quantity} </span>
                    <button onClick={handleIncrement} id={_id}>+</button>
                    </div>
                    <button className="remove-btn" onClick={handleRemove} id={_id}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <aside className="cart-summary-bg">
              <div className="cart-summary-div">
                <h3 className="cart-summary-title">Cart Summary</h3>
                <div className="cart-summary-details-div">
                  <div className="order-details">
                    No. of Items:<span>{cartData.length}</span>
                  </div>
                  <div className="order-details">
                    Total Price:<span>${finalPrice}</span>
                  </div>
                </div>
                <button className="remove-btn" onClick={handlePay}>Pay Now</button>
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
