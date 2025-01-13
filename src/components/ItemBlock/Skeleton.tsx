import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader: React.FC = () => (
  <ContentLoader
    speed={2}
    width={270}
    height={322}
    viewBox="0 0 270 322"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="345" rx="10" ry="10" width="280" height="88" />
    <rect x="-2" y="450" rx="10" ry="10" width="90" height="30" />
    <rect x="125" y="443" rx="25" ry="25" width="152" height="45" />
    <rect x="0" y="0" rx="10" ry="10" width="270" height="250" />
    <rect x="0" y="260" rx="5" ry="5" width="200" height="20" />
    <rect x="0" y="290" rx="5" ry="5" width="50" height="20" />
  </ContentLoader>
);

export default MyLoader;
