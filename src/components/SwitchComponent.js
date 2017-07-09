import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header, Checkbox, Button, Modal, Loader } from 'semantic-ui-react'

import ControlBaseComponent from './ControlBaseComponent';

class SwitchComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            switchToggle: false,
            isLoading: false,
        }
    }

    componentDidMount(){
        this.setState({
            switchToggle:this.props.appliance.data.value,
        });
    }

    componentWillReceiveProps(){
        this.setState({
            isLoading: false,
        })
    }

    onChange = (event, object) => {
        const switchToggle = object.checked;
        this.setState({
            switchToggle,
        });
    }

    onSave = (event, object) => {
        if(this.state.switchToggle !== this.props.appliance.data.value){
            const data = Object.assign({}, this.props.appliance.data)
            data.value = this.state.switchToggle;
            this.props.onSave(data, this.props.appliance.id, this.props.appliance.roomId);
            this.setState({
                isLoading: true,
            })
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="column">
                <Modal 
                    trigger={
                        <div className="appliance">
                            <ControlBaseComponent 
                                title={this.props.appliance.name}
                                status={this.props.appliance.data.value ? "On" : "Off"}/>
                        </div>
                    } 
                    size="small"
                    closeIcon='close'>
                    <Header 
                        icon='options' 
                        color='blue'
                        content={`${this.props.appliance.roomInfo.name} Setup`} />
                    <Modal.Content>
                        <div className="switchblock tac">
                            <h1 className="switchblock--title setup--title">{`Adjusting the ${this.props.appliance.name}`}</h1>
                            <Checkbox
                                onChange={this.onChange}
                                defaultChecked={this.props.appliance.data.value}
                                toggle 
                                />
                            <div className="switchblock--save setup--save">
                                <Button 
                                    onClick={this.onSave}
                                    color="blue"
                                    inverted>
                                    Save
                                </Button>
                            </div>
                            {
                                (this.state.isLoading)
                                ? (
                                    <div className="setup--loading">
                                        <Loader inline="centered">Loading...</Loader>
                                    </div>
                                )
                                :(
                                    <p></p>
                                )
                            }
                        </div>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
};

SwitchComponent.propTypes = {
    className: PropTypes.string,
    appliance: PropTypes.object,
    onSave: PropTypes.func,
};

export default SwitchComponent;
