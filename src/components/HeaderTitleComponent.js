import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';

import { Dropdown, Menu } from 'semantic-ui-react'


const HeaderTitleComponent = (props) => {
    return (
        <div className="ui container">
            <Menu attached='top'>
                <Dropdown item icon='home' simple>
                    <Dropdown.Menu>
                        <Link to="/">
                            <Dropdown.Item className="tac">
                                Main
                            </Dropdown.Item>
                        </Link>
                        <Link to="/home">
                            <Dropdown.Item className="tac">
                                Home
                            </Dropdown.Item>
                        </Link>
                        <Link to="/rooms">
                            <Dropdown.Item className="tac">
                                Rooms
                            </Dropdown.Item>
                        </Link>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Menu position='right'>
                    <div className='ui right aligned category item'>
                        <div className='ui transparent icon input'>
                            <h1 className="app--title">doodad / <span className="app--desc">Control Panel Demo</span></h1>
                        </div>
                    </div>
                </Menu.Menu>
            </Menu>
            <br/>
        </div>
    );
};

HeaderTitleComponent.propTypes = {
    className: PropTypes.string,
};

export default HeaderTitleComponent;
