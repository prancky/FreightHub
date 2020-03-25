import { API } from './configs';
  
  export const fetchShipments = () => {
    
    return fetch(API.END_POINT, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });
  };