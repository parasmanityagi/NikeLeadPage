import React from "react";
import "../Styles/Content.css";
import Button from "../SubComponents/Button";
import Product from "../SubComponents/Product";
import Amazon from "../../public/Images/Amazon.svg";
import Flipkart from "../../public/Images/Flipkart.svg";
import product from "../../public/Images/Product.png";

const Main = () => {
  return (
    <div className="content">
      <div className="content_one">
        <h1>YOUR FEET DESERVES THE BEST</h1>

        <Product clas="show1 content_two" src={product} />

        <p>
          YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES
        </p>

        <div>
          <Button name="Shop Now" />
          <Button name="Category" />
        </div>

        <div>
          <h5>Also Available On</h5>
          <div>
            <img src={Amazon} alt="Amazon" />
            <img src={Flipkart} alt="Flipkart" />
          </div>
        </div>
      </div>

      <Product clas="show2 content_two" src={product} />
    </div>
  );
};

export default Main;
