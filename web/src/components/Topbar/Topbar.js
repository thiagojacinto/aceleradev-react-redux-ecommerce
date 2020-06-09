import React from "react";
import { Link } from "react-router-dom";

import { Search, ShoppingCart } from "@styled-icons/fa-solid";

export const Topbar = (props) => {
  return (
    <nav className="topbar">
      <div className="container">

        <section className="topbar__logo">
          <Link to="/">
            <img src="../../../public/rio_negro-small.png" alt="logo" />
          </Link>
        </section>

        <section className="topbar__extra">
          <div className="topbar__extra-search">
            <Link to="/search">
              <Search size="24" />
            </Link>
          </div>

          <div className="topbar__extra-shopping_cart">
            <Link to="/cart">
              <ShoppingCart size="24" />
            </Link>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Topbar;
