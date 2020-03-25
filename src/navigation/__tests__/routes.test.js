import React from 'react';
import { MemoryRouter } from 'react-router';
import { HomePage } from "../../containers/index";


import App from '../routes';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
const app = Enzyme.shallow(<App />);

describe('Route',()=>{
    it('render correctly',()=>{
    
      expect(toJson(app)).toMatchSnapshot(); 
    });
    
    it('invalid path should redirect to 404', () => {
        const wrapper = Enzyme.shallow(
          <MemoryRouter initialEntries={['/random']} initialIndex={0}>
            <App/>
          </MemoryRouter>
        );
          expect(wrapper.find(HomePage)).toHaveLength(0);
      
      });
  })
  