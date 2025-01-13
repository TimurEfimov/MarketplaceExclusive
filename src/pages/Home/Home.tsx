import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./Home.module.scss";
import Carusel from "../../components/Carusel/Carusel";
import ItemBlock from "../../components/ItemBlock";
import Skeleton from "../../components/ItemBlock/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

interface item {
  id: number;
  imgUrl: string;
  title: string;
  price: number;
}

interface Meta {
  total_items: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<item[]>([]);
  const [pages, setPages] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  function onChangePage(num: number) {
    setCurrentPage(num);
    console.log(1);
  }

  const getItems = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://b76b48dd1279d78e.mokky.dev/items?page=${currentPage}&limit=8`
      );
      setItems(data.items);
      setPages(data.meta);
    } catch (err) {
      console.log(err);
      alert("Произошла ошибка загрузки товаров");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItems();
  }, [currentPage]);

  const renderSkeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const renderItems = items.map((obj) => <ItemBlock {...obj} key={obj.id} />);

  return (
    <>
      <div className={styles.welcome}>
        <Navigation />
        <Carusel />
      </div>
      <div className={styles.section}>
        <div className="subtitle">
          <svg
            width="20"
            height="40"
            viewBox="0 0 20 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="40" rx="4" fill="#DB4444" />
          </svg>
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
      <h3 className={styles.title}>Explore Our Products</h3>
      <div className={styles.items}>
        {loading ? renderSkeletons : renderItems}
      </div>
      
    </>
  );
};

export default Home;
