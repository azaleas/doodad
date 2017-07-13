import React from 'react';
import { shallow } from 'enzyme';

import SwitchComponent from './../../../components/appliances/SwitchComponent';

import api from './../../../utils/api';

import mockData from './../../mockData';

const mock_appliancedata = mockData.applianceUpdateData;

describe('SwitchComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SwitchComponent appliance={mock_appliancedata} onSave={jest.fn()} />);
    });
    
    it('renders without crashing', () => {
        wrapper;
    });

    it('should have `Modal` element', () => {
        expect(
            wrapper.find("Modal").exists()
        ).toBe(true);
    });

    it('should update `switchToggle` state when `onChange` event is fired', () => {
        wrapper.setState({switchToggle: false});
        wrapper.instance().onChange("event", {checked: true});
        expect(
            wrapper.state().switchToggle
        ).toBe(true);
    });

    it('should update `switchToggle` state when `modalClose` event is fired', () => {
        wrapper.setState({
            switchToggleInitial: false, 
            saving: false
        });
        wrapper.instance().modalClose();
        expect(
            wrapper.state().switchToggle
        ).toBe(false);
    });

    /*
        this.props.appliance.data.value = false;
        this.props.onSave() is mocked.
    */

    it('should update `isLoading` state when `onSave` event is fired', () => {
        wrapper.setState({isLoading: false, switchToggle: true});
        wrapper.instance().onSave();
        expect(
            wrapper.state().isLoading
        ).toBe(true);
    })
})  
