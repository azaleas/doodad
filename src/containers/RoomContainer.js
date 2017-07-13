import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Redirect from 'react-router-dom/Redirect';

import api from './../utils/api';
import AppliancesContainer from './AppliancesContainer';

/*
    This component fetches the room appliances from the API
    and uses "ApplianceComponent" to render the results.
*/

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
        this.fetchRoomData(this.props.match.params.roomId);
    }

    componentWillReceiveProps(){
        /*
            CreateRoomContainer redirects to the newly
            created room. React Router changes the browser url.
            To update the Room content, pathname is retrieved and 
            new roomId is extracted. 
            This roomId is used to fetch the data from the API about 
            the newly created room.
        */
        const pathname = window.location.pathname;
        const roomsRegExp = /\/rooms\/(\d+)$/;
        const roomId = pathname.match(roomsRegExp)[1];
        if(roomId){
            this.fetchRoomData(roomId);
        }
    }

    fetchRoomData(roomId){
        /*
            Server sends appliance data with roomInfo, which contains
            the room name. 
            If the given room doesn't have any appliances,
            roomData is fetched from the server to get the Room Name.
            Room name can also be passed from a parent component, but 
            if user comes directly to "rooms/:roomId", Room name won't be
            passed from a parent component(because the fetching doesnt happen).

            That's why, the roomData fetching is added below.
        */
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
