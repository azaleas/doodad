import React from 'react';
import { shallow } from 'enzyme';

import CreateHomeApplianceComponent from './../../../components/create_appliance/CreateHomeApplianceComponent';

describe('CreateHomeApplianceComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CreateHomeApplianceComponent title="Home" />);
    });
    
    it('renders without crashing', () => {
        wrapper;
    });

    it('should have `CreateApplianceContainer` element', () => {
        expect(
            wrapper.find("CreateApplianceContainer").exists()
        ).toBe(true);
    });

})  
