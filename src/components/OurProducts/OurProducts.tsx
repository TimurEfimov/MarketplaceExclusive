import React from "react";
import styles from "./OurProducts.module.scss";

import { item, Meta } from "../../pages/Home/Home";
import redline from "/subtitleLine.svg";
import ItemBlock from "../../components/ItemBlock";
import Skeleton from "../../components/ItemBlock/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

interface OurProductsProps {
  pages: Meta | null;
  items: item[];
  loading: boolean;
  onChangePage: (num: number) => void;
}

const OurProducts: React.FC<OurProductsProps> = ({
  pages,
  items,
  onChangePage,
  loading,
}) => {
  const renderSkeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const renderItems = items.map((obj) => <ItemBlock {...obj} key={obj.id} />);

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
      <div className={styles.items}>
        {loading ? renderSkeletons : renderItems}
      </div>
      <button className="button">View All Products</button>
    </>
  );
};

export default OurProducts;
