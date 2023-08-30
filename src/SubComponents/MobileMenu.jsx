import React, { useState } from "react";
import "../Styles/MobileMenu.css";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import Button from "./Button";
import Hamburger from "./Hamburger";

const MobileMenu = ({ clas }) => {
  const [isActive, setActive] = useState(false);

  const css = {
    display: isActive ? "flex" : "none",
  };

  return (
    <div style={clas} className="MobileMenu">
      <div className="first">
        <Logo />
        <Hamburger isSet={isActive} func={() => setActive(!isActive)} />
      </div>

      <div style={css} className="menu">

        <div className="menu_item">
          <MenuItem name="Home" />
        </div>
        <div className="menu_item">
          <MenuItem name="About" />
        </div>
        <div className="menu_item">
          <MenuItem name="Location" />
        </div>
        <div className="menu_item">
          <MenuItem name="Contact" />
        </div>

        <div>
          <Button name="Login" />
          <Button name="Register" />
        </div>
        
      </div>
    </div>
  );
};

export default MobileMenu;
