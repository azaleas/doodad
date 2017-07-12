import React from 'react';
import { shallow } from 'enzyme';

import RoomsComponent from './../../components/RoomsComponent';

import api from './../../utils/api';

import mockData from './../mockData';

const mock_roomsdata = mockData.roomsData;


describe('RoomsComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RoomsComponent data={mock_roomsdata} />);
    });
    
    it('renders without crashing', () => {
        wrapper;
    });

    it('should have `rooms` element', () => {
        expect(
            wrapper.find('.rooms').exists()
        ).toBe(true);
        expect(
            wrapper.find('.rooms').length
        ).toBe(mock_roomsdata.length);
    })
})  
