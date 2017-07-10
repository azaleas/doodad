import React from 'react';
import PropTypes from 'prop-types';

import CreateRoomContainer from './../containers/CreateRoomContainer';

const Header = ({ className }) => {
    return (
        <header>
            <h1 className="app--title tac">- doodad -</h1>
            <p className="app--desc tac">Control Panel Demo</p>
            <CreateRoomContainer/>
        </header>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
