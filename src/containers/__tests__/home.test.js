import React from 'react';
// import { render } from '@testing-library/react';
import Home from '../home';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
// const home = Enzyme.shallow(<Home />);

// it('renders without crashing', () => {
//   shallow(<App />);
// });

describe('Home Page',()=>{
  
  
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Home />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render correctly',()=>{
    expect(toJson(wrapper)).toMatchSnapshot(); 
  });

})
