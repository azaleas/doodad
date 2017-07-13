import React from 'react';
import { shallow } from 'enzyme';

import TemperatureComponent from './../../../components/appliances/TemperatureComponent';

import api from './../../../utils/api';

import mockData from './../../mockData';

const mock_appliancedata = mockData.applianceTemperatureData;

describe('TemperatureComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TemperatureComponent appliance={mock_appliancedata} onSave={jest.fn()} />);
    });
    
    it('renders without crashing', () => {
        wrapper;
    });

    it('should have `Modal` element', () => {
        expect(
            wrapper.find("Modal").exists()
        ).toBe(true);
    });

    it('should update `temperature` state when `onTemperatureChange` event is fired', () => {
        wrapper.setState({temperature: 20});
        wrapper.instance().onTemperatureChange({target:{value: 25}});
        expect(
            wrapper.state().temperature
        ).toBe(25);
    });

    it('should keep `temperature` state <= `max` state\
        when `onTemperatureBlur` is fired', () => {
        wrapper.setState({max: 25});
        wrapper.instance().onTemperatureBlur({target:{value: 35}});
        expect(
            wrapper.state().temperature
        ).toBe(25);
    });

    it('should keep `temperature` state >= `min` state\
        when `onTemperatureBlur` is fired', () => {
        wrapper.setState({min: 25});
        wrapper.instance().onTemperatureBlur({target:{value: 15}});
        expect(
            wrapper.state().temperature
        ).toBe(25);
    });

    it('should update `temperature`, `degreeSelect`,\
        `min`, `max` states when `onDegreeChange` is fired', () => {
        wrapper.setState({
            degreeSelect: "C",
            min: 16,
            max: 40,
            temperature: 16   
        });
        wrapper.instance().onDegreeChange("event", {value: "F"});
        expect(
            wrapper.state().temperature
        ).toBe("61");
        expect(
            wrapper.state().min
        ).toBe(61);
        expect(
            wrapper.state().max
        ).toBe(104);
        expect(
            wrapper.state().degreeSelect
        ).toBe("F");
    });

    it('should update `isLoading` state when `onSave` event is fired', () => {
        wrapper.setState({isLoading: false, temperature: 20});
        wrapper.instance().onSave();
        expect(
            wrapper.state().isLoading
        ).toBe(true);
    })
})  
