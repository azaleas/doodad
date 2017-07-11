import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Redirect from 'react-router-dom/Redirect';

import api from './../utils/api';
import AppliancesContainer from './AppliancesContainer';

class RoomContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            roomData: [],
            roomName: "",
            redirect: false,
            totalControls: 0,
        }
    }

    componentWillMount(){
        this.fetchRoomData();
    }

    componentWillReceiveProps(){
        this.fetchRoomData();
    }

    fetchRoomData(){
        const roomId = this.props.match.params.roomId;
        api.fetchRoomApplianceData(roomId)
            .then((roomData) => {
                if(typeof roomData !== "undefined"){
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
                }
                else{
                    this.setState({
                        redirect: true,
                    })
                }
            })
    }
    
    render() {
        return(
            (this.state.redirect)
            ?(
                <Redirect to="/rooms/" />
            )
            :(
                <div className="room">
                    <h1 className="room--name tac">{this.state.roomName}</h1>
                    <p className="room--desc tac">Total controls: <span>{this.state.totalControls}</span></p>
                    <AppliancesContainer data={this.state.roomData}/>
                </div>
            )
        )
    }
}

RoomContainer.propTypes = {
    className: PropTypes.string,
};

export default RoomContainer;
