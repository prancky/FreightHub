import { fetchShipments } from "../api/shipment";
import { setShipments } from "../actions/shipmentAction";

export const shipments = () => dispatch => {
  fetchShipments().then(response => response.json())
  .then(response => {
    dispatch(setShipments(response));
  })
  .catch(e => {
    console.log('server error', e);
  });

};