import styles from "./NewArrival.module.scss";
import redline from "/subtitleLine.svg";
import PatternArrival from "./PatternArrival";

import React from "react";

const NewArrival: React.FC = () => {
  const news = [
    {
      title: "PlayStation 5",
      desc: "Black and White version of the PS5 coming out on sale.",
      imgUrl: "/newArrival/ps5.png",
    },
    {
      title: "Women’s Collections",
      desc: "Featured woman collections that give you another vibe.",
      imgUrl: "/newArrival/womancollections.png",
    },
    {
      title: "Speakers",
      desc: "Amazon wireless speakers",
      imgUrl: "/newArrival/speakers.png",
    },
    {
      title: "Perfume",
      desc: "GUCCI INTENSE OUD EDP",
      imgUrl: "/newArrival/perfume.png",
    },
  ];

  const gridAreas = [
    "1 / 1 / 5 / 3",
    "1 / 3 / 3 / 5",
    "3 / 3 / 5 / 4",
    "3 / 4 / 5 / 5",
  ];

  return (
    <>
      {news.length > 0 && (
        <>
          <div className="subtitle">
            <img src={redline} alt="" />
            <h5>Featured</h5>
          </div>
          <h3 className="title">New Arrival</h3>
          <div className={styles.section}>
            {news.map((obj, i) => (
              <PatternArrival
                {...obj}
                key={i}
                style={{ gridArea: gridAreas[i] }}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default NewArrival;
