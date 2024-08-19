import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { orders } from "../../data";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import mockServer from "../../mockServer";

import deleteDataId from "../../requests/deleteDataId";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface BootstrapProps {
  isIdDelete: string;
  index?: number;
  isDeleteModal?: boolean;
  showModalDelete?: (show: boolean) => void;
}

const Bootstrap: React.FC<BootstrapProps> = ({
  isDeleteModal,
  showModalDelete,
  index,
  isIdDelete,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const deleteOrder = async () => {
    try {
      await mockServer.emit(
        "message",
        "Order with ID " + isIdDelete + " has been deleted"
      );
      deleteDataId(isIdDelete, dispatch);
      if (showModalDelete) {
        showModalDelete(false);
      }
    } catch (error) {
      console.error("Error sending message to server:", error);
    }
  };

  return (
    <>
      <Modal
        show={isDeleteModal}
        onHide={() => {
          if (showModalDelete) {
            showModalDelete(false);
          }
        }}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {t("Вы уверены, что хотите удалить приход?")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isDeleteModal && index !== undefined && (
            <>
              <h4>{t(orders[index]?.title)}</h4>
              <br />
              <p>
                {t("Дата прихода")}: {orders[index]?.date}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              if (showModalDelete) {
                showModalDelete(false);
              }
            }}
          >
            {t("ОТМЕНИТЬ")}
          </Button>
          <Button variant="primary" onClick={deleteOrder}>
            {t("УДАЛИТЬ")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Bootstrap;
