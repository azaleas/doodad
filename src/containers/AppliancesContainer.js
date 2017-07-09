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
                console.log(response);
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
            <div className="ui centered three column stackable grid container">
                {
                    data.map((el, index) =>{
                        if(el.id == this.state.data.id){
                            /*Update the appliance with put request response*/
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
