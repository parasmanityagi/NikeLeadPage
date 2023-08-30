import React from "react";

const Button = ({ name }) => {
  const css = {
    border: "none",
    backgroundColor: "red",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize: "large",
    fontWeight: "500",
    margin: "0 10px",
  };
  return <button style={css}>{name}</button>;
};

export default Button;
