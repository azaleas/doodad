import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CreateApplianceContainer from './../../containers/CreateApplianceContainer';

const CreateHomeApplianceContainer = (props) => {
    return (
        <CreateApplianceContainer 
            title="Home"/>
    );
};

CreateHomeApplianceContainer.propTypes = {
    className: PropTypes.string,
};

export default CreateHomeApplianceContainer;