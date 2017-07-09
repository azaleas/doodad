import React, { Component } from 'react';
import PropTypes from 'prop-types';


import RoomsContainer from './RoomsContainer'

class MainContainer extends Component {
    /*
        2 Separate components here: Home and Rooms
    */
    render() {
        return (
           <div>
               <RoomsContainer/>
           </div> 
        );
    }
}

MainContainer.propTypes = {
    className: PropTypes.string,
};

export default MainContainer;
