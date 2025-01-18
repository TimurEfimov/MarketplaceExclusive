import React from "react";
import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  const navigationList: string[] = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <ul className={styles.list}>
      {navigationList.map((name, i) => (
        <li key={i} className={styles.listItem}>
          <a href="#">
            {name}
            <svg
              className={styles.arrow}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
