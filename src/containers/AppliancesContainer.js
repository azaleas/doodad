import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ApplianceComponent from './../components/ApplianceComponent';

class AppliancesContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.data.map((el, index) =>(
                        <ApplianceComponent 
                            key={index}
                            appliance={el} />
                    ))
                }
            </div>
        );
    }
}

AppliancesContainer.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
};

export default AppliancesContainer;
