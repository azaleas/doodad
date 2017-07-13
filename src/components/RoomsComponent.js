import React from 'react';
import PropTypes from 'prop-types';

import Link from 'react-router-dom/Link';

/*
    This component craetes the links to individual rooms.
    Router then renders RoomContainer with given roomId.
*/

const RoomsComponent = (props) => {
    return (
        <div className="ui centered stackable grid">
            <div className="row">
                <h1 className="tac">Rooms</h1>
            </div>
            {
                props.data.map((el, index) => (
                    <div 
                        className="eight wide computer five wide large screen five wide widescreen column" 
                        key={el.id}>
                        <Link 
                            className="rooms tac"
                            /*to="rooms/:roomId"*/
                            to={`${props.path}/${el.id}`}>
                            <h1 className="rooms--name">{el.name}</h1>
                        </Link>
                    </div>
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
