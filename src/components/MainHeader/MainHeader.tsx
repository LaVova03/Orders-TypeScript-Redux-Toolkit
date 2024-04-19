import styles from "./MainHeader.module.css";
import { useState, useEffect } from "react";
import Watch from "../../assets/watch.png";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setTime, setDate } from "../../features/ChangePage";

const MainHeader = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const daysOfWeek = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  const dayOfWeek = daysOfWeek[currentDateTime.getDay()];
  const date = currentDateTime.toLocaleDateString();
  const time = currentDateTime.toLocaleTimeString();

  useEffect(() => {
    if (date) {
      dispatch(setDate(date));
    }
    if (time) {
      dispatch(setTime(time));
    }
  }, [date, time, dispatch]);

  return (
    <div className={styles.main__header__wrap}>
      <div className={styles.header__wrap__logo}>
        <div className={styles.main__header__logo}></div>
        <div className={styles.main__header__text}>INVENTORY</div>
      </div>
      <div className={styles.header__wrap__input}>
        <input placeholder={t("Поиск")} />
      </div>
      <div className={styles.main__header__date}>
        <ul>
          <li>{t(`${dayOfWeek}`)}</li>
          <li>
            <ul>
              <li>{date}</li>
              <li>
                <img
                  className={styles.main__header__watch}
                  src={Watch}
                  alt="logo"
                />
                {time}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
