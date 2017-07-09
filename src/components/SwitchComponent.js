import React from 'react';
import PropTypes from 'prop-types';

import { Header, Checkbox, Modal } from 'semantic-ui-react'

import ControlBaseComponent from './ControlBaseComponent';

const SwitchComponent = (props) => {
    console.log(props);
    return (
        <div className="column">
            <Modal 
                trigger={
                    <div className="appliance">
                        <ControlBaseComponent 
                            title={props.appliance.name}
                            status={props.appliance.data.value ? "On" : "Off"}/>
                    </div>
                } 
                size="small"
                closeIcon='close'>
                <Header 
                    icon='options' 
                    color='blue'
                    content={`${props.appliance.roomInfo.name} Setup`} />
                <Modal.Content>
                    <div className="switchblock tac">
                        <h1 className="switchblock--title">{`Adjusting the ${props.appliance.name}`}</h1>
                        <Checkbox
                            defaultChecked={props.appliance.data.value}
                            toggle 
                            />
                    </div>
                </Modal.Content>
            </Modal>
        </div>
    )
};

SwitchComponent.propTypes = {
    className: PropTypes.string,
    appliance: PropTypes.object,
};

export default SwitchComponent;
