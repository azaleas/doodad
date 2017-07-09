import React from 'react';
import PropTypes from 'prop-types';

import Link from 'react-router-dom/Link';

const RoomsComponent = (props) => {
    return (
        <div className="rooms">
            {
                props.data.map((el, index) => (
                    <Link 
                        key={el.id}
                        to={`${props.path}/${el.id}`}>
                        <h1 className="rooms--name">{el.name}</h1>
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
