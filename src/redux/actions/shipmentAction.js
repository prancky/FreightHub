import { GET_SHIPMENTS } from "../types/index";

export const setShipments = payload => dispatch => {
    dispatch({ type: GET_SHIPMENTS, payload });
};
  