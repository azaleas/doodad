import React from 'react';
import PropTypes from 'prop-types';

import CreateApplianceContainer from './../../containers/CreateApplianceContainer';

const CreateRoomApplianceComponent = (props) => {
    return (
        <CreateApplianceContainer
            title="Room"
            roomId={props.roomId} />
    );
};

CreateRoomApplianceComponent.propTypes = {
    className: PropTypes.string,
    roomId: PropTypes.number,
};

export default CreateRoomApplianceComponent;
