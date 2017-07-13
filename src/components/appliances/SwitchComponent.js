import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Checkbox, Button, Modal, Loader } from 'semantic-ui-react';

import ControlBaseComponent from './ControlBaseComponent';
import ApplianceHeader from './ApplianceHeader';

/*
    Base switch component. Can be used for
    on/off, open/closed, enable/disable functionality.
*/

class SwitchComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            switchToggle: false,
            switchToggleInitial: false,
            isLoading: false,
        }
    }

    componentDidMount(){
        this.setState({
            switchToggle:this.props.appliance.data.value,
            switchToggleInitial:this.props.appliance.data.value,
        });
    }

    componentWillReceiveProps(){
        this.setState({
            isLoading: false,
            switchToggleInitial: this.state.switchToggle,
        })
    }

    onChange = (event, object) => {
        const switchToggle = object.checked;
        this.setState({
            switchToggle,
        });
    }

    modalClose = (event, object) => {
        if(!this.state.saving){
            this.setState({
                switchToggle: this.state.switchToggleInitial,
            });
        }
    }

    onSave = (event, object) => {
        if(this.state.switchToggle !== this.state.switchToggleInitial){
            const data = Object.assign({}, this.props.appliance.data)
            data.value = this.state.switchToggle;
            this.props.onSave(data, this.props.appliance.id, this.props.appliance.roomId);
            this.setState({
                isLoading: true,
            })
        }
    }

    render() {
        const switchToggle = this.state.switchToggle;
        const switchToggleProp = this.state.switchToggleInitial;
        const location = (typeof this.props.appliance.roomInfo === "undefined" ? "Home" : this.props.appliance.roomInfo.name)
        return (
            <Modal 
                trigger={
                    <div className="appliance">
                        <ControlBaseComponent 
                            title={this.props.appliance.name}
                            status={switchToggleProp ? "On (Open)" : "Off (Closed)"}/>
                    </div>
                } 
                onClose={this.modalClose}
                size="small"
                closeIcon='close'>
                <ApplianceHeader location={location} />
                <Modal.Content>
                    <div className="switchblock tac">
                        <h1 className="switchblock--title setup--title">{`Adjusting the ${this.props.appliance.name}`}</h1>
                        <p className="setup--info">* On (Open) / Off (Closed)</p>
                        <Checkbox
                            onChange={this.onChange}
                            defaultChecked={switchToggle}
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
        )
    }
};

SwitchComponent.propTypes = {
    className: PropTypes.string,
    appliance: PropTypes.object,
    onSave: PropTypes.func,
};

export default SwitchComponent;
