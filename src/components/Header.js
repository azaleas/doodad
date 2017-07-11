import React from 'react';
import PropTypes from 'prop-types';

import CreateRoomContainer from './../containers/CreateRoomContainer';
import CreateHomeApplianceContainer from './../containers/CreateHomeApplianceContainer';
import CreateRoomApplianceContainer from './../containers/CreateRoomApplianceContainer';
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
                <div className="ui centered two column stackable grid container">
                    <CreateHomeApplianceContainer/>
                    <CreateRoomContainer/>
                </div>
            </header>
        );
    }
    else if(pathname.match(roomsRegExp) !== null && pathname.match(roomsRegExp)[0]){
        return (
            <header>
                <HeaderTitleComponent/>
                <div className="ui centered two column stackable grid container">
                    <CreateHomeApplianceContainer/>
                    <CreateRoomContainer/>
                    <CreateRoomApplianceContainer roomId={Number(pathname.match(roomsRegExp)[1])}/>
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
