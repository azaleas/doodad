import React from 'react';
import PropTypes from 'prop-types';

import CreateRoomContainer from './../containers/CreateRoomContainer';
import CreateHomeApplianceContainer from './../containers/CreateHomeApplianceContainer';
import HeaderTitleComponent from './HeaderTitleComponent';

const Header = (props) => {
    const pathname = window.location.pathname;
    if(pathname === "/" || pathname === "/home"){
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
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
