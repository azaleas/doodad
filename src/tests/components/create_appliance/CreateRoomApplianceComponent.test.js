import React from 'react';
import { shallow } from 'enzyme';

import CreateRoomApplianceComponent from './../../../components/create_appliance/CreateRoomApplianceComponent';

describe('CreateRoomApplianceComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CreateRoomApplianceComponent 
                                title="Room"
                                roomId={1} />);
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
