import styles from "./RouteAnime.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface RouteAnimeProps {
  children?: React.ReactNode;
}

const RouteAnime: React.FC<RouteAnimeProps> = ({ children }) => {
  const isPage = useSelector((state: RootState) => state.isPage.isPage);
  return (
    <div>
      <div
        className={`${styles.page__transition} ${
          !isPage ? styles.visible : ""
        }`}
      >
        {children}
      </div>
      <div
        className={`${styles.page__transition2} ${
          isPage ? styles.visible2 : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default RouteAnime;
