import React, { useState, useEffect } from "react";
import DesktopMenu from "../SubComponents/DesktopMenu";
import MobileMenu from "../SubComponents/MobileMenu";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isMobileMenu = width <= 768;

  const DesktopCss = {
    display: isMobileMenu ? "none" : "flex",
  };

  const MobileCss = {
    display: (!isMobileMenu) ? "none" : "flex",
  };
  return (
    <>
      <DesktopMenu clas={DesktopCss} />

      <MobileMenu clas={MobileCss}/>
    </>
  );
};

export default Navbar;
