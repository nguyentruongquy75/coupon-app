import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Nav from "./Nav";
import Overlay from "../overlay/Overlay";

export default function Header() {
  const [isDisplayNav, setIsDisplayNav] = useState(false);

  const displayNav = () => setIsDisplayNav(true);
  const hideNav = () => setIsDisplayNav(false);

  // display / hide nav
  useEffect(() => {
    if (isDisplayNav) {
      document.querySelector("nav").classList.add("nav__display");
    } else {
      document.querySelector("nav").classList.remove("nav__display");
    }
  }, [isDisplayNav]);

  // overflow body
  useEffect(() => {
    if (isDisplayNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = null;
    }
  }, [isDisplayNav]);

  return (
    <header className="flex items-center py-2 pr-4">
      <div onClick={displayNav} className="text-xl py-2 px-4 cursor-pointer">
        <i className="fas fa-bars"></i>
      </div>
      <div className="max-w-[8rem] mx-auto">
        <Link to="/">
          <img className="object-cover" src={Logo} alt="Coupon" />
        </Link>
      </div>

      <Nav hideNav={hideNav} />
      {isDisplayNav && <Overlay onClick={hideNav} />}
    </header>
  );
}
