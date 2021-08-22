import React from "react";
import "./prod.css";
import x from "./xx";
import y from "./yy";
import z from "./zz";

import { FaShoppingCart } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";

const sortby = ["Low To High",  "Popularity", "High To Low","Discount"];
const Products = () => {
  const [prod, setProd] = useState([]);
  const [set, setSet] = useState(null);
  // const [id, setId] = useState(1);

  const setCat1 = (i) => {
    if (i === 1) {
      setProd(x);
    } else if (i === 2) {
      setProd(z);
    } else if (i === 3) {
      setProd(y);
    }
  };

  function aec() {
    setProd([...prod].sort((a, b) => Number(a.Price) - Number(b.Price)));
    setSet(sortby[0]);
  }
  function pop() {
    setProd([...prod].sort((b, a) => Number(a.rating) - Number(b.rating)));
    setSet(sortby[1]);
  }
  function dec() {
    setProd([...prod].sort((b, a) => Number(a.Price) - Number(b.Price)));
    setSet(sortby[2]);
  }
  function dis() {
    setProd([...prod].sort((b, a) => Number(a.discount) - Number(b.discount)));
    setSet(sortby[3]);
  }

  return (
    <div className="allproduct">
      <div className="allprod_nav">
        <p> category kids</p>
        <button onClick={() => setCat1(1)}>Kids</button>
        <button onClick={() => setCat1(2)}>Men</button>
        <button onClick={() => setCat1(3)}>Women</button>
        <button onClick={() => setCat1(4)}>Electronics</button>
        <button onClick={() => setCat1(5)}>Furnitures</button>

        <div className="allprod_dropdown">
          <p className="allprod_sort">
            Sort By: <span>{set}</span>
            <RiArrowDownSLine />
          </p>
          <div className="allprod_dropdown-content">
            <p onClick={aec}>Price: Low To High</p>
            <p onClick={dec}>Price: High To Low</p>
            <p onClick={pop}>Popularity</p>
            <p onClick={dis}>Discount</p>
          </div>
        </div>
      </div>
      <div className="allprod_grid">
        <div className="allprod_slid">
          <h1>Heloo</h1>
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
    </div>
  );
};

export default Products;
