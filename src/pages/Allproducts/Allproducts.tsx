import React from "react";
import { useSelector } from "react-redux";

import { fetchItems } from "../../redux/slices/itemsSlice";
import { fetchWishlistItems } from "../../redux/slices/wishlistSlice";
import { useAppDispatch } from "../../redux/store";

import redline from "/subtitleLine.svg";
import ItemBlock from "../../components/ItemBlock";
import { renderSkeletons } from "../../components/OurProducts/OurProducts";
import { ItemsData } from "../../redux/slices/itemsSlice";
import { selectWishlist } from "../../redux/slices/wishlistSlice";

const Allproducts: React.FC = () => {
  const dispatch = useAppDispatch();

  const [currentPage] = React.useState(1);
  const [limit] = React.useState(20);

  const wishlist = useSelector(selectWishlist);
  const favoriteIds = wishlist.map((item) => item.id);

  const { items, status } = useSelector(ItemsData);

  const idDeleteMap = wishlist.reduce((acc, item) => {
    acc[item.id] = item.idDelete;
    return acc;
  }, {} as Record<number, number>);

  const renderItems = items.map((obj) => (
    <ItemBlock
      {...obj}
      key={obj.id}
      isFavorite={favoriteIds.includes(obj.id)}
      idDelete={idDeleteMap[obj.id]}
    />
  ));

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
      <div className="subtitle" style={{ marginTop: "60px" }}>
        <img src={redline} alt="" />
        <h5>Our Products</h5>
      </div>
      <h3 className="title">All Products</h3>
      <div className="items">
        {status === "loading" ? renderSkeletons : renderItems}
      </div>
    </>
  );
};

export default Allproducts;
