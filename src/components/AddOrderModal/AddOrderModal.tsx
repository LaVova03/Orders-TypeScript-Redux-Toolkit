import { useState } from "react";
import styles from "./AddOrderModal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import postOrder from "../../requests/postOrder";

interface AddOrderModalProps {
  showAddOrderModal?: any;
  postOrder?: (data: any, dispatch: any) => void;
  isDate?: string;
  isTime?: string;
}

interface FormData {
  title: string;
  date: string;
  description: string;
}

const AddOrderModal: React.FC<AddOrderModalProps> = ({ showAddOrderModal }) => {
  const isDate = useSelector((state: RootState) => state.isPage.isDate);
  const isTime = useSelector((state: RootState) => state.isPage.isTime);

  const dispatch = useDispatch();

  const [isDataForm, setDataForm] = useState<FormData>({
    title: "",
    date: `${isDate} ${isTime}`,
    description: "",
  });

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const checkForm = Object.keys(isDataForm).every(
      (key) => isDataForm[key as keyof FormData].length !== 0
    );
    if (checkForm) {
      const formData = JSON.stringify(isDataForm);
      postOrder(formData, dispatch);
      showAddOrderModal(false);
      setDataForm((prev) => ({
        ...prev,
        title: "",
        description: "",
      }));
    } else{
      alert('Заполните все поля')
    }
  };

  return (
    <div className={styles.form_wrap}>
      <form onSubmit={submitForm}>
        <input
          placeholder="title"
          value={isDataForm.title || ""}
          onChange={(e) => {
            setDataForm((prev) => ({
              ...prev,
              title: e.target.value,
            }));
          }}
        />
        <input
          placeholder="description"
          value={isDataForm.description || ""}
          onChange={(e) => {
            setDataForm((prev) => ({
              ...prev,
              description: e.target.value,
            }));
          }}
        />
        <br />
        <div className={styles.wrap_subm_btn}>
          <Button
            type="button"
            className="btn btn-light"
            id={styles.form_submit_btn}
            onClick={() => showAddOrderModal(false)}
          >
            ОТМЕНИТЬ
          </Button>
          <Button
            type="submit"
            className="btn btn-light"
            id={styles.form_submit_btn}
          >
            СОЗДАТЬ
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddOrderModal;
