import React from "react";
import styles from "./CartItem.module.scss";
import {
  addItem,
  cartItem,
  minusItem,
  deleteItem,
} from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem: React.FC<cartItem> = ({ title, imgUrl, count, price, id }) => {
  const dispatch = useDispatch();

  function onClickDelete() {
    dispatch(deleteItem(id));
  }

  function onClickPlus() {
    dispatch(addItem({ id, title, price, imgUrl, count }));
  }
  function onClickMinus() {
    dispatch(minusItem(id));
  }
  return (
    <>
      <div className={styles.title}>
        <img src={imgUrl} alt="" />
        <svg
          onClick={onClickDelete}
          className={styles.delete}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="9" fill="#DB4444" />
          <path
            d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h6>{title}</h6>
      </div>
      <span>${price}</span>
      <div className={styles.count}>
        <span>{count}</span>
        <div className={styles.plusMinus}>
          <svg
            onClick={onClickPlus}
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
            onClick={onClickMinus}
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
      <span>${price * count}</span>
    </>
  );
};

export default CartItem;
