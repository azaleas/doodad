import React from 'react';
import { shallow, mount } from 'enzyme';

import AppliancesContainer from './../../containers/AppliancesContainer';

import api from './../../utils/api';

import mockData from './../mockData';

const mock_appliancedata = mockData.roomApplianceData;
const mock_applianceupdate = mockData.applianceUpdateData;

jest.mock('./../../utils/api', () => ({
    updateAppliance: jest.fn(() => Promise.resolve(mock_applianceupdate)),
}));

describe('AppliancesContainer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AppliancesContainer data={mock_appliancedata} />);
    });
    
    it('renders without crashing', () => {
        wrapper;
    });

    it('should have `ApplianceComponent` \
        when data is fetched and `redirect` state is false', () => {
        wrapper.setState({redirect: false});
        expect(
            wrapper.find('ApplianceComponent').exists()
        ).toBe(true);
    });

    it('should receive updated data from server \
        after `onSave` is called and update the `dataUpdated` state', ()=> {
        wrapper.instance().onSave();
        return api.updateAppliance()
                .then((response) => {
                    expect(response).toEqual(mock_applianceupdate);
                    expect(
                        wrapper.state().dataUpdated
                    ).toEqual(mock_applianceupdate);
                })
    });
})  
