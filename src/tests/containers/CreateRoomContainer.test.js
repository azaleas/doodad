import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateRoomContainer from './../../containers/CreateRoomContainer';

describe('CreateRoomContainer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CreateRoomContainer/>);
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

    it('should clear states when `modalClose` event is fired', () => {
        wrapper.setState({
            title: "habba habba", 
        });
        wrapper.instance().modalClose();
        expect(
            wrapper.state().title
        ).toBe("");
    }); 
})  
