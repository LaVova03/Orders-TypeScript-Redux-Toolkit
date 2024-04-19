import styles from "./LeftMenu.module.css";
import React, { useState } from "react";
import Gratis from "../../assets/gratis.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setPage } from "../../features/ChangePage";
import { useTranslation } from "react-i18next";

interface LeftMenuType {
  isPage?: boolean;
}

const LeftMenu: React.FC<LeftMenuType> = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const isPage = useSelector((state: RootState) => state.isPage.isPage);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [isPhoto, addPhoto] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    const reader: any = new FileReader();
    reader.onload = () => {
      addPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleTogglePage = () => {
    dispatch(setPage());
  };

  return (
    <div className={styles.left__menu__wrap}>
      <div>
        {isPhoto ? (
          <label>
            <img id={styles.photo} src={isPhoto} alt="logo" />
          </label>
        ) : (
          <label>
            {t("Ваше")}
            <br />
            {t("фото")}
            <br />
            {t("здесь")}
          </label>
        )}
        <label htmlFor="fileInput">
          <img id={styles.gratis} src={Gratis} alt="Upload" />
        </label>
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
      <ul>
        <li>
          <button
            onClick={() => {
              if (location.pathname !== "/") {
                navigation("/");
                if (isPage) {
                  handleTogglePage();
                }
              }
            }}
          >
            {t("ПРИХОД")}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              if (location.pathname !== "/products") {
                navigation("/products");
                if (!isPage) {
                  handleTogglePage();
                }
              }
            }}
          >
            {t("ПРОДУКТЫ")}
          </button>
        </li>
        <li>
          <button>{t("ГРУППЫ")}</button>
        </li>
        <li>
          <button>{t("ПОЛЬЗОВАТЕЛИ")}</button>
        </li>
        <li>
          <button>{t("НАСТРОЙКИ")}</button>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
