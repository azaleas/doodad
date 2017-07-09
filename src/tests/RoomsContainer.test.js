import React from 'react';
import { shallow } from 'enzyme';

import RoomsContainer from './../containers/RoomsContainer';

describe('RoomsContainer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RoomsContainer />);
    });
    
    it('renders without crashing', () => {
        wrapper;
    });
})  
