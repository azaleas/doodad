import React from 'react';
import PropTypes from 'prop-types';

import CreateApplianceContainer from './../../containers/CreateApplianceContainer';

/*
    This component calls the CreateApplianceContainer
    with given props for room. It passes additional roomId as well.
*/

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
