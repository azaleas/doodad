import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header, Progress, Button, Modal, Dropdown, Loader } from 'semantic-ui-react';

import ControlBaseComponent from './ControlBaseComponent';

class TemperatureComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            min: 16,
            max: 40,
            degreeSelect: "C",
            degreeSelectInitial: "C",
            temperature: 25,
            temperatureInitial: 25,
            isLoading: false,
            saving: false,
        }
    }

    componentDidMount(){
        this.setState({
            temperature: Number(this.props.appliance.data.value),
            temperatureInitial: Number(this.props.appliance.data.value),
            degreeSelect: this.props.appliance.data.degrees,
            degreeSelectInitial: this.props.appliance.data.degrees,
        });
        if(this.state.degreeSelect === "C"){
            this.setState({
                min: this.props.min[0],
                max: this.props.max[0],
            })
        }
        else{
            this.setState({
                min: this.props.min[1],
                max: this.props.max[1],
            })
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            isLoading: false,
            saving: false,
            temperatureInitial: this.state.temperature,
            degreeSelectInitial: this.state.degreeSelect,
        })
    }


    onTemperatureChange = (event) => {
        let temperature = event.target.value;
        if(temperature >= this.state.max){
            temperature = this.state.max;
        }
        else if(temperature <= this.state.min){
            temperature = this.state.min;
        }
        this.setState({
            temperature,
        })
    }

    onDegreeChange = (event, object) => {
        const degreeSelect = object.value;
        if(degreeSelect !== this.state.degreeSelect){
            let temperature = this.state.temperature;
            let min = this.state.min;
            let max = this.state.max;
            if(degreeSelect === "C"){
                temperature = ((temperature - 32) * (5/9)).toFixed();
                min = 16;
                max = 40;
            }
            else{
                temperature = (temperature * (9/5) + 32).toFixed();
                min = 61;
                max = 104;
            }
            this.setState({
                degreeSelect,
                temperature,
                min,
                max,
            });
        }
    }

    onSave = (event, object) => {
        if((this.state.temperature !== Number(this.state.temperatureInitial)) && 
            (this.state.degreeSelect !== this.state.degreeSelectInitial)){
            const data = Object.assign({}, this.props.appliance.data)
            data.value = this.state.temperature;
            data.degrees = this.state.degreeSelect;
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
                temperature: this.state.temperatureInitial,
                degreeSelect: this.state.degreeSelectInitial,
            });
        }
    }

    render() {
        const temperature = this.state.temperature;
        const temperatureProp = this.state.temperatureInitial;
        const degreeSelect = this.state.degreeSelect;
        const degreeSelectProp = this.state.degreeSelectInitial;
        return (
            <div className="column">
                <Modal 
                    trigger={
                        <div className="appliance">
                            <ControlBaseComponent 
                                title={this.props.appliance.name}
                                status={`${temperatureProp}° ${degreeSelectProp}`}/>
                        </div>
                    } 
                    size="small"
                    onClose={this.modalClose}
                    closeIcon='close'>
                    <Header 
                        icon='options' 
                        color='blue'
                        content={`${this.props.appliance.roomInfo.name} Setup`} />
                    <Modal.Content>
                        <div className="temperatureblock tac">
                            <h1 className="temperatureblock--title setup--title">{`Adjusting the ${this.props.appliance.name}`}</h1>
                            <div className="temperatureblock--input ui input">
                                <input 
                                type="number"
                                onChange={this.onTemperatureChange}
                                value={this.state.temperature}
                                min={this.state.min}
                                max={this.state.max} />
                            </div>
                            <div className="temperatureblock--select">
                                <Dropdown 
                                    selection 
                                    compact
                                    onChange={this.onDegreeChange}
                                    value={degreeSelect} 
                                    options={
                                        [
                                            {
                                                key: "C",
                                                value: "C",
                                                text: "C"
                                            },
                                            {
                                                key: "F",
                                                value: "F",
                                                text: "F"
                                            }
                                        ]
                                    } />
                            </div>
                            <div className="temperatureblock--save setup--save">
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

TemperatureComponent.propTypes = {
    className: PropTypes.string,
    appliance: PropTypes.object,
    onSave: PropTypes.func,
    min: PropTypes.array,
    max: PropTypes.array,
};

export default TemperatureComponent;
