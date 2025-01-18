import React from "react";
import styles from "./About.module.scss";
import about from "/aboutImage.png";

const About: React.FC = () => {
  return (
    <>
      <div className={styles.root}>
        <div>
          <h1 className={styles.title}>Our Story</h1>
          <p className={styles.desc}>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className={styles.desc}>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={about} alt="" className={styles.img} />
      </div>
    </>
  );
};

export default About;
