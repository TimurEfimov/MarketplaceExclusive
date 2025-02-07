import React from "react";

import { fetchItems } from "../../redux/slices/itemsSlice";
import { fetchWishlistItems } from "../../redux/slices/wishlistSlice";
import { useAppDispatch } from "../../redux/store";

import Navigation from "../../components/Navigation/Navigation";
import styles from "./Home.module.scss";
import Carusel from "../../components/Carusel/Carusel";
import OurProducts from "../../components/OurProducts/OurProducts";
import NewArrival from "../../components/newArrival/NewArrival";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit] = React.useState(8);

  function onChangePage(num: number) {
    setCurrentPage(num);
    console.log(num);
  }

  const getItems = async () => {
    try {
      dispatch(fetchItems({ currentPage, limit }));
    } catch (err) {
      console.log(err);
      alert("Произошла ошибка загрузки товаров");
    }
  };

  const getWishlistItems = async () => {
    try {
      dispatch(fetchWishlistItems());
    } catch (err) {
      console.log(err);
      alert("Произошла ошибка загрузки товаров");
    }
  };

  React.useEffect(() => {
    getWishlistItems();
    getItems();
  }, [currentPage]);

  return (
    <>
      <div className={styles.welcome}>
        <Navigation />
        <Carusel />
      </div>
      <OurProducts onChangePage={onChangePage} />
      <NewArrival />
    </>
  );
};

export default Home;
