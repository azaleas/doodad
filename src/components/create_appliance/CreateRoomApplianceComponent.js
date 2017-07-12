import React from 'react';
import PropTypes from 'prop-types';

import CreateApplianceContainer from './../../containers/CreateApplianceContainer';

const CreateRoomApplianceContainer = (props) => {
    return (
        <CreateApplianceContainer
            title="Room"
            roomId={props.roomId} />
    );
};

CreateRoomApplianceContainer.propTypes = {
    className: PropTypes.string,
    roomId: PropTypes.number,
};

export default CreateRoomApplianceContainer;
