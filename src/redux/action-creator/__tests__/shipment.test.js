import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import { shipments } from "../shipment";

const initialState = {};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);
const mockResponse = {};

fetchMock.get('http://localhost:3000/shipments',mockResponse);
it('create an async action to fetch the shipment value',()=>{
    store.dispatch(shipments())
    // const expectedPayload = [{shipment:mockResponse.body}]
    // store.dispatch(setShipments()).then(()=>{
    //     expect(store.getActions()).toEqual(expectedPayload);
    // })
})