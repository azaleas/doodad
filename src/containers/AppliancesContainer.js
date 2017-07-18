import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from './../utils/api';

import ApplianceComponent from './../components/ApplianceComponent';

/*
    This component gets the data as props
    and uses "ApplianceComponent" to render the results.
    It's also responsible to update the appliance data.
*/

class AppliancesContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dataUpdated: {},
        }
    }

    onSave = (dataObject, applianceId, roomId) => {
        api.updateAppliance(dataObject, applianceId, roomId)
            .then((response) => {
                if(response.data){
                    this.setState({
                        dataUpdated: response,
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
                        /*
                        
                        !!!Note: This if statement is not needed
                        because the props are only 
                        used when the appliance is mounted.

                        if(el.id == this.state.dataUpdated.id){
                            const appliance = this.state.dataUpdated;
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
                        
                        */
                        return(
                            <div 
                                key={index}
                                className="eight wide computer five wide large screen five wide widescreen column">
                                <ApplianceComponent
                                    appliance={el}
                                    onSave={this.onSave} />
                            </div>
                        )
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
