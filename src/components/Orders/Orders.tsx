import styles from "./Orders.module.css";
import BodyOrders from "../BodyOrders/BodyOrders";

const Orders = () => {
  return (
    <div className={styles.orders_wrap}>
      <BodyOrders />
    </div>
  );
};

export default Orders;
