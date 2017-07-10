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
        api.fetchRoomApplianceData(roomId)
            .then((roomData) => {
                if(roomData.length){
                    this.setState({
                        roomData,
                        roomName: roomData[0].roomInfo.name,
                        totalControls: roomData.length,
                    });
                }
                else{
                    api.fetchRoomData(roomId)
                        .then((response) => {
                            this.setState({
                                roomData,
                                roomName: response.name,
                                totalControls: roomData.length,
                            });
                        })
                }
            })
    }

    render() {
        console.log(this.props);
        return (
            <div className="room">
                <h1 className="room--name tac">{this.state.roomName}</h1>
                <p className="room--desc tac">Total controls: <span>{this.state.totalControls}</span></p>
                <AppliancesContainer data={this.state.roomData}/>
            </div>
        );
    }
}

RoomContainer.propTypes = {
    className: PropTypes.string,
};

export default RoomContainer;
