import React from 'react';
import PropTypes from 'prop-types';

import SwitchComponent from './SwitchComponent';
import RangeComponent from './RangeComponent';

const ApplianceComponent = (props) => {
    console.log(props.appliance);
    if(props.appliance.data.type === "switch"){
        return (
            <SwitchComponent appliance={props.appliance} />      
        )
    }
    else if(props.appliance.data.type === "range"){
        return (
            <RangeComponent appliance={props.appliance} />
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
};

export default ApplianceComponent;
