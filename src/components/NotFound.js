import React from 'react';
import PropTypes from 'prop-types';

import Link from 'react-router-dom/Link';

const NotFound = ({ className }) => {
    return (
       <div className="block404">
            <div className="block404--header tac">404</div>
            <p className="block404--description tac">Nothing was found here. Go to <Link to="/">main.</Link></p>
        </div> 
    );
};

NotFound.propTypes = {
    className: PropTypes.string,
};

export default NotFound;
