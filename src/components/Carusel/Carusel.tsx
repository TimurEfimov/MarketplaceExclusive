import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import banner from "/iphone.png";
import styles from "./carusel.module.scss";

const Carusel: React.FC = () => {
  const images = [banner, banner, banner];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <>
      <div className={styles.carousel}>
        <a href="#">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={2500}
            infinite
            draggable
            pauseOnHover
            responsive={responsive}
            showDots={false}
            swipeable
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`banner-${index}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ))}
          </Carousel>
        </a>
      </div>
    </>
  );
};

export default Carusel;
