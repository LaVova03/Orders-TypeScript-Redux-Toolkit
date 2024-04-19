import styles from "./BodyOrders.module.css";
import React, { useState } from "react";
import Plus from "../../assets/transparent.png";
import Backet from "../../assets/backet.png";
import Right from "../../assets/right.png";
import { products } from "../../data";
import ModalInfoOrders from "../ModalInfoOrders/ModalInfoOrders";
import BootstrapDelete from "../BootstrapDelete/BootstrapDelete";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Burger from "../../assets/burger.png";
import AddOrderModal from "../AddOrderModal/AddOrderModal";

interface ModalInfoOrdersProps {
  products?: any;
  isDeleteModal?: boolean;
  index?: number;
  isIdDelete?: string;
  dispatch?: any;
  showAddOrderModal?: any;
}

const BodyOrders: React.FC<ModalInfoOrdersProps> = () => {
  const { t } = useTranslation();

  const orders = useSelector((state: RootState) => state.isPage.isOrders);

  const [isModal, setModal] = useState(false);
  const [isDeleteModal, showModalDelete] = useState(false);
  const [isIdOrders, setIdOrders] = useState("");
  const [isIdDelete, setIdDelete] = useState("");
  const [isAddOrderModal, showAddOrderModal] = useState(false);

  const calculateTotalPriceUsd = (products: any) => {
    let totalPrice = 0;
    products.forEach((product: any) => {
      totalPrice += product.price[0].value;
    });
    return totalPrice;
  };

  const calculateTotalPriceUah = (products: any) => {
    let totalPrice = 0;
    products.forEach((product: any) => {
      totalPrice += product.price[1].value;
    });
    return totalPrice;
  };

  return (
    <div className={styles.body__orders__wrap}>
      <div>
        <button onClick={() => showAddOrderModal(true)}>
          <img src={Plus} alt="logo" />
        </button>
        <label>
          {t("Приходы")} / {orders?.length}
        </label>
      </div>
      {orders?.map((el, index) => (
        <ul key={index}>
          {!isModal && !isAddOrderModal ? <li>{el.title}</li> : null}
          <li>
            <button
              onClick={() => {
                setIdOrders(el.id.toString());
                setModal(true);
                showModalDelete(false);
              }}
            >
              <img src={el ? Burger : ""} alt="logo" />
            </button>
          </li>
          <li>
            <label>{products?.length}</label>
            <br />
            {t("продукта")}
          </li>
          <li>{el.date}</li>
          {!isModal && !isAddOrderModal ? (
            <>
              <li>
                {calculateTotalPriceUsd(products)} $
                <br />
                <label>{calculateTotalPriceUah(products)} UAH</label>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIdOrders(index.toString());
                    setIdDelete(el.id.toString());
                    showModalDelete(true);
                    setModal(false);
                  }}
                >
                  <img src={Backet} alt="logo" />
                </button>
              </li>
            </>
          ) : isModal && el.id === isIdOrders ? (
            <li id={styles.orders__body__right}>
              <img src={Right} alt="logo" />
            </li>
          ) : null}
        </ul>
      ))}
      <div
        className={`${styles.modal__info} ${
          isModal ? "" : styles.modal__info__none
        }`}
      >
        <ModalInfoOrders id={+isIdOrders} setModal={setModal} />
      </div>
      {isDeleteModal ? (
        <BootstrapDelete
          isDeleteModal={isDeleteModal}
          showModalDelete={showModalDelete}
          index={+isIdOrders}
          isIdDelete={isIdDelete}
        />
      ) : null}
      <div
        className={`${styles.modal__info} ${
          isAddOrderModal ? "" : styles.modal__info__none
        }`}
      >
        <AddOrderModal showAddOrderModal={showAddOrderModal} />
      </div>
    </div>
  );
};

export default BodyOrders;
