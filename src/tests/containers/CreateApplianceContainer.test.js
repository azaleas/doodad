import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateApplianceContainer from './../../containers/CreateApplianceContainer';

import api from './../../utils/api';

import types from './../../utils/typesData';

import mockData from './../mockData';

const mock_homeappliance = mockData.homeApplianceCreateData;
const mock_roomappliance = mockData.roomApplianceCreateData;

jest.mock('./../../utils/api', () => ({
    createRoomAppliance: jest.fn(() => Promise.resolve(mock_roomappliance)),
    createHomeAppliance: jest.fn(() => Promise.resolve(mock_homeappliance)),
}));

describe('CreateApplianceContainer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CreateApplianceContainer 
                            roomId={1}
                            title="Room" />);
    });
    
    it('renders without crashing', () => {
        wrapper;
    });

     it('should redirect if `redirect` state property is true', () => {
        wrapper.setState({redirect: true});
        expect(
            wrapper.find('Redirect').exists()
        ).toBe(true);
    });

    it('should have `Modal` element', () => {
        wrapper.setState({redirect: false});
        expect(
            wrapper.find("Modal").exists()
        ).toBe(true);
    });

    it('should update `title` state when `onTitleChange` is fired', () => {
        wrapper.setState({title: "alan"});
        const event = {
            target: {
                value: "alana",
            }
        }
        wrapper.instance().onTitleChange(event);
        expect(
            wrapper.state().title
        ).toBe(event.target.value);
    });   

    it('should update `type` state when `onTypeChange` is fired', () => {
        wrapper.setState({type: "switch"});
        const obj = {
            value: "temperature",
        }
        wrapper.instance().onTypeChange("event", obj);
        expect(
            wrapper.state().type
        ).toBe(obj.value);
    });    

    it('should clear `subType` and `subTypeEnable` \
        states when `onTypeChange` is fired and \
        if type doesnt have subtype', () => {
        wrapper.setState({
            type: "temperature",
            subTypeEnable: true,
            subType: "habba habba",
            types: types,
        });
        const obj = {
            value: "switch",
        }
        wrapper.instance().onTypeChange("event", obj);
        expect(
            wrapper.state().subTypeEnable
        ).toBe(false);
        expect(
            wrapper.state().subType
        ).toBe("");
    });    

    it('should set `subType` and `subTypeEnable` \
        states when `onTypeChange` is fired and \
        if type does have subtype', () => {
        wrapper.setState({
            type: "switch",
            subTypeEnable: true,
            subType: "habba habba",
            types: types,
        });
        const obj = {
            value: "temperature",
        }
        wrapper.instance().onTypeChange("event", obj);
        expect(
            wrapper.state().subTypeEnable
        ).toBe(true);
        expect(
            wrapper.state().subType
        ).toBe(Object.keys(types[obj.value].subTypes)[0]);
    });    

    it('should set `subType` state\
         when `onSubTypeChange` is fired', () => {
        const obj = {
            value: "room",
        }
        wrapper.instance().onSubTypeChange("event", obj);
        expect(
            wrapper.state().subType
        ).toBe(obj.value);
    });   

    it('should clear states when `modalClose` event is fired', () => {
        let demoObj = {habba: "habba"};
        wrapper.setState({
            title: "habba habba", 
            subTypeEnable: true,
            type: "habba habba",
            types: types,
            subType: "habba habba",
            fieldErrors: demoObj,
        });
        wrapper.instance().modalClose();
        expect(
            wrapper.state().title
        ).toBe("");
        expect(
            wrapper.state().subTypeEnable
        ).toBe(false);
        expect(
            wrapper.state().type
        ).toBe(Object.keys(types)[0]);
        expect(
            wrapper.state().subType
        ).toBe("");
        expect(
            wrapper.state().fieldErrors
        ).toEqual({});
    }); 
})  
