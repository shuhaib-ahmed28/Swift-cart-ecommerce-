import React, { useState } from "react";
import Category from "./Category";
import Product from "./Product";
import { clothingitems } from "../data/data";
import Popup from "./Popup";

const Productlist = (props) => {
  const [productData, setproductData] = useState(clothingitems);
  const [cartItems,setCartItems]=useState([]);

  function handleIncrement(pname) {
    let productdatac = productData.map((val) => {
      if (val.name === pname) {
        return { ...val, orderedQ: val.orderedQ + 1 };
      } else {
        return val;
      }
    });
    setproductData(productdatac);
  }
  
  function handleDecrement(pname) {
    let productdatac = productData.map((val) => {
      if (val.name === pname && val.orderedQ > 0) {
        return { ...val, orderedQ: val.orderedQ - 1 };
      } else {
        return val;
      }
    });
    setproductData(productdatac);
  }
  
  function addToCart(name) {
    let productdatac = productData.map((val) => {
      if (val.name == name && val.orderedQ >0 ) {
        return { ...val, addedtocart: 1 };
      }  else {
         return val
      }
    });
    setproductData(productdatac);

    let count = 0;
    productdatac.forEach((val) => {
      if (val.addedtocart == 1) {
        count = count + 1;
      }else {
        return null
      }
    });
    props.productAddedcount(count);
  }
  
  // function handleDelete(id) {
  //   const updatedProductData = productData.filter((item) => item.id !== id);
  //   setproductData(updatedProductData);
  // }

  return (
    <div>
      <div className="hero">
        <img src="babycare.png" alt="" />
        <img src="herophar.png" alt="" />
        <img src="Pet-Care.png" alt="" />
      </div>
      <div>
        <Category />
      </div>
      <div className="productlisthead" style={{ paddingLeft: "140px" }}>
        <h2>SHOP YOUR DAILY ESSENTIALS</h2>
      </div>
      <div className="containerwrapper">
        <div className="parentcard">
          {productData.map((val) => (
            <Product
              val={val}
              handleIncrement={(pname) => {
                handleIncrement(pname);
              }}
              handleDecrement={(pname) => {
                handleDecrement(pname);
              }}
              addToCart={(pname) => {
                addToCart(pname);
              }}
            />
          ))}
        </div>
      </div>
      <div>
        <Popup
          productlist={productData}
          popup1={props.popup1}
          popupClose={(s) => {
            props.popupClose(s);
          }}
          handleIncrement={(pname) => {
            handleIncrement(pname);
          }}
          handleDecrement={(pname) => {
            handleDecrement(pname);
          }}
        
        />
      </div>
    </div>
  );
};

export default Productlist;
