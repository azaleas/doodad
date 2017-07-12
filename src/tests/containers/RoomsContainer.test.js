import React from 'react';
import { shallow, mount } from 'enzyme';

import RoomsContainer from './../../containers/RoomsContainer';

import api from './../../utils/api';

import mockData from './../mockData';

const mock_roomsdata = mockData.roomsData;

jest.mock('./../../utils/api', () => ({
    fetchRoomsData: jest.fn(() => Promise.resolve(mock_roomsdata)),
}));

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

    it('should redirect if `redirect` state property is true', () => {
        wrapper.setState({redirect: true});
        expect(
            wrapper.find('Redirect').exists()
        ).toBe(true);
    });
    
    it('should have `RoomsComponent` \
        when data is fetched and `redirect` state is false', () => {
        wrapper.setState({redirect: false});
        expect(
            wrapper.find('RoomsComponent').exists()
        ).toBe(true);
    });

    it('should receive rooms data from server \
        and update the `roomsData` state', ()=> {
        /*
            api fetching happens on componentDidMount, 
            for which enzyme mount has to be used. 
            Ignore warnings about Failed context type.
         */
        let wrapper = mount(<RoomsContainer location={pathname}/>);
        return api.fetchRoomsData()
                .then((response) => {
                    expect(response).toEqual(mock_roomsdata);
                    expect(
                        wrapper.state().roomsData
                    ).toEqual(mock_roomsdata);
                })
    });

})  
