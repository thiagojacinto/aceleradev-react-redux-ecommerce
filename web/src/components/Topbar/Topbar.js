import React from "react";
import { Link } from "react-router-dom";
import { Search } from "@styled-icons/fa-solid";

import { CartIcon } from "../Cart";
import Logo from "../../assets/logo.png";

export const Topbar = ({ iconsSize = "30" }) => {
  return (
    <nav className="topbar">
      <div className="container">
        <section className="topbar__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </section>

        <section className="topbar__extra">
          <div className="topbar__extra-search">
            <Link to="/search">
              <Search size={iconsSize} />
            </Link>
          </div>

          <div className="topbar__extra-shopping_cart">
            <Link to="/cart">
              <CartIcon iconSize={iconsSize} />
            </Link>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Topbar;
