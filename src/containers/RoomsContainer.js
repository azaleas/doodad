import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from './../utils/api';

import RoomsComponent from './../components/RoomsComponent';

class RoomsContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            roomsData: [],
        };
    }

    componentDidMount(){
        api.fetchRoomsData()
            .then((roomsData) => {
                this.setState({
                    roomsData,
                });
            });
    }

    render() {
        return (
            <RoomsComponent 
                data={this.state.roomsData}
                path={this.props.location.pathname}/>
        );
    }
}

RoomsContainer.propTypes = {
    className: PropTypes.string,
};

export default RoomsContainer;
