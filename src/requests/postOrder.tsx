import axios from "axios";
import getData from "./getData";
import { Dispatch } from "redux";

const postOrder = async (formData: string, dispatch: Dispatch) => {
  //не передаю форму, так как mock api не принимает данные, а генерирует по настройкам автоматически,
  //создал для эмитации работы с формами и сервером
  try {
    const response = await axios.post(
      "https://64980a639543ce0f49e198cf.mockapi.io/Products"
    );
    if (response.data) {
      getData(dispatch);
    }
  } catch (error) {
    console.log("postOrder error:", error);
  }
};

export default postOrder;
