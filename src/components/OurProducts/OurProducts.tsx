import React from "react";
import styles from "./OurProducts.module.scss";

import { ItemsData } from "../../redux/slices/itemsSlice";
import { useSelector } from "react-redux";
import { selectWishlist } from "../../redux/slices/wishlistSlice";
import redline from "/subtitleLine.svg";
import ItemBlock from "../../components/ItemBlock";
import Skeleton from "../../components/ItemBlock/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

interface OurProductsProps {
  onChangePage: (num: number) => void;
}
export const renderSkeletons = [...new Array(8)].map((_, index) => (
  <Skeleton key={index} />
));

const OurProducts: React.FC<OurProductsProps> = ({ onChangePage }) => {
  const wishlist = useSelector(selectWishlist);
  const favoriteIds = wishlist.map((item) => item.id);

  const { items, pages, status } = useSelector(ItemsData);

  const renderItems = items.map((obj) => (
    <ItemBlock
      {...obj}
      key={obj.id}
      isFavorite={favoriteIds.includes(obj.id)}
    />
  ));

  return (
    <>
      <div className={styles.sectionSub}>
        <div className="subtitle">
          <img src={redline} alt="" />
          <h5>Our Products</h5>
        </div>
        {pages && (
          <Pagination
            onChangePage={onChangePage}
            per_page={pages.per_page}
            total_pages={pages.total_pages}
          />
        )}
      </div>
      <h3 className="title">Explore Our Products</h3>
      <div className="items">
        {status === "loading" ? renderSkeletons : renderItems}
      </div>
      <div className="centered">
        <a className="button">View All Products</a>
      </div>
    </>
  );
};

export default OurProducts;
