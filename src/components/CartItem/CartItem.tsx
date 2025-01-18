import React from "react";
import styles from "./CartItem.module.scss";

const CartItem: React.FC = () => {
  return (
    <>
      <div className={styles.title}>
        <img src="https://i.ibb.co/fHSvmqr/Frame-570-2.png" alt="" />
        <h6>LCD Monitor</h6>
      </div>
      <span>$650</span>
      <div className={styles.count}>
        <span>01</span>
        <div className={styles.plusMinus}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z"
              fill="black"
            />
          </svg>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.24268 8.63334L11.5427 5.33334L12.4854 6.27601L8.24268 10.5187L4.00002 6.27601L4.94268 5.33334L8.24268 8.63334Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <span>$650</span>
    </>
  );
};

export default CartItem;
