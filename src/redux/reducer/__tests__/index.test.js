import rootReducer from "../index";

const initialState = {
    getShipments: []
  };
describe('rootReducer',()=>{
    it('initialize the default state',() =>{
        expect(rootReducer({},{})).toEqual({shipment:initialState})
    })
})