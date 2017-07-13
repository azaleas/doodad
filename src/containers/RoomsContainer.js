import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Redirect from 'react-router-dom/Redirect';

import api from './../utils/api';

import RoomsComponent from './../components/RoomsComponent';

/*
    This component fetches the rooms list from the API
    and uses "RoomsComponent" to render the results.
*/

class RoomsContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            roomsData: [],
            redirect: false,
        };
    }

    componentDidMount(){
        api.fetchRoomsData()
            .then((roomsData) => {
                if(typeof roomsData !== 'undefined'){
                    this.setState({
                        roomsData,
                    });
                }
                else{
                    this.setState({
                        redirect: true,
                    })
                }
            });
    }

    render() {
        return (
            (this.state.redirect)
            ?(
                <Redirect to="/" />
            )
            :(
                <RoomsComponent 
                    data={this.state.roomsData}
                    path={this.props.location.pathname}/>
            )
        );
    }
}

RoomsContainer.propTypes = {
    className: PropTypes.string,
};

export default RoomsContainer;
