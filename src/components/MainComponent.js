import React from 'react';
import PropTypes from 'prop-types';

import Link from 'react-router-dom/Link';

/*
    Main Screen. Will have Home And Rooms Link. 
*/

const MainComponent = (props) => {
    return (
        <div className="ui centered two column stackable grid container">
            <div className="column">
                <Link 
                    className="baseblock tac"
                    to="home">
                    <h1 className="baseblock--title">Home</h1>
                </Link>
            </div>
            <div className="column">
                <Link 
                    className="baseblock tac"
                    to="rooms">
                    <h1 className="baseblock--title">Rooms</h1>
                </Link>
            </div>
        </div> 
    );
};

MainComponent.propTypes = {
    className: PropTypes.string,
};

export default MainComponent;
