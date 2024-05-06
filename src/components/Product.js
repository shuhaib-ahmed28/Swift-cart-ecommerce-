import React from "react";
import Productlist from "./Productlist";

const Product = (props) => {
  return (
    <div className="cardWrapper">
      <div className="card">
        <div className="cardimg">
          <img
            src={props.val.img}
            alt=""
            style={{ width: "200px", padding: "5px", maxHeight: "150px" }}
          />
        </div>
        <p className="cardname">{props.val.name}</p>
        <div>
          <div style={{ padding: "5px" }}>Rs.{props.val.price}/-</div>
          <div className="quanWrap">
            <div style={{ padding: "5px" }}>Quantity: {props.val.quantity}</div>
            <div style={{display:"flex", alignItems:'center', paddingLeft:'30px', gap:'8px'}}>
            <button
              className="decbtn"
              onClick={() => {
                props.handleDecrement(props.val.name);
              }}
            >
              -
            </button>
            <span> {props.val.quantity * props.val.orderedQ} </span>
            <button 
              className="incbtn"
              onClick={() => {
                props.handleIncrement(props.val.name);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div style={{display:'flex'}}>
         <div style={{padding:'5px'}}> Rs.{props.val.price * props.val.orderedQ}</div>
          <div style={{ paddingLeft: "85px" }}>
            <button
              className="cardbtn"
              onClick={() => {
                props.addToCart(props.val.name);
              }}
            >
              add
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
