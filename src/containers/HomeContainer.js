import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Redirect from 'react-router-dom/Redirect';

import api from './../utils/api';

import ApplianceComponent from './../components/ApplianceComponent';

class HomeContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            dataUpdated: {},
            redirect: false,
        }
    }

    componentWillMount(){
        this.fetchAppliances();
    }

    componentWillReceiveProps(){
        /*
            Updates the list, once a new home appliance is created.
            It gets triggered once a redirect comes 
            from CreateHomeApplianceComponent.
        */
        this.fetchAppliances();
    }

    fetchAppliances(){
        api.fetchHomeAppliances()
            .then((response) => {
                if(typeof response !== "undefined"){
                    this.setState({
                        data: response,
                    });
                }
                else{
                    this.setState({
                        redirect: true,
                    })
                }
            })
    }

    onSave = (dataObject, applianceId) => {
        api.updateHomeAppliance(dataObject, applianceId)
            .then((response) => {
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
            (this.state.redirect)
            ?(
                <Redirect to="/" />
            )
            :(
                <div className="ui centered stackable grid container">
                <div className="row">
                    <h1 className="tac">Home</h1>
                </div>
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
                                    <div 
                                        key={index}
                                        className="eight wide computer five wide large screen five wide widescreen column">
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
                                        className="eight wide computer five wide large screen five wide widescreen column">
                                        <ApplianceComponent
                                            appliance={el}
                                            onSave={this.onSave} />
                                    </div>
                                )
                            }
                        })
                    )
                    :(<p></p>)
                }
                </div>
            )
        );
    }
}

HomeContainer.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
};

export default HomeContainer;
