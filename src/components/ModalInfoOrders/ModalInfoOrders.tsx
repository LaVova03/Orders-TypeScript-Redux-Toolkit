import React from "react";
import styles from "./ModalInfoOrders.module.css";
import { orders } from "../../data";

import Close from "../../assets/close.png";
import Backet from "../../assets/backet.png";

interface ModalInfoOrdersProps {
  id: number;
  setModal: (value: boolean) => void;
}

const ModalInfoOrders: React.FC<ModalInfoOrdersProps> = ({ id, setModal }) => {
  const order = orders.find((order) => order.id === id);

  if (order) {
    return (
      <div className={styles.modal__orders__wrap}>
        <button
          id={styles.modal__orders__close}
          onClick={() => setModal(false)}
        >
          <img src={Close} alt="logo" />
        </button>
        <h2>{order.title}</h2>
        {order.products.map((product, index) => (
          <ul key={index}>
            <li>
              <img src={product.photo} alt="logo" />
            </li>
            <li>
              <label>{product.title}</label>
              <br />
              SN-{product.serialNumber}
            </li>
            <li>
              <button id={styles.modal__orders__delete}>
                <img src={Backet} alt="logo" />
              </button>
            </li>
          </ul>
        ))}
      </div>
    );
  } else {
    return <div>Заказ не найден</div>;
  }
};

export default ModalInfoOrders;
