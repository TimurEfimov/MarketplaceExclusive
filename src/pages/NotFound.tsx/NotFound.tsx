import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <>
    <div className={styles.root}>
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Link className="button" to="/">Back to home page</Link>
    </div>
      </>
  );
};

export default NotFound;
