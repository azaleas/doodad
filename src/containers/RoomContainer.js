import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoomContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="room">
                <h1 className="room--name">{this.props.name}</h1>
            </div>
        );
    }
}

RoomContainer.propTypes = {
    className: PropTypes.string,
};

export default RoomContainer;
