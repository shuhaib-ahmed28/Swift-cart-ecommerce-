import React, { useState } from "react";
import { categories } from "../data/data";

const Category = () => {
  const [category, setcategory] = useState(categories);
  return (
    <div>
      <div className="categoryhead">
        <h1>Categories</h1>
      </div>
      <div className="wrapper">
      {category.map((val) => {
        return (
            
                  <div className="box" >
              <div className="imgbox" >
                <img
                  src={val.img}
                  alt=""
                  style={{ width: "180px", height: "210px" }}
                />
              </div>
            </div>
            
          
          
        );
      })}
      </div>
    
    </div>
  );
};
  
export default Category;
