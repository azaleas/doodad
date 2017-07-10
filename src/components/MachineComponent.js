import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Checkbox, Button, Dropdown, Modal, Loader } from 'semantic-ui-react';

import ControlBaseComponent from './ControlBaseComponent';
import ApplianceHeader from './ApplianceHeader';


/*Default component for Dishwasher and Washing Machine*/
class MachineComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            switchToggle: false,
            switchToggleInitial: false,
            isLoading: false,
            modeTypes: [],
            mode: "",
            modeInitial: "",
            modeState: false,
            saving: false,
        }
    }

    componentDidMount(){
        this.setState({
            switchToggle:this.props.appliance.data.value,
            switchToggleInitial:this.props.appliance.data.value,
            mode: this.props.appliance.data.mode,
            modeInitial: this.props.appliance.data.mode,
            modeTypes: this.props.modes,
        });
    }

    componentWillReceiveProps(){
        this.setState({
            isLoading: false,
            modeInitial: this.state.mode,
            switchToggleInitial: this.state.switchToggle,
            modeState: (this.state.switchToggle ? true : false)
        })
    }

    modalClose = (event, object) => {
        if(!this.state.saving){
            this.setState({
                mode: this.state.modeInitial,
                switchToggle: this.state.switchToggleInitial,
                modeState: (this.state.switchToggleInitial ? true : false)
            });
        }
    }

    onChange = (event, object) => {
        const switchToggle = object.checked;
        this.setState({
            switchToggle,
        });
        if(switchToggle){
            this.setState({
                modeState: true,
                mode: this.props.modes[0]
            })
        }
        else{
            this.setState({
                mode: "",
                modeState: false,
            })
        }
    }

    onModeChange = (event, object) => {
        const mode = object.value;
        this.setState({
            mode,
        })
    }

    onSave = (event, object) => {
        if(this.state.switchToggle !== this.state.switchToggleInitial){
            const data = Object.assign({}, this.props.appliance.data)
            data.value = this.state.switchToggle;
            data.mode = this.state.mode;
            this.props.onSave(data, this.props.appliance.id, this.props.appliance.roomId);
            this.setState({
                isLoading: true,
            })
        }
    }

    render() {
        const mode = this.state.mode;
        const modeProp = this.state.modeInitial;
        const switchToggle = this.state.switchToggle;
        const switchToggleProp = this.state.switchToggleInitial;
        const location = (typeof this.props.appliance.roomInfo === "undefined" ? "Home" : this.props.appliance.roomInfo.name);
        
        return (
            <div className="column">
                <Modal 
                    trigger={
                        <div className="appliance">
                            <ControlBaseComponent 
                                title={this.props.appliance.name}
                                status={switchToggleProp ? `On (${modeProp} mode)` : "Off"}/>
                        </div>
                    } 
                    size="small"
                    onClose={this.modalClose}
                    closeIcon='close'>
                    <ApplianceHeader location={location} />
                    <Modal.Content>
                        <div className="machineblock tac">
                            <h1 className="machineblock--title setup--title">{`Adjusting the ${this.props.appliance.name}`}</h1>
                            <p className="setup--info">*{`${this.props.appliance.name} can't change the mode once it's on. 
                                Turn it off, save the state and turn it on again to adjust the mode. `}</p>
                            <Checkbox
                                onChange={this.onChange}
                                defaultChecked={switchToggle}
                                toggle 
                                />
                            {
                                (this.state.modeState)
                                ? (
                                    <div className="machineblock--select">
                                        <br/>
                                        <Dropdown 
                                            selection 
                                            onChange={this.onModeChange}
                                            value={(!mode.length ? this.state.modeTypes[0] : mode)} 
                                            options={this.state.modeTypes.map((el) => {
                                                return (
                                                    {
                                                        key: el,
                                                        value: el,
                                                        text: el.toUpperCase()
                                                    }
                                                )    
                                            })} />
                                    </div>
                                )
                                : (
                                    <p></p>
                                )
                            }
                            <div className="machineblock--save setup--save">
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

MachineComponent.propTypes = {
    className: PropTypes.string,
    appliance: PropTypes.object,
    onSave: PropTypes.func,
};

export default MachineComponent;
