import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
const app = Enzyme.shallow(<App />);

// it('renders without crashing', () => {
//   shallow(<App />);
// });

describe('App',()=>{
  it('render correctly',()=>{
  
    expect(toJson(app)).toMatchSnapshot(); 
  });
  
  // it('renders welcome message', () => {
  //   expect(app.find('a').props().href).toBe('https://reactjs.org');
  // }); 
})
