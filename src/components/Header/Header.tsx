import React from "react";
import { Link } from "react-router-dom";

import Search from "../Search/Search";
import logo from "/logo.svg";
import wishlist from "/wishlist.svg";
import cart from "/cart.svg";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const list: string[] = ["Home", "Contact", "About", "Sign Up"];

  return (
    <header className={styles.header}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <nav className={styles.nav}>
        {list.map((title, i) => (
          <Link to={title.toLowerCase().replace(/\s+/g, "")} key={i} className={styles.link}>
            {title}
          </Link>
        ))}
      </nav>
      <div className={styles.sections}>
        <Search />
        <a href="/">
          <img src={wishlist} alt="wishlist" />
        </a>
        <Link to="cart">
          <img src={cart} alt="cart" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
