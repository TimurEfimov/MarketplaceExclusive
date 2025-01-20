import React from "react";
import { Link } from "react-router-dom";

import Search from "../Search/Search";
import logo from "/logo.svg";
import wishlist from "/wishlist.svg";
import cart from "/cart.svg";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Header: React.FC = () => {
  const list: string[] = ["Home", "Contact", "About", "Sign Up"];

  const totalCart = useSelector((state: RootState) => state.cart.totalCount);
  const totalWishlist = useSelector(
    (state: RootState) => state.wishlist.totalCount
  );

  return (
    <header className={styles.header}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <nav className={styles.nav}>
        {list.map((title, i) => (
          <Link
            to={title.toLowerCase().replace(/\s+/g, "")}
            key={i}
            className={styles.link}
          >
            {title}
          </Link>
        ))}
      </nav>
      <div className={styles.sections}>
        <Search />
        <Link to="wishlist">
          <img src={wishlist} alt="wishlist" />
          {totalWishlist >= 1 && (
            <b className={styles.total}>{totalWishlist}</b>
          )}
        </Link>
        <Link to="cart">
          <img src={cart} alt="cart" />
          {totalCart >= 1 && <b className={styles.total}>{totalCart}</b>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
