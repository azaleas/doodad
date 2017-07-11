import React from 'react';
import PropTypes from 'prop-types';

import Link from 'react-router-dom/Link';

const RoomsComponent = (props) => {
    return (
        <div className="ui centered stackable grid">
            <div className="row">
                <h1 className="tac">Rooms</h1>
            </div>
            {
                props.data.map((el, index) => (
                    <div 
                        className="sixteen wide mobile eight wide tablet eight wide computer five wide large screen column" 
                        key={el.id}>
                        <Link 
                            className="rooms tac"
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
