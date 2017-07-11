import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from './../utils/api';

import ApplianceComponent from './../components/ApplianceComponent';

class AppliancesContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }

    onSave = (dataObject, applianceId, roomId) => {
        api.updateAppliance(dataObject, applianceId, roomId)
            .then((response) => {
                if(response.data){
                    this.setState({
                        data: response,
                    })
                }
            })
    }

    render() {
        const data = this.props.data;
        return (
            <div className="ui centered stackable grid container">
                {
                    data.map((el, index) =>{
                        if(el.id == this.state.data.id){
                            /*Update the appliance with put request response.
                              !!!Important note: Given that the update is 
                                    happening on object element, components should use initial props
                                    to update the status of the component.
                                    Example from RangeComponent:

                                    componentWillReceiveProps(nextProps){
                                        this.setState({
                                            isLoading: false,
                                            saving: false,
                                            rangeValue: this.state.percent,
                                        })
                                    }

                                    Here, rangeValue can't be updated with newly received props, 
                                    because below, we are only updating one element of the object.
                                    Thus, in props we will have the initially received data from the server.

                            */
                            const appliance = Object.assign({}, el, this.state.data);
                            return (
                                <div 
                                    key={index}
                                    className="sixteen wide mobile eight wide tablet eight wide computer five wide large screen column">
                                    <ApplianceComponent
                                        appliance={appliance}
                                        onSave={this.onSave} />
                                </div>
                            )
                        }
                        else{
                            return (
                                <div 
                                    key={index}
                                    className="sixteen wide mobile eight wide tablet eight wide computer five wide large screen column">
                                    <ApplianceComponent
                                        key={index}
                                        appliance={el}
                                        onSave={this.onSave} />
                                </div>
                            )
                        }
                    })
                }
            </div>
        );
    }
}

AppliancesContainer.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
};

export default AppliancesContainer;
