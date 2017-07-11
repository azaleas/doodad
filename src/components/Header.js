import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';

import CreateRoomContainer from './../containers/CreateRoomContainer';
import CreateHomeApplianceComponent from './../components/create_appliance/CreateHomeApplianceComponent';
import CreateRoomApplianceComponent from './../components/create_appliance/CreateRoomApplianceComponent';
import HeaderTitleComponent from './HeaderTitleComponent';

const Header = (props) => {
    const pathname = window.location.pathname;
    const roomsRegExp = /\/rooms\/(\d+)$/;
    if((pathname.match(/\/$/) !== null && pathname.match(/\/$/)[0])
        || (pathname.match(/\/home$/) && pathname.match(/\/home$/)[0]) 
        || (pathname.match(/\/rooms$/) !== null && pathname.match(/\/rooms$/)[0])){
        return (
            <header>
                <HeaderTitleComponent/>
                <div className="ui centered grid container addblock">
                    <Dropdown text='Add New' icon='add' labeled button className='icon green'>
                        <Dropdown.Menu>
                            <CreateHomeApplianceComponent/>
                            <CreateRoomContainer/>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </header>
        );
    }
    else if(pathname.match(roomsRegExp) !== null && pathname.match(roomsRegExp)[0]){
        return (
            <header>
                <HeaderTitleComponent/>
                <div className="ui centered grid container addblock">
                    <Dropdown text='Add New' icon='add' labeled button className='icon green'>
                        <Dropdown.Menu>
                            <CreateHomeApplianceComponent/>
                            <CreateRoomContainer/>
                            <CreateRoomApplianceComponent roomId={Number(pathname.match(roomsRegExp)[1])}/>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </header>
        );
    }
    else{
        return(
            <header>
                <HeaderTitleComponent/>
            </header>
        )
    }
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
