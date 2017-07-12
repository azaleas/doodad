import React from 'react';
import { shallow } from 'enzyme';

import HomeContainer from './../../containers/HomeContainer';

import api from './../../utils/api';

// jest.mock('./../../utils/api');

const mock_data = [
  {
    "id": "1",
    "createdAt": 1499588798,
    "name": "Home Alarm",
    "data": {
      "type": "switch",
      "value": false
    }
  },
  {
    "id": "2",
    "createdAt": 1499588738,
    "name": "Swimming Pool Temperature",
    "data": {
      "type": "pool-temperature",
      "value": "93",
      "degrees": "F"
    }
  },
  {
    "id": "3",
    "createdAt": 1499588678,
    "name": "Swimming Pool Cover",
    "data": {
      "type": "switch",
      "value": false
    }
  }
];

const mock_updated_data = {
    "id": "1",
    "createdAt": 1499588798,
    "name": "Home Alarm",
    "data": {
        "type": "switch",
        "value": true
    }
};


jest.mock('./../../utils/api', () => ({
    fetchHomeAppliances: jest.fn(() => Promise.resolve(mock_data)),
    updateHomeAppliance: jest.fn(() => Promise.resolve(mock_updated_data))
}));

describe('HomeContainer', () => {
    
    let wrapper;

    let pathname = {
        pathname: '/home',
    };

    beforeEach(() => {
        wrapper = shallow(<HomeContainer location={pathname} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('renders without crashing', () => {
        wrapper;
    });

    it('should redirect if `redirect` state property is true', () => {
        wrapper.setState({redirect: true});
        expect(
            wrapper.find('Redirect').exists()
        ).toBe(true);
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
        return api.updateHomeAppliance()
                .then((response) => {
                    expect(response).toEqual(mock_updated_data);
                    expect(
                        wrapper.state().dataUpdated
                    ).toEqual(mock_updated_data);
                })
    });
});
