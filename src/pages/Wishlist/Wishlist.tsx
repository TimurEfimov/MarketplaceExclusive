import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import styles from "./Wishlist.module.scss";

import ItemBlock from "../../components/ItemBlock";
import { wishlistData } from "../../redux/slices/wishlistSlice";
import { selectWishlistById } from "../../redux/slices/wishlistSlice";
import { renderSkeletons } from "../../components/OurProducts/OurProducts";

const Wishlist: React.FC = () => {
  const dispatch = useAppDispatch();

  const { totalCount, status } = useSelector(wishlistData);

  const items = useSelector(selectWishlistById);

  const renderItems = items.map((obj) => <ItemBlock {...obj} key={obj.id} />);

  return (
    <>
      <div className={styles.title}>
        <h3>Wishlist ({totalCount})</h3>
        <a href="#" className="button-white">
          Move All To Bag
        </a>
      </div>
      <div className="items">
        {status === "loading" ? renderSkeletons : renderItems}
      </div>
    </>
  );
};

export default Wishlist;
