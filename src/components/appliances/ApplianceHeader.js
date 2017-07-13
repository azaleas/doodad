import React from 'react';
import PropTypes from 'prop-types';

import { Header} from 'semantic-ui-react';

/*
    Header block, used as a header for the appliance update modal
*/

const ApplianceHeader = (props) => {
    return (
        <Header 
            icon='options' 
            color='blue'
            content={`${props.location} Setup`} />        
    );
};

ApplianceHeader.propTypes = {
    className: PropTypes.string,
};

export default ApplianceHeader;
