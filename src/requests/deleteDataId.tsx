import axios from "axios";
import getData from "./getData";
import { Dispatch } from "redux";

const deleteDataId = async (isIdDelete: string, dispatch: Dispatch) => {
  try {
    const response = await axios.delete(
      `https://64980a639543ce0f49e198cf.mockapi.io/Products/${isIdDelete}`
    );
    if (response.data) {
      getData(dispatch);
    }
  } catch (error) {
    console.log("deleteDataId error:", error);
  }
};

export default deleteDataId;
