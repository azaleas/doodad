import React from 'react';
import { shallow } from 'enzyme';

import App from './../../containers/App';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('renders without crashing', () => {
        wrapper;
    });

    it('should have `Header` Component', () => {
        expect(
            wrapper.find('Header').exists()
        ).toBe(true);
    });
});
