import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Progress, Button, Modal, Loader } from 'semantic-ui-react';

import ControlBaseComponent from './ControlBaseComponent';
import ApplianceHeader from './ApplianceHeader';

class RangeComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            percent: 0,
            rangeValue: 0,
            isLoading: false,
            saving: false,
        }
    }

    componentDidMount(){
        this.setState({
            percent: Number(this.props.appliance.data.value),
            rangeValue: Number(this.props.appliance.data.value),
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            isLoading: false,
            saving: false,
            rangeValue: this.state.percent,
        })
    }

    onDecrement = () => {
        this.setState({
            percent: this.state.percent <= 0 ? 0 : this.state.percent - 10,
        });
    }

    onIncrement = () => {
        this.setState({
            percent: this.state.percent >= 100 ? 100 : this.state.percent + 10,
        });
    }

    onSave = (event, object) => {
        if(this.state.percent !== this.state.rangeValue){
            const data = Object.assign({}, this.props.appliance.data)
            data.value = this.state.percent;
            this.props.onSave(data, this.props.appliance.id, this.props.appliance.roomId);
            this.setState({
                isLoading: true,
                saving: true,
            })
        }
    }

    modalClose = (event, object) => {
        if(!this.state.saving){
            this.setState({
                percent: this.state.rangeValue,
            });
        }
    }

    render() {
        const rangeValue = this.state.rangeValue;
        const location = (typeof this.props.appliance.roomInfo === "undefined" ? "Home" : this.props.appliance.roomInfo.name);
        
        return (
            <Modal 
                trigger={
                    <div className="appliance">
                        <ControlBaseComponent 
                            title={this.props.appliance.name}
                            status={(rangeValue === 0 ? "Closed" : `${rangeValue}% Open`)}/>
                    </div>
                } 
                size="small"
                onClose={this.modalClose}
                closeIcon='close'>
                <ApplianceHeader location={location} />
                <Modal.Content>
                    <div className="rangeblock tac">
                        <h1 className="rangeblock--title setup--title">{`Adjusting the ${this.props.appliance.name}`}</h1>
                        <Progress percent={this.state.percent} indicating progress />
                        <Button 
                            color="red" 
                            inverted 
                            onClick={this.onDecrement}>-</Button>
                        <Button 
                            color="green" 
                            inverted 
                            onClick={this.onIncrement}>+</Button>
                        <div className="rangeblock--save setup--save">
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

RangeComponent.propTypes = {
    className: PropTypes.string,
    appliance: PropTypes.object,
    onSave: PropTypes.func,
};

export default RangeComponent;
