import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from './../utils/api';

import ApplianceComponent from './../components/ApplianceComponent';

class HomeContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            dataUpdated: {},
        }
    }

    componentWillMount(){
        api.fetchHomeAppliances()
            .then((response) => {
                this.setState({
                    data: response,
                });
            })
    }

    onSave = (dataObject, applianceId) => {
        api.updateHomeAppliance(dataObject, applianceId)
            .then((response) => {
                console.log(response);
                if(response.data){
                    this.setState({
                        dataUpdated: response,
                    })
                }
            })
    }

    render() {
        const data = this.state.data;
        return (
            <div className="ui centered three column stackable grid container">
                {
                    (data.length)
                    ? (
                        data.map((el, index) =>{
                            if(el.id == this.state.dataUpdated.id){
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
                                    <ApplianceComponent
                                        key={index}
                                        appliance={appliance}
                                        onSave={this.onSave} />
                                )
                            }
                            else{
                                return (
                                    <ApplianceComponent
                                        key={index}
                                        appliance={el}
                                        onSave={this.onSave} />
                                )
                            }
                        })
                    )
                    :(<p></p>)
                }
            </div>
        );
    }
}

HomeContainer.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
};

export default HomeContainer;
