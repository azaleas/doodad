import React from 'react';
import { shallow, mount } from 'enzyme';

import RoomContainer from './../../containers/RoomContainer';

import api from './../../utils/api';

import mockData from './../mockData';

const mock_roomdata = mockData.roomApplianceData;

jest.mock('./../../utils/api', () => ({
    fetchRoomApplianceData: jest.fn(() => Promise.resolve(mock_roomdata)),
}));

describe('RoomContainer', () => {
    let wrapper;

    let match = {
        params: {
            roomId: 1,
        }
    }
   
    beforeEach(() => {
        wrapper = shallow(<RoomContainer match={match} />);
    });
    
    it('renders without crashing', () => {
        wrapper;
    });

    it('should redirect if `redirect` state property is true', () => {
        wrapper.setState({redirect: true});
        expect(
            wrapper.find('Redirect').exists()
        ).toBe(true);
    });

    it('should have `AppliancesContainer` element', () => {
        expect(
            wrapper.find('AppliancesContainer').exists()
        ).toBe(true);
    });
})  
