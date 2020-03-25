// Metrial UI Methodology way for tdd 
import { createShallow } from '@material-ui/core/test-utils';

import React from 'react';
import Detail from "../detail";
 

describe('<Detail />', () => {
    let shallow;

    beforeAll(() => { 
      shallow = createShallow();
    });
  
    it('should work', () => {
      const wrapper = shallow(<Detail />);
    });
    
});