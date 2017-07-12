import React from 'react';
import { shallow } from 'enzyme';

import RoomsContainer from './../../containers/RoomsContainer';

describe('RoomsContainer', () => {
    let wrapper;

    let pathname = {
        pathname: '/rooms',
    }
    
    beforeEach(() => {
        wrapper = shallow(<RoomsContainer location={pathname} />);
    });
    
    it('renders without crashing', () => {
        wrapper;
    });
})  
