import React from 'react';
import PropTypes from 'prop-types';

import SwitchComponent from './appliances/SwitchComponent';
import MachineComponent from './appliances/MachineComponent';
import RangeComponent from './appliances/RangeComponent';
import TemperatureComponent from './appliances/TemperatureComponent';

/*
    This component acts as a switch, that chooses which base 
    appliance component needs to be rendered, depending on 
    received data/appliance type.
    It also connects the parent component that sends 
    the PUT request to update the data, and the base appliance
    component that creates the data object (with updated values), 
    that needs to be sended to the API.
*/

const ApplianceComponent = (props) => {
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
    else if(props.appliance.data.type === "room-temperature"){
        return (
            <TemperatureComponent 
                appliance={props.appliance}
                onSave={props.onSave}
                min={[16, 61]}
                max={[40, 104]} />
        )
    }
    else if(props.appliance.data.type === "water-temperature"){
        return (
            <TemperatureComponent 
                appliance={props.appliance}
                onSave={props.onSave}
                min={[10, 50]}
                max={[95, 203]} />
        )
    }
    else if(props.appliance.data.type === "washingmachine-switch"){
        return (
            <MachineComponent 
                appliance={props.appliance}
                onSave={props.onSave}
                modes={["delicate", "cotton", "eco", "fast 30"]} />
        )
    }
    else if(props.appliance.data.type === "dishwasher-switch"){
        return (
            <MachineComponent 
                appliance={props.appliance}
                onSave={props.onSave}
                modes={["extra wash", "cold", "eco", "fast"]} />
        )
    }
    else if(props.appliance.data.type === "pool-temperature"){
        return (
            <TemperatureComponent 
                appliance={props.appliance}
                onSave={props.onSave}
                min={[20, 68]}
                max={[35, 95]} />
        )
    }
    else{
        return (
            <div>This Component needs to be created!</div>
        )
    }
};

ApplianceComponent.propTypes = {
    className: PropTypes.string,
    appliance: PropTypes.object,
    onSave: PropTypes.func,
};

export default ApplianceComponent;
