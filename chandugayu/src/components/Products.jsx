import React from "react";
import "./prod.css";
import x from "./xx";
import { FaShoppingCart } from "react-icons/fa";
import {RiArrowDownSLine} from "react-icons/ri";
import { useState } from "react";

const Products = ({props}) => {
  const [prod, setProd] = useState(x);

  function aec() {
    setProd([...prod].sort((a, b) => Number(a.Price) - Number(b.Price)));
  }
  function pop() {
    setProd([...prod].sort((a, b) => Number(a.rating) - Number(b.rating)));
  }
  function dec() {
    setProd([...prod].sort((b, a) => Number(a.Price) - Number(b.Price)));
  }
  return (
    <div className="allproduct">
      <div className="allprod_nav">
        <p> category kids</p>
      
        <div className="allprod_dropdown">
          <p className="allprod_sort">Sort By: <RiArrowDownSLine/></p>
          <div className="allprod_dropdown-content">
            <p onClick={aec}>Price: Low To High</p>
            <p onClick={dec}>Price: High To Low</p>
            <p onClick={pop}>Popularity</p>
          </div>
        </div>
      </div>

      <div className="container1">
        {prod.map((el, index) => {
          return (
            <div key={index} className="card1">
              <div className="imgbx">
                <img src={el.image.mainImage} alt="" />
                <button className="allprd_btn">View Details</button>
              </div>
              <div className="content">
                <p className="allprd_ttl"> {el.title}</p>
                <p className="allprd_sttl">{el.subtitle}</p>
                <div className="allprd_sb">
                  <span>Rs .{el.Price}</span>
                  <div className="lolo">
                    <button className=" allprd_add_btn">
                      <FaShoppingCart style={{ fontSize: "25px" }} />
                    </button>
                    <p className="allprd_add">Add to Cart</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
