import React from "react";
import styles from "./NewArrival.module.scss";

interface PatternArrivalProps {
  title: string;
  desc: string;
  imgUrl: string;
  style: React.CSSProperties;
}

const PatternArrival: React.FC<PatternArrivalProps> = ({
  title,
  desc,
  imgUrl,
  style,
}) => {
  return (
    <>
      <div className={styles.block} style={style}>
        <img src={imgUrl} alt="" />
        <div className={styles.textBlock}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
          <a href="#" className={styles.link}>
            Shop Now
          </a>
        </div>
      </div>
    </>
  );
};

export default PatternArrival;
