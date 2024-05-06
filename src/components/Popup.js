import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { HiOutlineEmojiSad } from "react-icons/hi";



const Popup = (props) => {
  const [cartArray,setCartarray]=useState();
  
  if (props.popup1) {
    return (
      <div>
        <div className="popupbackground">
          <div className="popup-sec">
            <button
              onClick={() => {
                props.popupClose(0);
              }}
            >
              X
            </button>
            <div className="carttable"  >
              <table>
                <thead>
                  <tr>
                    <th>ITEMS</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>SUBTOTAL</th>
                    <th>REMOVE</th>
                  </tr>
                </thead>
              
                {props.productlist.some((val) => val.addedtocart > 0) ? (
                  props.productlist.map((val) => {
                    if (val.addedtocart > 0) {
                      return (
                        
                          <tbody key={val.id} >
                            <tr>
                              <td>
                                <img
                                  src={val.img}
                                  alt=""
                                  className="cartpicture"
                                />
                              </td>
                              <td>Rs.{val.price}</td>
                              <td>
                                <div className="incndec">
                                  <button className="decbtn" onClick={() => {props.handleDecrement(val.name)}}>
                                    -
                                  </button>
                                  <span> {val.quantity * val.orderedQ} </span>
                                  <button className="incbtn" onClick={() => {props.handleIncrement(val.name)}}>
                                    +
                                  </button>
                                </div>
                              </td>
                              <td>Rs.{val.price * val.orderedQ}</td>
                              <td>
                                <MdDelete  />
                              </td>
                            </tr>
                          </tbody>
                      
                      );
                    }
                  })
                ) : (
                
                    <tbody>
                      <tr>
                        <td colSpan="5" className="empty-cart-text">
                          <img src="empty-cart.png" alt="" />
                          <p>Ooopss! <HiOutlineEmojiSad /> Your cart is empty click
                          on continue shopping</p>
                        </td>
                      </tr>
                    </tbody>
                  
                )}
              </table>
              <div className="totalbox">
                
              </div>
            </div>
            <div className="contWrap">
              <button
                className="contbtn"
                onClick={() => {
                  props.popupClose(0);
                }}
              >
                Continue Shopping
              </button>
              <button className="clearcartbtn">Clear Cart</button>
            </div>

            <h1>Popup</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Popup;
