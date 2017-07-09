import React from 'react';
import PropTypes from 'prop-types';
import ControlBaseComponent from './ControlBaseComponent';

const RangeComponent = (props) => {
    return (
        <div className="column">
            <div className="appliance">
                <ControlBaseComponent title={props.appliance.name}/>
            </div>
        </div>
    )
};

RangeComponent.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
};

export default RangeComponent;
