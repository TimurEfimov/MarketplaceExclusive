import React from "react";
import styles from "./ItemBlock.module.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { cartItem } from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../redux/store";
import { addItemToWishlist } from "../../redux/slices/wishlistSlice";

interface ItemBlock {
  id: number;
  price: number;
  title: string;
  imgUrl: string;
}

const ItemBlock: React.FC<ItemBlock> = ({ id, price, title, imgUrl }) => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  function onClickAdd() {
    const item: cartItem = {
      id,
      title,
      price,
      imgUrl,
      count: 0,
    };
    dispatch(addItem(item));
  }

  function onClickAddToWishlist() {
    const item: cartItem = {
      id,
      title,
      price,
      imgUrl,
      count: 0,
    };
    appDispatch(addItemToWishlist(item));
  }

  return (
    <div className={styles.item}>
      <div style={{ position: "relative" }}>
        <img src={imgUrl} className={styles.img} alt={title} />
        <svg
          onClick={onClickAddToWishlist}
          className={styles.wishlist}
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="17" cy="17" r="17" fill="white" />
          <path
            d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <button className={styles.button} onClick={onClickAdd}>
          Add to Cart
        </button>
      </div>
      <h4>{title}</h4>
      <span className={styles.price}>${price}</span>
    </div>
  );
};

export default ItemBlock;
