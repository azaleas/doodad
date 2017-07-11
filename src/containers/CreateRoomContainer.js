import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Redirect from 'react-router-dom/Redirect';

import { Button, Modal } from 'semantic-ui-react';

import api from './../utils/api';

class CreateRoomContainer extends Component {

    constructor(props) {
        super(props);
        this.state={
            title: '',
            fieldErrors: {},
            roomId: 0,
            redirect: false,
        }
    }

    componentWillReceiveProps(){
        this.setState({
            redirect: false,
        })
    }

    onTitleChange = (event) => {
        this.setState({
            title: event.target.value  
        })
    }

    modalClose = () => {
        this.setState({
            title: '',
        })
    }

    formSubmit = (event) =>{

        event.preventDefault();

        const fieldErrors = this.validate(this.state.title);

        this.setState({
            fieldErrors,
        });
        
        if(Object.keys(fieldErrors).length >= 1) return;

        api.createRoom(this.state.title)
            .then((response) => {
                if(typeof response !== "undefined"){
                    this.setState({
                        roomId: response.id,
                        redirect: true,
                    })
                }
                else{
                    this.setState({
                        redirect: true,
                    })
                }
            })

    }

    validate = (title) => {
        const errors = {};
        if(!title || typeof(title) === "undefined"){
            errors.title = true;
        }
        return errors;
    }


    render() {
        return (
            (this.state.redirect)
            ?(
                <Redirect push to={`/rooms/${this.state.roomId}`} />
            )
            :(
                <div className="create-room">
                    <Modal 
                        trigger={
                            <div className="tac">
                                <br/>
                                <Button 
                                    color="green"
                                    inverted>
                                    New Room
                                </Button>
                            </div>
                        } 
                        onClose={this.modalClose}
                        size="small"
                        closeIcon='close'>
                        <Modal.Content>
                            <form 
                                onSubmit={this.formSubmit}
                                className="ui form">
                                <div className={"field " + 
                                    (this.state.fieldErrors.title ? "error" : "")}>
                                    <input 
                                        type="text"
                                        name="title"
                                        onChange={this.onTitleChange}
                                        value={this.state.title}
                                        placeholder="Room name"/>
                                </div>
                                <div className="tac">
                                    <input 
                                        type="submit" 
                                        className="ui button small green" 
                                        value="Submit"/>
                                </div>
                            </form>
                        </Modal.Content>
                    </Modal>
                </div>
            )
        );
    }
}

CreateRoomContainer.propTypes = {
    className: PropTypes.string,
};

export default CreateRoomContainer;
