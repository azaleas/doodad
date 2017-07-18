import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Redirect from 'react-router-dom/Redirect';

import api from './../utils/api';

import ApplianceComponent from './../components/ApplianceComponent';

/*
    This component fetches the home appliances from the API
    and uses "ApplianceComponent" to render the results.
*/

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
            from CreateApplianceContainer.
            Redirect updates bunch of 
            routing props(props.history, props.location etc)
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
