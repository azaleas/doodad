import React from 'react';
import PropTypes from 'prop-types';

import CreateApplianceContainer from './../../containers/CreateApplianceContainer';

const CreateHomeApplianceComponent = (props) => {
    return (
        <CreateApplianceContainer 
            title="Home"/>
    );
};

CreateHomeApplianceComponent.propTypes = {
    className: PropTypes.string,
};

export default CreateHomeApplianceComponent;