import React from 'react';
import PropTypes from 'prop-types';

import SwitchComponent from './SwitchComponent';
import RangeComponent from './RangeComponent';
import TemperatureComponent from './TemperatureComponent';

const ApplianceComponent = (props) => {
    console.log(props.appliance);
    if(props.appliance.data.type === "switch"){
        return (
            <SwitchComponent 
                appliance={props.appliance}
                onSave={props.onSave} />      
        )
    }
    else if(props.appliance.data.type === "range"){
        return (
            <RangeComponent 
                appliance={props.appliance}
                onSave={props.onSave} />
        )
    }
    else if(props.appliance.data.type === "temperature"){
        return (
            <TemperatureComponent 
                appliance={props.appliance}
                onSave={props.onSave} />
        )
    }
    else{
        return (
            <div>Hello</div>
        )
    }
};

ApplianceComponent.propTypes = {
    className: PropTypes.string,
    appliance: PropTypes.object,
    onSave: PropTypes.func,
};

export default ApplianceComponent;
