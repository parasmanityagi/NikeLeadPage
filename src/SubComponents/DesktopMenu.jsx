import React from "react";
import '../Styles/DesktopMenu.css';
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import Button from "./Button";

const DesktopMenu = ({clas}) => {
  const css = {
    display: "flex",
    gap: "50px",
  }
  return (
    <div style={clas} className="desktop_menu">
        <Logo />

      <ul style={css}>
        <MenuItem name="Home" />
        <MenuItem name="About" />
        <MenuItem name="Location" />
        <MenuItem name="Contact" />
      </ul>

      <div>
        <Button name="Login/Register" />
      </div>
    </div>
  );
};

export default DesktopMenu;
