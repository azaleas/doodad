import React from 'react';
import { shallow } from 'enzyme';

import RangeComponent from './../../../components/appliances/RangeComponent';

import api from './../../../utils/api';

import mockData from './../../mockData';

const mock_appliancedata = mockData.applianceRangeData;

describe('RangeComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RangeComponent appliance={mock_appliancedata} onSave={jest.fn()} />);
    });
    
    it('renders without crashing', () => {
        wrapper;
    });

    it('should have `Modal` element', () => {
        expect(
            wrapper.find("Modal").exists()
        ).toBe(true);
    });

    it('should increment `percent` state by 10 \
         when `onIncrement` event is fired', () => {
        wrapper.setState({percent: 20});
        wrapper.instance().onIncrement();
        expect(
            wrapper.state().percent
        ).toBe(30);
    });

    it('should keep `percent` state at 100 \
         when `onIncrement` event is fired and \
         stat is >=100', () => {
        wrapper.setState({percent: 100});
        wrapper.instance().onIncrement();
        expect(
            wrapper.state().percent
        ).toBe(100);
    });

    it('should decrement `percent` state by 10 \
         when `onDecrement` event is fired', () => {
        wrapper.setState({percent: 20});
        wrapper.instance().onDecrement();
        expect(
            wrapper.state().percent
        ).toBe(10);
    });

    it('should keep `percent` state at 0 \
         when `onIncrement` event is fired and \
         stat is <=0', () => {
        wrapper.setState({percent: 0});
        wrapper.instance().onDecrement();
        expect(
            wrapper.state().percent
        ).toBe(0);
    });

    it('should update `percent` state with `rangeValue` state\
         when `modalClose` event is fired', () => {
        wrapper.setState({percent: 20, rangeValue: 40, saving: false});
        wrapper.instance().modalClose();
        expect(
            wrapper.state().percent
        ).toBe(40);
    });

    it('should update `isLoading` state when `onSave` event is fired', () => {
        wrapper.setState({isLoading: false, percent: 10});
        wrapper.instance().onSave();
        expect(
            wrapper.state().isLoading
        ).toBe(true);
    })
})  
