import React from 'react';
import { MemoryRouter } from 'react-router';
import NotFoundPage from "../invalid";
 
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
const page = Enzyme.shallow(<NotFoundPage />);

describe('Not Found Page',()=>{
    it('render correctly',()=>{
      expect(toJson(page)).toMatchSnapshot(); 
    });
     
})