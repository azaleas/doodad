import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'react-router-dom/BrowserRouter';
import createBrowserHistory from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';
import App from './containers/App';

const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
