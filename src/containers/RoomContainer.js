import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from './../utils/api';
import AppliancesContainer from './AppliancesContainer';

class RoomContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            roomData: [],
            roomName: "",
            totalControls: 0,
        }
    }

    componentWillMount(){
        const roomId = this.props.match.params.roomId;
        api.fetchRoomData(roomId)
            .then((roomData) => {
                console.log(roomData);
                this.setState({
                    roomData,
                    roomName: roomData[0].roomInfo.name,
                    totalControls: roomData.length,
                });
            })
    }

    render() {
        console.log(this.props);
        return (
            <div className="room">
                <h1 className="room--title">{this.state.roomName}</h1>
                <p className="room--desc">Total controls: <span>{this.state.totalControls}</span></p>
                <AppliancesContainer data={this.state.roomData}/>
            </div>
        );
    }
}

RoomContainer.propTypes = {
    className: PropTypes.string,
};

export default RoomContainer;
