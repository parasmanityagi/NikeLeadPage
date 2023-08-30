import React from "react";

const Product = ({clas , src}) => {
  return (
    <div className={clas}>
      <img src={src} alt="Shoe" />
    </div>
  );
};

export default Product;
