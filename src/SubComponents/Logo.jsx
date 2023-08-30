import React from "react";
import logo from "../../public/Images/Logo.svg";

const Logo = () => {
  const logoCss = {
    width: "130px",
    height: "80px",
  };
  const css = {
    width: "140px",
    height: "75px",
  };
  return (
    <div style={css}>
      <img style={logoCss} src={logo} alt="Nike" />
    </div>
  );
};

export default Logo;
