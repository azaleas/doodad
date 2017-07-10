import React from 'react';
import PropTypes from 'prop-types';

const HeaderTitleComponent = (props) => {
    const pathname = window.location.pathname;
    return (
        <div>
            <h1 className="app--title tac">- doodad -</h1>
            <p className="app--desc tac">Control Panel Demo</p>
        </div>
    );
};

HeaderTitleComponent.propTypes = {
    className: PropTypes.string,
};

export default HeaderTitleComponent;
