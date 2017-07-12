import React from 'react';
import { shallow } from 'enzyme';

import ApplianceComponent from './../../components/ApplianceComponent';

import api from './../../utils/api';

import mockData from './../mockData';

const mock_appliancedata = mockData.applianceUpdateData;


describe('ApplianceComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ApplianceComponent appliance={mock_appliancedata} />);
    });
    
    it('renders without crashing', () => {
        wrapper;
    });

    /*props.appliance.data.type === "switch"*/

    it('should have `SwitchComponent`', () => {
        expect(
            wrapper.find('SwitchComponent').exists()
        ).toBe(true);
    });
})  
