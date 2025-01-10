import React from "react";
import Search from "../Search/Search";
import logo from "/logo.svg";
import wishlist from "/wishlist.svg";
import cart from "/cart.svg";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const list: string[] = ["Home", "Contact", "About", "Sign Up"];

  return (
    <div className="container">
      <header className={styles.header}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <nav className={styles.nav}>
          {list.map((title, i) => <a href="#" key={i} className={styles.link}>{title}</a>)}
        </nav>
        <div className={styles.sections}>
          <Search />
          <a href="/">
            <img src={wishlist} alt="wishlist" />
          </a>
          <a href="/">
            <img src={cart} alt="cart" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
