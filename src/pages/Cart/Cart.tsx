import React from "react";
import { Link } from "react-router-dom";

import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";

import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";

const Cart: React.FC = () => {
  const { items, totalCount, totalPrice } = useSelector(selectCart);

  return (
    <div className={styles.root}>
      <ul className={styles.block}>
        <li>Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Subtotal</li>
      </ul>
      {items.map((obj) => (
        <div className={styles.block}>
          <CartItem {...obj} key={obj.id} />
        </div>
      ))}
      <div className={styles.links}>
        <Link to="/" className={styles.button}>
          Return to Shop
        </Link>
        <Link to="." className={styles.button}>
          Update Cart
        </Link>
      </div>
      <div className={styles.finish}>
        <input type="text" placeholder="Coupon code" />
        <a href="" className="button">
          Apply Coupon
        </a>

        <div className={styles.total}>
          <h3>Cart Total</h3>
          <div>
            <p>Subtotal:</p>
            <span>${totalPrice}</span>
          </div>
          <hr />
          <div>
            <p>Shipping:</p>
            <span>Free</span>
          </div>
          <hr />
          <div>
            <p>Total:</p>
            <span>${totalPrice}</span>
          </div>
          <Link className="button" to="/">
            Procees to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
