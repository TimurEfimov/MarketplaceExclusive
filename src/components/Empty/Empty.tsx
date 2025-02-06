import React from "react";
import { Link } from "react-router-dom";
import styles from "./Empty.module.scss";

interface EmptyProps {
  title: string;
  desc: string;
  svg: string;
}

const Empty: React.FC<EmptyProps> = ({ title, desc, svg }) => {
  return (
    <div className={styles.empty}>
      <h1 className="title">{title}</h1>
      <p className="desc">{desc}</p>
      <img src={svg} alt="" />

      <Link to="/" className="button" style={{ marginBottom: 0 }}>
        Back to home page
      </Link>
    </div>
  );
};

export default Empty;
