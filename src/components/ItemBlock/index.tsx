import React from "react";
import styles from "./ItemBlock.module.scss";

interface ItemBlockProps {
  price: number;
  title: string;
  imgUrl: string;
}

const ItemBlock: React.FC<ItemBlockProps> = ({ price, title, imgUrl }) => {
  return (
    <div className={styles.item}>
      <img src={imgUrl} className={styles.img} alt="" />
      <h4>{title}</h4>
      <span className={styles.price}>${price}</span>
    </div>
  );
};

export default ItemBlock;
