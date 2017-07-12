import React from 'react';
import { shallow } from 'enzyme';

import MachineComponent from './../../components/appliances/MachineComponent';

import api from './../../utils/api';

import mockData from './../mockData';

const mock_appliancedata = mockData.applianceMachineData;

const modes = ["extra wash", "cold", "eco", "fast"];

describe('MachineComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MachineComponent 
                                appliance={mock_appliancedata} 
                                modes={modes}
                                onSave={jest.fn()} />);
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

    it('should set `modeState` and `mode` states\
         when `onChange` event is fired and `switchToggle` is true', () => {
        wrapper.setState({switchToggle: false});
        wrapper.instance().onChange("event", {checked: true});
        expect(
            wrapper.state().modeState
        ).toBe(true);
        expect(
            wrapper.state().mode
        ).toBe(modes[0]);
    });

    it('should clear `modeState` and `mode` states\
         when `onChange` event is fired and `switchToggle` is false', () => {
        wrapper.setState({switchToggle: true});
        wrapper.instance().onChange("event", {checked: false});
        expect(
            wrapper.state().modeState
        ).toBe(false);
        expect(
            wrapper.state().mode
        ).toBe("");
    });

    it('should change the `mode` state\
         when `onModeChange` event is fired', () => {
        wrapper.setState({mode: modes[2]});
        wrapper.instance().onModeChange("event", {value: modes[0]});
        expect(
            wrapper.state().mode
        ).toBe(modes[0]);
    });

    /*this.state.switchToggleInitial = true*/

    it('should update `isLoading` state when `onSave` event is fired', () => {
        wrapper.setState({isLoading: false, switchToggle: false});
        wrapper.instance().onSave();
        expect(
            wrapper.state().isLoading
        ).toBe(true);
    })
})  
