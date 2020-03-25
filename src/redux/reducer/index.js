import { combineReducers } from "redux";

import shipmentReducer from "./shipmentReducer";

const appReducer = combineReducers({
    shipment: shipmentReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
