import { setOrders } from "../features/ChangePage";
import axios from "axios";
import { Dispatch } from "redux";

const getData = async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(
      "https://64980a639543ce0f49e198cf.mockapi.io/Products"
    );
    if (response.data) {
      dispatch(setOrders(response.data));
    }
  } catch (error) {
    console.log("getData error:", error);
  }
};

export default getData;
