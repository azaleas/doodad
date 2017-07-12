import React from 'react';
import { shallow } from 'enzyme';

import MainComponent from './../../components/MainComponent';

describe('MainComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MainComponent />);
    });
    
    it('renders without crashing', () => {
        wrapper;
    });

    it('should have `.baseblock` element', () => {
        expect(
            wrapper.find(".baseblock").exists()
        ).toBe(true);
    })
})  
