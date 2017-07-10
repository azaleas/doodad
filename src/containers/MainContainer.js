import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from 'react-router-dom/Link';

import Header from './../components/Header';

class MainContainer extends Component {
    /*
        2 Separate components here: Home and Rooms ?
    */
    render() {
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
    }
}

MainContainer.propTypes = {
    className: PropTypes.string,
};

export default MainContainer;
