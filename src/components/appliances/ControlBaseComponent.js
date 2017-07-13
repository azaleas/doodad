import React from 'react';
import PropTypes from 'prop-types';

/*
    Base component for base appliances.
    It renders the title of the given appliance
    and the Current status.
*/

const ControlBaseComponent = (props) => {
    return (
        <div className="appliance-base">
            <h1 className="appliance-base--title tac">{props.title}</h1>
            <p className="appliance-base--status tac">Current Status: <span>{props.status}</span></p>
        </div>
    )
};

ControlBaseComponent.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
};

export default ControlBaseComponent;
