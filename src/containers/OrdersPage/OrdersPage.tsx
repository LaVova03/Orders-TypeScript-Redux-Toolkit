import styles from "./OrdersPage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Orders from "../../components/Orders/Orders";
import getData from "../../requests/getData";

const OrdersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch);
  });

  return (
    <div className={styles.orders__page}>
      <Orders />
    </div>
  );
};

export default OrdersPage;
