import { GET_SHIPMENTS } from "../../types/index";
import shipmentReducer from "../shipmentReducer";
const shipmentData  = {sd:'sipment details'}
const initialState = {
    getShipments: [],
  };

describe('Shipment Reducer',()=>{
    
    it('returns the initial state', () => {
        expect(shipmentReducer(undefined, {})).toEqual(initialState);
      });

    it('fetch and set the shipment data',()=>{
        expect(shipmentReducer(undefined, {type:GET_SHIPMENTS,payload:shipmentData}))
            .toEqual({...initialState,getShipments: shipmentData});
    })
})