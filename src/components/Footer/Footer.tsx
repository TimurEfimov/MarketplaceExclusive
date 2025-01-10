import React from "react";
import styles from "./Footer.module.scss";

interface ListItem {
  title: string;
  points: string[];
}

const Footer: React.FC = () => {
  const list: ListItem[] = [
    {
      title: "Support",
      points: [
        "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
        "exclusive@gmail.com",
        "+88015-88888-9999",
      ],
    },
    {
      title: "Account",
      points: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
    },
    {
      title: "Quick Link",
      points: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.flexFooter}>
          <div>
            <h4 style={{ marginBottom: "24px" }}>Exclusive</h4>
            <ul className={styles.flexList}>
              <li>Subscribe</li>
              <li>Get 10% off your first order</li>
              <li style={{ position: "relative" }}>
                <svg
                  className={styles.icon}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className={styles.input}
                />
              </li>
            </ul>
          </div>
          {list.map((item, index) => (
            <div key={index}>
              <h4 style={{ marginBottom: "24px" }}>{item.title}</h4>
              <ul>
                {item.points.map((point, i) => (
                  <a href="#">
                    <li className={styles.link} key={i}>
                      {point}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
