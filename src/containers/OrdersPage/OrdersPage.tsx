import { useEffect } from "react";
import Orders from "../../components/Orders/Orders";
import styles from "./OrdersPage.module.css";
import getData from "../../requests/getData";
import { useDispatch } from "react-redux";

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
