import React from 'react';
import PropTypes from 'prop-types';

import Link from 'react-router-dom/Link';

import RoomContainer from './../containers/RoomContainer';

const RoomsComponent = (props) => {
    console.log(props);
    return (
        <div className="rooms">
            {
                props.data.map((el, index) => (
                    <Link 
                        key={el.id}
                        to={`${props.path}/${el.id}`}>
                        <h1 className="rooms--name">{el.name}</h1>
                        <p className="rooms--totalControls">Total controls: <span>{el.Appliances.length}</span></p>
                    </Link>
                ))
            }
        </div>
    );
};

RoomsComponent.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
};

export default RoomsComponent;
