import React from 'react';
import PropTypes from 'prop-types';

import CreateApplianceContainer from './../../containers/CreateApplianceContainer';

/*
    This component calls the CreateApplianceContainer
    with given props for home.
*/

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