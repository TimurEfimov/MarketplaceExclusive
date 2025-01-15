import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./Home.module.scss";
import Carusel from "../../components/Carusel/Carusel";
import OurProducts from "../../components/OurProducts/OurProducts";
import NewArrival from "../../components/newArrival/NewArrival";

export interface item {
  id: number;
  imgUrl: string;
  title: string;
  price: number;
}

export interface Meta {
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

  return (
    <>
      <div className={styles.welcome}>
        <Navigation />
        <Carusel />
      </div>
      <OurProducts
        pages={pages}
        loading={loading}
        items={items}
        onChangePage={onChangePage}
      />
      <NewArrival />
    </>
  );
};

export default Home;
