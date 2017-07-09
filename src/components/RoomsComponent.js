import React from 'react';
import PropTypes from 'prop-types';

import Link from 'react-router-dom/Link';

const RoomsComponent = (props) => {
    return (
        <div className="ui centered three column stackable grid container">
            {
                props.data.map((el, index) => (
                    <div className="column" key={el.id}>
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
