import React from "react";
import styles from "./ItemBlock.module.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { cartItem } from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../redux/store";
import { addItemToWishlist } from "../../redux/slices/wishlistSlice";
import usualFavorite from "/favoriteUsual.svg";
import addFavorite from "/favoriteAdd.svg";
import { useLocation } from "react-router";

interface ItemBlock {
  id: number;
  price: number;
  title: string;
  imgUrl: string;
  isFavorite?: boolean;
}

const ItemBlock: React.FC<ItemBlock> = ({
  id,
  price,
  title,
  imgUrl,
  isFavorite,
}) => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const location = useLocation();

  const isWishlistPage = location.pathname === "/wishlist";

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
    if (isFavorite) {
      console.log("You have had this product in wishlist");
    } else {
      const item: number = id;
      appDispatch(addItemToWishlist(item));
    }
  }

  return (
    <div className={styles.item}>
      <div style={{ position: "relative" }}>
        <img src={imgUrl} className={styles.img} alt={title} />
        {!isWishlistPage && (
          <img
            src={isFavorite ? addFavorite : usualFavorite}
            onClick={onClickAddToWishlist}
            className={styles.wishlist}
            alt=""
          />
        )}

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
