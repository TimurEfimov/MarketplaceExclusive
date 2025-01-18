import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";

import React from "react";

const Cart: React.FC = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.block}>
        <li>Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Subtotal</li>
      </ul>
      <div className={styles.block}>
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
