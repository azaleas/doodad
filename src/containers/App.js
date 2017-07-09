import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import MainContainer from './MainContainer';
import NotFound from './../components/NotFound';

import './../styles/App.css';

class App extends Component {
  render() {
    return (
        <div className="app container">
            <h1 className="app--title tac">- doodad -</h1>
            <p className="app--desc tac">Control Panel Demo</p>
            <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
  }
}

App.propTypes = {
    className: PropTypes.string,
};

export default App;
